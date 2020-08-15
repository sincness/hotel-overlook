import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.scss']
})
export class RoomsComponent implements OnInit {


  rooms = [];

  constructor(private http: HttpService) { }

  ngOnInit(): void {
    for (let i = 1; i < 8; i++) {      
      this.room(i);
      console.log(this.rooms);
      
    }
  }

  async room(id: number) {
    const room: any = await this.http.getRoom(id).toPromise();
    this.rooms.push((room.items === undefined) ? room.item : room.items);
  }


}
