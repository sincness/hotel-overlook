import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/services/http.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { CookieService } from 'src/app/services/cookie.service';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss']
})
export class BookComponent implements OnInit {
  sortBy: string;
  countries;
  cities;
  img;

  id;
  // id = this.route.snapshot.data.id; // data objektet kommer ikke med i route objektet
  // find en anden måde at overføre landets id til byer komponenten

  country = this.route.snapshot.url[0].path;
  city = this.route.snapshot.url[1].path;
  hotelId = this.route.snapshot.url[2].path;
  roomId = this.route.snapshot.url[3].path;
  cityId;

  hotels;
  hotel;
  rooms;
  room;

  facilities;
  beds;

  like = this.cookie.get('like');

  constructor(private http: HttpService, private route: ActivatedRoute, private router: Router, private location: Location, private cookie: CookieService) {

   }


  async ngOnInit() {
    switch (this.country) {
      case 'danmark':
        this.id = 1;
        this.sortBy = 'danmark';
        break;
      case 'sverige':
        this.id = 2;
        this.sortBy = 'sverige';
        break;
      case 'finland':
        this.id = 3;
        this.sortBy = 'finland';

        break;
      case 'norge':
        this.id = 4;
        this.sortBy = 'norge';

        break;
      case 'tyskland':
        this.id = 5;
        this.sortBy = 'tyskland';


        break;
      case 'polen':
        this.id = 6;
        this.sortBy = 'polen';

        break;
      case 'island':
        this.id = 7;
        this.sortBy = 'island';

        break;
    }
    switch (this.city) {
      case 'københavn':
        this.cityId = 8;

        break;
      case 'aalborg':
        this.cityId = 11;

        break;
      case 'silkeborg':
        this.cityId = 13;

        break;
      case 'aarhus':
        this.cityId = 14;

        break;
      case 'göteborg':
        this.cityId = 1;

        break;
      case 'stockholm':
        this.cityId = 2;

        break;
      case 'jönköping':
        this.cityId = 4;

        break;
      case 'helsinki':
        this.cityId = 5;

        break;
      case 'rauma':
        this.cityId = 7;

        break;
      case 'lillehammer':
        this.cityId = 15;

        break;
      case 'oslo':
        this.cityId = 16;

        break;
      case 'tromsø':
        this.cityId = 18;

        break;
      case 'berlin':
        this.cityId = 19;
        break;
      case 'hamborg':
        this.cityId = 20;
        break;
      case 'frankfurt':
        this.cityId = 21;

        break;
      case 'gdansk':
        this.cityId = 22;
        break;
      case 'wroclaw':
        this.cityId = 23;
        break;
      case 'reykjavik':
        this.cityId = 24;
        break;
      case 'keflavik':
        this.cityId = 29;
        break;
    }
    // switch (this.roomId) {
    //   case 1:

    //     break;

    //   default:
    //     break;
    // }

    // this.urlParam();
    this.getCities(this.id);
    this.getHotels(this.cityId);
    this.getHotel(parseInt(this.hotelId));
    this.getRooms(parseInt(this.hotelId));
    this.getRoom(parseInt(this.roomId));
    // if (this.id === undefined) this.getCities(1);
    // (this.id === undefined) ? this.getCities(1) : this.getCities(this.id);
    // this.getCities(1);
    const data: any = await this.http.getCountries().toPromise();
    this.countries = data.items;

    // (this.countries.items === undefined) ? this.countries.item : this.countries.items;
  }

  reload() {
    setTimeout(() => {
      location.reload();
    }, 500);
  }

  async getCities(id: number) {
    const data: any = await this.http.getCities(id).toPromise();
    this.cities = data.items;
  }
  async getHotels(id: number) {
    const data: any = await this.http.getHotels(id).toPromise();
    // this.hotels = data.items;
  }
  async getHotel(id: number) {
    const data: any = await this.http.getHotel(id).toPromise();
    this.hotel = data.item;
    this.facilities = this.hotel.facilities;

  }

  async getRooms(id: number) {
    const data: any = await this.http.getRooms(id).toPromise();
    this.rooms = data.items;

  }

  async getRoom(id: number) {
    const data: any = await this.http.getRoom(id).toPromise();
    this.room = data.item;

  }

  getIdx() {
    return this.id - 1;
  }

  priceFix(price) {
    return Math.trunc(price);
  }


  filterBy(country: string, id: number) {
    this.img = this.countries[id - 1].image;
    document.getElementById('image').setAttribute('src', this.img);
    this.sortBy = this.lowerCase(country);
    this.getCities(id);
    this.location.go(`/hoteller/${this.lowerCase(country)}`);
  }



  lowerCase(string: string) {
    return string.toLowerCase();
  }
  upperCase(string: string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  urlParam() {
    this.sortBy = this.upperCase(this.route.snapshot.params.id);
  }

  deleteRating() {
    this.cookie.unLike();
  }
  postRating() {
    this.cookie.setLike();
  }



}
