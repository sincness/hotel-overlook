import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-finder',
  templateUrl: './finder.component.html',
  styleUrls: ['./finder.component.scss']
})
export class FinderComponent implements OnInit {
  search = [];
  second = [];
  error;
  hits;
  country: any = this.route.snapshot.url[1].path;
  persons: any = this.route.snapshot.url[2].path;

  constructor(private router: Router, private route: ActivatedRoute, private http: HttpService) { }

  async ngOnInit() {
    setTimeout(_ => {
      this.hits = document.querySelectorAll('.shown').length;
    }, 200);

    switch (this.country) {
      case 'danmark':
        this.getHotel(10);
        this.getHotel(11);
        this.getHotel(12);
        this.getHotel(13);
        this.getHotel(14);
        this.getHotel(15);
        this.getHotel(16);

        break;
      case 'sverige':
        this.getHotel(1);
        this.getHotel(3);
        this.getHotel(4);
        this.getHotel(5);
        this.getHotel(6);



        break;
      case 'finland':
        this.getHotel(7);
        this.getHotel(8);
        this.getHotel(9);

        break;
      case 'norge':
        this.getHotel(17);
        this.getHotel(18);
        this.getHotel(19);
        this.getHotel(20);
        this.getHotel(21);
        this.getHotel(22);

        break;
      case 'tyskland':
        this.getHotel(23);
        this.getHotel(24);
        this.getHotel(25);
        this.getHotel(26);


        break;
      case 'polen':
        this.getHotel(27);
        this.getHotel(28);

        break;
      case 'island':
        this.getHotel(30);
        this.getHotel(31);

        break;
    }

  }

  submit() {
    let x: NodeListOf<HTMLElement> = document.querySelectorAll('option:checked');
    const country = x[0].innerText;
    const persons = x[1].innerText;
    if (country === 'Vælg en destination') this.error = 'Vælg en destination';
    if (persons === 'Vælg antal personer') this.error = 'Vælg antal personer';
    if (country === 'Vælg en destination' && persons === 'Vælg antal personer') this.error = 'Vælg en destination og antal personer';
    if (country !== 'Vælg en destination' && persons !== 'Vælg antal personer') this.error = undefined;
    if (this.error === undefined) {
      this.router.navigateByUrl(`/find/${country.toLowerCase()}/${persons}`);
      setTimeout(_ => {
        location.reload()
      }, 500);
    }
    setTimeout(_ => {
      this.error = ''
    }, 2000);
  }

  async getHotel(id: number) {
    let data: any = await this.http.getHotel(id).toPromise();
    let items = (data.items) ? data.items : data.item;

    this.second.push(...items.rooms.items);
    this.search.push(items);


  }

  getCity(hotelId) {

    switch(hotelId) {
      case '1':
      case '3':
        return 'göteborg';
      case '4':
      case '5':
        return 'stockholm';
      case '6':
        return 'jönköping';
      case '7':
      case '8':
        return 'helsinki';
      case '9':
        return 'rauma';
      case '10':
      case '11':
        return 'københavn';
      case '12':
      case '13':
        return 'aalborg';
      case '14':
        return 'silkeborg';
      case '15':
      case '16':
        return 'aarhus';
      case '17':
      case '18':
        return 'lillehammer';
      case '19':
      case '20':
        return 'oslo';
      case '21':
      case '22':
        return 'tromsø';
      case '23':
      case '24':
        return 'berlin';
      case '25':
        return 'hamborg';
      case '26':
        return 'frankfurt';
      case '27':
        return 'gdansk';
      case '28':
        return 'wroclaw';
      case '30':
        return 'reykjavik';
      case '31':
        return 'keflavik';
    }
  }


  upperCase(string: string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }


}
