import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-heading',
  templateUrl: './heading.component.html',
  styleUrls: ['./heading.component.scss']
})
export class HeadingComponent implements OnInit {

  text;

  constructor(private router: Router) { }

  ngOnInit(): void {
  this.router.events.subscribe(e => {
    if (e instanceof NavigationEnd) {      
     switch(this.router.url) {
       case '/forside':
         this.text = 'VELKOMMEN TIL HOTEL OVERLOOK ONLINE'
       break;
       case '/nyheder':

         this.text = 'SE VORES NYHEDER'
         break;
       case '/find':
        case '/find/danmark':
        case '/find/danmark/1':
        case '/find/danmark/2':
        case '/find/danmark/3':
        case '/find/danmark/4':
        case '/find/danmark/5':
        case '/find/danmark/6':
        case '/find/danmark/7':
        case '/find/danmark/8':
        case '/find/sverige':
        case '/find/sverige/1':
        case '/find/sverige/2':
        case '/find/sverige/3':
        case '/find/sverige/4':
        case '/find/sverige/5':
        case '/find/sverige/6':
        case '/find/sverige/7':
        case '/find/sverige/8':
        case '/find/finland':
        case '/find/finland/1':
        case '/find/finland/2':
        case '/find/finland/3':
        case '/find/finland/4':
        case '/find/finland/5':
        case '/find/finland/6':
        case '/find/finland/7':
        case '/find/finland/8':
        case '/find/norge':
        case '/find/norge/1':
        case '/find/norge/2':
        case '/find/norge/3':
        case '/find/norge/4':
        case '/find/norge/5':
        case '/find/norge/6':
        case '/find/norge/7':
        case '/find/norge/8':
        case '/find/tyskland':
        case '/find/tyskland/1':
        case '/find/tyskland/2':
        case '/find/tyskland/3':
        case '/find/tyskland/4':
        case '/find/tyskland/5':
        case '/find/tyskland/6':
        case '/find/tyskland/7':
        case '/find/tyskland/8':
        case '/find/polen':
        case '/find/polen/1':
        case '/find/polen/2':
        case '/find/polen/3':
        case '/find/polen/4':
        case '/find/polen/5':
        case '/find/polen/6':
        case '/find/polen/7':
        case '/find/polen/8':
        case '/find/island':
        case '/find/island/1':
        case '/find/island/2':
        case '/find/island/3':
        case '/find/island/4':
        case '/find/island/5':
        case '/find/island/6':
        case '/find/island/7':
        case '/find/island/8':
         this.text = 'FIND DIT VÆRELSE'
       break;
      case '/hoteller/danmark':
      case '/hoteller/danmark/aalborg':
      case '/hoteller/danmark/københavn':
      case '/hoteller/danmark/silkeborg':
      case '/hoteller/danmark/aarhus':
      case '/hoteller/sverige':
      case '/hoteller/sverige/göteborg':
      case '/hoteller/sverige/stockholm':
      case '/hoteller/sverige/jönköping':
      case '/hoteller/finland':
      case '/hoteller/finland/helsinki':
      case '/hoteller/finland/rauma':
      case '/hoteller/norge':
      case '/hoteller/norge/lillehammer':
      case '/hoteller/norge/oslo':
      case '/hoteller/norge/tromsø':
      case '/hoteller/tyskland':
      case '/hoteller/tyskland/berlin':
      case '/hoteller/tyskland/hamborg':
      case '/hoteller/tyskland/frankfurt':
      case '/hoteller/polen':
      case '/hoteller/polen/gdansk':
      case '/hoteller/polen/wroclaw':
      case '/hoteller/island':
      case '/hoteller/island/reykjavik':
      case '/hoteller/island/keflavik':
        this.text = 'HOTELLER & DESTINATIONER'  
      break;
       case '/om-overlook':
         this.text = 'OM OVERLOOK'
         break;
       case '/rooms':
       case '/rooms/1':
       case '/rooms/2':
       case '/rooms/3':
       case '/rooms/4':
       case '/rooms/5':
       case '/rooms/6':
       case '/rooms/7':
         this.text = 'VÆRELSER'
       break;
       case '/reservation':
       case '/reservation/tak':
         this.text = 'RESERVATION'
       break;

       default:
         this.text = undefined;
       break;
     }

    }
  })

  }

}
