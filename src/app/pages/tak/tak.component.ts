import { Component, OnInit, OnDestroy } from '@angular/core';
import { CookieService } from 'src/app/services/cookie.service';

@Component({
  selector: 'app-tak',
  templateUrl: './tak.component.html',
  styleUrls: ['./tak.component.scss']
})
export class TakComponent implements OnInit, OnDestroy {

  constructor(private cookie: CookieService) { }

  ngOnInit() {
    
  }
  
  ngOnDestroy() {
    console.log('test');
    this.cookie.deletePurchase();
    
  }

}
