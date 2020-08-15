import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  state: boolean;
  error;
  constructor(private router: Router, private fb: FormBuilder) { }

  ngOnInit(): void {
    this.router.events.subscribe(e => {
      if (e instanceof NavigationEnd) {      
       switch(this.router.url) {
         case '/forside':
         case '/om-overlook':
         case '/nyheder':
         case '/nyheder/1':
         case '/nyheder/2':
         case '/nyheder/3':
         case '/nyheder/4':
         case '/nyheder/5':
         case '/nyheder/6':
         case '/nyheder/7':
         case '/rooms':
         case '/rooms/1':
         case '/rooms/2':
         case '/rooms/3':
         case '/rooms/4':
         case '/rooms/5':
         case '/rooms/6':
         case '/rooms/7':
         case '/login':
         case '/reservation':
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
           this.state = true;
         break;
 
         default:
           this.state = false;
         break;
       }
 
      }
    })
  
  
  }

  find() {
    let x: NodeListOf<HTMLElement> = document.querySelectorAll('option:checked');    
    const country = x[0].innerText;
    const persons = x[1].innerText;
    
    if (country === 'Vælg en destination') this.error = 'Vælg en destination';
    if (persons === 'Vælg antal personer') this.error = 'Vælg antal personer';
    if (country === 'Vælg en destination' && persons === 'Vælg antal personer') this.error = 'Vælg en destination og antal personer';
    if (country !== 'Vælg en destination' && persons !== 'Vælg antal personer') this.error = undefined;

    switch(this.error) {
      case undefined:
        this.router.navigateByUrl(`/find/${country.toLowerCase()}/${persons}`);
        break;
      case 'Vælg en destination og antal personer':
      case 'Vælg en destination':
      case 'Vælg antal personer':
        this.router.navigateByUrl('/find');
        break;
    }

    
    //   country = x[0].innerText.toLowerCase(),
    //   persons = x[1].innerText;
    //   console.log('/find/'+country+'/'+persons);
    // (country && persons) ? this.router.navigateByUrl(`/find/${country}/${persons}`) : this.error = 'Vælg destination og antal personer'
  }
  

}
