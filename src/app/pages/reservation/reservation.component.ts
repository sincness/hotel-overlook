import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { HttpService } from 'src/app/services/http.service';
import { CookieService } from 'src/app/services/cookie.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.scss']
})
export class ReservationComponent implements OnInit {
  order: FormGroup;
  // hotel = (this.route.snapshot.url[1].path) ? this.route.snapshot.url[1].path : null;
  // room = (this.route.snapshot.url[2].path) ? this.route.snapshot.url[2].path : null;
  // flex = (this.route.snapshot.url[3].path) ? this.route.snapshot.url[3].path : null;

  hotel = (this.route.snapshot.params.hotel) ? this.route.snapshot.params.hotel : null;
  room = (this.route.snapshot.params.room) ? this.route.snapshot.params.room : null;
  flex = (this.route.snapshot.params.flex) ? this.route.snapshot.params.flex : null;

  constructor(private fb: FormBuilder, private auth: AuthService, private http: HttpService, private cookie: CookieService, private route: ActivatedRoute) { }

  ngOnInit(): void {

    setTimeout(_ => {
      const x: any = document.querySelectorAll('input[type=radio]');
      console.log(x);

      if (this.flex === null) x[0].checked = true;
      if (this.flex === '0') x[0].checked = true;
      if (this.flex === '1') x[1].checked = true;

    }, 200);

    this.order = this.fb.group({
      hotel: [this.hotel, Validators.required],
      room: [this.room, Validators.required],
      is_flex: [this.flex, Validators.required],
      num_persons: [null, Validators.required],
      firstname: ['', Validators.required],
      lastname: ['', Validators.required],
      phone: ['', Validators.required],
      check: ['', Validators.required],
    });
  }

  // getter funktion til lettere at indhente formdata
  get f() { return this.order.controls; }

  buy() {
    if (this.order.valid) {
      let email = (this.auth.currentUserValue.email) ? this.auth.currentUserValue.email : 'test@test.dk';
      const data = new FormData;
      data.append('user_id', this.auth.currentUserValue.user_id);
      data.append('hotel_id', this.order.get('hotel').value);
      data.append('room_id', this.order.get('room').value);
      data.append('is_flex', this.order.get('is_flex').value);
      data.append('num_persons', this.order.get('num_persons').value);
      data.append('checkin', '123123123123');
      data.append('checkout', '123123123123');
      data.append('firstname', this.order.get('firstname').value);
      data.append('lastname', this.order.get('lastname').value);
      data.append('email', email);
      data.append('phone', this.order.get('phone').value);
      console.log(this.order.value);

      this.http.postReservation(data).subscribe((res: any) => {
        if (res.status) {
          this.cookie.setPurchase();
          location.href = '/reservation/tak';
        };

      });
    }


  }
}
