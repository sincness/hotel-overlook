import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/services/http.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-room',
  templateUrl: './room.component.html',
  styleUrls: ['./room.component.scss']
})
export class RoomComponent implements OnInit {

  id = this.route.snapshot.url[1].path;
  room;
  rooms = [];

  constructor(private http: HttpService, private route: ActivatedRoute) { }

  async ngOnInit() {
    
    
    for (let i = 1; i < 8; i++) {  
      this.getRooms(i);
    }
    this.getRoom(this.id)
    
  }

  async getRoom(id) {
    let data: any = await this.http.getRoom(id).toPromise();
    this.room = data.item;
    console.log(data.item);
    
  }

  async getRooms(id: number) {
    const room: any = await this.http.getRoom(id).toPromise();
    this.rooms.push(room.item);

  }

  priceFix(price) {
    return Math.trunc(price);
  }


  
  reload() {
    setTimeout(() => {
      location.reload();
    }, 500);
  }

}
