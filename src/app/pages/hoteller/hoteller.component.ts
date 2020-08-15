import { Component, OnInit, OnChanges } from '@angular/core';
import { HttpService } from 'src/app/services/http.service';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';


@Component({
  selector: 'app-hoteller',
  templateUrl: './hoteller.component.html',
  styleUrls: ['./hoteller.component.scss']
})
export class HotellerComponent implements OnInit {
  sortBy: string;
  countries;
  cities;
  img;
  id = this.route.snapshot.data.id;



  constructor(private http: HttpService, private route: ActivatedRoute, private router: Router, private location: Location) {

   }


  async ngOnInit() {
    this.urlParam();
    this.getCities(this.id);

    // if (this.id === undefined) this.getCities(1);
    // (this.id === undefined) ? this.getCities(1) : this.getCities(this.id);
    // this.getCities(1);
    const data: any = await this.http.getCountries().toPromise();
    this.countries = data.items;
    
    // (this.countries.items === undefined) ? this.countries.item : this.countries.items;
    
  }

  async getCities(id: number) {
    const data: any = await this.http.getCities(id).toPromise();
    this.cities = data.items;
    console.log(this.cities);
  }

  getIdx() {
    return this.id - 1;
  }


  filterBy(country: string, id: number) {
    this.img = this.countries[id - 1].image;
    document.getElementById('image').setAttribute('src', this.img);
    this.sortBy = this.lowerCase(country);
    this.getCities(id);
    // location.href = `/hoteller/${this.lowerCase(country)}`; // Reload hver gang for at den ikke driller med routes'ne.
    // this.location.go(`/hoteller/${this.lowerCase(country)}`);  // Egentlige optimale løsning uden reload
  }
  reload() {    
    setTimeout(() => {
      location.reload();
    }, 500);
  }


  lowerCase(string: string) {
    return string.toLowerCase();
  }
  upperCase(string: string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  urlParam() {
    this.sortBy = this.router.url.replace('/hoteller/', '');
  }
}
