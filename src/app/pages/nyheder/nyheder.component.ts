import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/services/http.service';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-nyheder',
  templateUrl: './nyheder.component.html',
  styleUrls: ['./nyheder.component.scss']
})
export class NyhederComponent implements OnInit {
  data;
  user = this.auth.currentUserValue;
  constructor(private auth: AuthService, private http: HttpService) { }

  ngOnInit() {
    this.getNyheder();
    
  }

  async getNyheder() {
    let x: any = await this.http.getNyheder().toPromise();
    this.data = x.items;
  }

  read(id) {
    location.href = `/nyheder/${id}`
  }

  logout() {
    this.auth.logout();
    setTimeout(_ => {
      location.reload()
    }, 500);
  }




}
