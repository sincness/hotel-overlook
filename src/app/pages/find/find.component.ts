import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-find',
  templateUrl: './find.component.html',
  styleUrls: ['./find.component.scss']
})
export class FindComponent implements OnInit {
  // search = [];
  // second = [];
  error;
  country;
  persons;

  constructor(private router: Router, private route: ActivatedRoute, private http: HttpService) { }

  async ngOnInit() {

    
    // (this.route.snapshot.url[1].path) ? this.country = this.route.snapshot.url[1].path : this.country = null;
    // (this.route.snapshot.url[2].path) ? this.persons = this.route.snapshot.url[2].path : this.persons = null;

    // switch (this.country) {
    //   case 'danmark':
    //     this.getHotel(10);
    //     this.getHotel(11);
    //     this.getHotel(12);
    //     this.getHotel(13);
    //     this.getHotel(14);
    //     this.getHotel(15);
    //     this.getHotel(16);    
    //     console.log(this.search);
    //     console.log(this.second);
        
    //     break;
    //   case 'sverige':
    //     this.getHotel(1);
    //     this.getHotel(3);
    //     this.getHotel(4);
    //     this.getHotel(5);
    //     this.getHotel(6);
    //     console.log(this.search);
    //     console.log(this.second);
        


    //     break;
    //   case 'finland':
    //     this.getHotel(7);
    //     this.getHotel(8);
    //     this.getHotel(9);
    //     console.log(this.search);
    //     console.log(this.second);

    //     break;
    //   case 'norge':
    //     this.getHotel(17);
    //     this.getHotel(18);
    //     this.getHotel(19);
    //     this.getHotel(20);
    //     this.getHotel(21);
    //     this.getHotel(22);
    //     console.log(this.search);
    //     console.log(this.second);
        
    //     break;
    //   case 'tyskland':
    //     this.getHotel(23);
    //     this.getHotel(24);
    //     this.getHotel(25);
    //     this.getHotel(26);
    //     console.log(this.search);
    //     console.log(this.second);

        
    //     break;
    //   case 'polen':
    //     this.getHotel(27);
    //     this.getHotel(28);
    //     console.log(this.search);
    //     console.log(this.second);

    //     break;
    //   case 'island':
    //     this.getHotel(30);
    //     this.getHotel(31);
    //     console.log(this.search);
    //     console.log(this.second);

    //     break;
    // }
    
  }


  submit() {    
    // const country = this.form.get('country').value;
    // const persons = this.form.get('persons').value;    
    let x: NodeListOf<HTMLElement> = document.querySelectorAll('option:checked');
    const country = x[0].innerText;
    const persons = x[1].innerText;
    if (country === 'Vælg en destination') this.error = 'Vælg en destination';
    if (persons === 'Vælg antal personer') this.error = 'Vælg antal personer';
    if (country === 'Vælg en destination' && persons === 'Vælg antal personer') this.error = 'Vælg en destination og antal personer';
    if (country !== 'Vælg en destination' && persons !== 'Vælg antal personer') this.error = undefined;
    if (this.error === undefined) this.router.navigateByUrl(`/find/${country.toLowerCase()}/${persons}`);
    setTimeout(_ => {
      this.error = '';
    }, 2000);
  }

  // async getHotel(id: number) {
  //   let data: any = await this.http.getHotel(id).toPromise();
  //   let items = (data.items) ? data.items : data.item;
    
  //   this.second.push(...items.rooms.items);
  //   // this.second.push(items.rooms.items);
  //   this.search.push(items);
    
  // }
  

}
