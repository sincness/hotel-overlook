import { Component, OnInit, OnChanges } from '@angular/core';
import { HttpService } from 'src/app/services/http.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { AuthService } from 'src/app/services/auth.service';
import { CookieService } from 'src/app/services/cookie.service';

@Component({
  selector: 'app-hotel',
  templateUrl: './hotel.component.html',
  styleUrls: ['./hotel.component.scss']
})
export class HotelComponent implements OnInit {
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
  cityId;

  hotels;
  hotel;
  rooms;

  facilities;


  rating;
  hotelTitle;
  ratingTitle;

  like = this.cookie.get('like');

  constructor(private http: HttpService, private route: ActivatedRoute, private router: Router, private location: Location, private auth: AuthService, private cookie: CookieService) {
  
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
    
    // this.urlParam();
    this.getCities(this.id);
    this.getHotels(this.cityId);
    this.getHotel(parseInt(this.hotelId));
    this.getRooms(parseInt(this.hotelId));
    // if (this.id === undefined) this.getCities(1);
    // (this.id === undefined) ? this.getCities(1) : this.getCities(this.id);
    // this.getCities(1);
    this.getRating(parseInt(this.auth.currentUserValue.user_id));
    const data: any = await this.http.getCountries().toPromise();
    this.countries = data.items;
    
    // (this.countries.items === undefined) ? this.countries.item : this.countries.items;
  }

  reload() {
    setTimeout(_ => {
      location.reload();
    }, 500);
  }

  async getCities(id: number) {
    const data: any = await this.http.getCities(id).toPromise();
    this.cities = data.items;
    console.log(this.cities);
  }
  async getHotels(id: number) {
    const data: any = await this.http.getHotels(id).toPromise();
    this.hotels = data.items;
  }
  async getHotel(id: number) {
    const data: any = await this.http.getHotel(id).toPromise();
    this.hotel = data.item;
    this.facilities = this.hotel.facilities;
    this.hotelTitle = this.hotel.hotel_title;
  }
  
  async getRooms(id: number) {
    const data: any = await this.http.getRooms(id).toPromise();
    this.rooms = data.items;
  }



  // Rating % Liking
  async deleteRating() {
    // let x = await this.http.deleteRating(50).toPromise();
    // console.log(x);
    this.cookie.unLike();
  }
  async getRating(id: number) {
    const data: any = await this.http.getRating(id).toPromise();
    if (data.status) {
      
      if(data.item) {
        this.rating = data.item;
        this.ratingTitle = this.rating.hotel_title;
        // console.log(this.like);
      }
      if(data.items) {
        this.rating = this.rating.items;
        this.rating.forEach(i => {
          if (i.hotel_title === this.hotelTitle) {
            this.ratingTitle = i.hotel_title;
          }
        });
      }
      // let t = this.rating.hotel_title === this.hotel.hotel_title;
      
    }
    // this.rating = data;
  }
  postRating() {
    const data = new FormData;    
    data.append('user_id', this.auth.currentUserValue.user_id);
    data.append('hotel_id', this.hotelId);
    data.append('num_stars', '5');
  this.cookie.setLike();    

    // this.http.postRating(data).subscribe((res: any) => {
    //   if (res.status) this.cookie.setLike();
    // })
  }






  getIdx() {
    return this.id - 1;
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

}
