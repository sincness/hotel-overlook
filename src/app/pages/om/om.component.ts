import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-om',
  templateUrl: './om.component.html',
  styleUrls: ['./om.component.scss']
})
export class OmComponent implements OnInit {
  user = this.auth.currentUserValue;
  constructor(private auth: AuthService) { }

  ngOnInit(): void {
  }

  logout() {    
    this.auth.logout();
    setTimeout(() => {
      location.reload();
    }, 500);
  }

}
