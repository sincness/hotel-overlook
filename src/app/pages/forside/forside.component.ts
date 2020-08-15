import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-forside',
  templateUrl: './forside.component.html',
  styleUrls: ['./forside.component.scss']
})
export class ForsideComponent implements OnInit {

  nyheder;
  rooms = [];

  constructor(private http: HttpService) { }

  async ngOnInit() {
    this.nyheder = await this.http.getNyheder().toPromise();
    this.nyheder = this.nyheder.items;

    for (let i = 1; i < 4; i++) {      
      this.room(i);
    }

  }

  async room(id: number) {
    const room: any = await this.http.getRoom(id).toPromise();
    this.rooms.push((room.items === undefined) ? room.item : room.items);
  }

  log(id) {
    location.href = `/nyheder/${id}`
  }

  hop(id) {
    location.href = `/rooms/${id}`
  }

  // async randomRoom() {
  //   const room: any = await this.http.getRooms(this.randomize()).toPromise();
  //   this.rooms.push(room.items);
  //   console.log(this.rooms);
  // }

  // // Randomizer funktion til random værelses fetching
  // // id kan blive fra 1 -> 29
  // randomize() {
  //   return Math.floor(Math.random() * 29) + 1;
  // }
}
