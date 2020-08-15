import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-nyhed',
  templateUrl: './nyhed.component.html',
  styleUrls: ['./nyhed.component.scss']
})
export class NyhedComponent implements OnInit {
  id = this.route.snapshot.url[1].path;
  data;
  news;
  constructor(private route: ActivatedRoute, private http: HttpService) { }

  async ngOnInit() {
    this.getNyhed();
    this.getNyheder();
  }

  async getNyhed() {
    let x: any = await await this.http.getNyhed(this.id).toPromise();
    this.data = x.item;
    console.log(this.data);
    
  }

  async getNyheder() {
    let x: any = await this.http.getNyheder().toPromise();
    this.news = x.items;
    console.log(this.news);
    
  }

  getMonth(date) {
    const id = new Date(date).getMonth();
    const months = ['Januar', 'Frebruar', 'Marts', 'April', 'Maj', 'Juni', 'Juli', 'August', 'November', 'Oktober', 'September', 'December'];
    return months[id];
  }

  reload() {
    setTimeout(_ => {
      location.reload()
    }, 500);
  }
}
