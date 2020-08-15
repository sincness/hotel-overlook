import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CookieService } from './cookie.service';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient, private cookie: CookieService) { }

  getNyheder() {
    return this.http.get('https://api.mediehuset.net/overlook/news');
  }
  getNyhed(id: string) {
    return this.http.get(`https://api.mediehuset.net/overlook/news/${id}`);
  }
  getCountries() {
    return this.http.get('https://api.mediehuset.net/overlook/countries');
  }
  getCountry(id: number) {
    return this.http.get(`https://api.mediehuset.net/overlook/countries/${id}`);
  }
  getCities(countryId: number) {
    return this.http.get(`https://api.mediehuset.net/overlook/cities/by_country/${countryId}`);
  }
  getCity(id: number) {
    return this.http.get(`https://api.mediehuset.net/overlook/cities/${id}`);
  }
  getRooms(hotelId: number) {
    return this.http.get(`https://api.mediehuset.net/overlook/rooms/by_hotel/${hotelId}`);
  }
  getRoom(roomId: number) {
    return this.http.get(`https://api.mediehuset.net/overlook/rooms/${roomId}`);
  }
  getHotels(cityId: number) {
    return this.http.get(`https://api.mediehuset.net/overlook/hotels/by_city/${cityId}`);
  }
  getHotel(hotelId: number) {
    return this.http.get(`https://api.mediehuset.net/overlook/hotels/${hotelId}`);
  }


  // Rating / Liking
  getRating(id: number) {
    return this.http.get(`https://api.mediehuset.net/overlook/ratings/list_by_user/${id}`);
  }
  postRating(data) {
    const headers = new HttpHeaders().set('Authorization', `Bearer ${this.cookie.get('token')}`);
    return this.http.post(`https://api.mediehuset.net/overlook/ratings`, data, { headers });
  }
  deleteRating(id: number) {
    return this.http.delete(`https://api.mediehuset.net/overlook/ratings/${id}`);
  }




  // Reservation

  getReservation(id: number) {
    return this.http.get(`https://api.mediehuset.net/overlook/reservations/list_by_user/${id}`);
  }

  deleteReservation(id: number) {
    return this.http.delete(`https://api.mediehuset.net/overlook/reservations/${id}`);
  }

  postReservation(data) {
    const headers = new HttpHeaders().set('Authorization', `Bearer ${this.cookie.get('token')}`);
    return this.http.post(`https://api.mediehuset.net/overlook/reservations`, data, { headers });
  }




}
