import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-min-side',
  templateUrl: './min-side.component.html',
  styleUrls: ['./min-side.component.scss']
})
export class MinSideComponent implements OnInit {
  user = this.auth.currentUserValue;
  reservations;

  constructor(private auth: AuthService, private http: HttpService) { }

  ngOnInit(): void {
    this.getReservations();
    
  }

  async getReservations() {
    // this.reservations = await this.http.getReservation(parseInt(this.auth.currentUserValue.user_id)).toPromise();
    this.http.getReservation(parseInt(this.auth.currentUserValue.user_id)).subscribe((res: any) => {
      console.log(res);
      this.reservations = res.items;
    });

    // if (this.reservations.status) this.reservations = this.reservations.items;
    // console.log(this.reservations);
    
  }


  async remove(id, elm) {
    elm.target.parentNode.parentNode.parentNode.remove();    
    let x = this.http.deleteReservation(id).toPromise();
    if (x) {
      document.body.insertAdjacentHTML('afterbegin', 
          `<section class="confirm">
            <p>Turen er blevet afbestilt og fjernet fra oversigten.</p>
          </section>`
        );

        setTimeout(() => {
          document.getElementsByClassName('confirm')[0].remove();
        }, 4000);
    }
  }


  logout() {    
    this.auth.logout();
    setTimeout(() => {
      location.reload();
    }, 500);
  }

}
