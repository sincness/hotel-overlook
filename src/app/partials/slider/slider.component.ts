import { Component, OnInit, Inject, HostListener } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent implements OnInit {

  images = [];
  current: number = 0;
  width = window.innerWidth;
  
  constructor(private router: Router) { }

  ngOnInit(): void {
    const path = '../../../assets/img/';
    this.router.events.subscribe(e => {
      if (e instanceof NavigationEnd) {      
       switch(this.router.url) {
         case '/forside':
           this.images = [path + 'frankfurt-skyline-germany.jpg', path + 'gdansk-center-church-poland.jpg', path + 'harbour-gothenburg.jpg']
         break;
         case '/nyheder':
         case '/find':
          case '/find/danmark':
            case '/find/danmark/1':
            case '/find/danmark/2':
            case '/find/danmark/3':
            case '/find/danmark/4':
            case '/find/danmark/5':
            case '/find/danmark/6':
            case '/find/danmark/7':
            case '/find/sverige':
            case '/find/sverige/1':
            case '/find/sverige/2':
            case '/find/sverige/3':
            case '/find/sverige/4':
            case '/find/sverige/5':
            case '/find/sverige/6':
            case '/find/sverige/7':
            case '/find/finland':
            case '/find/finland/1':
            case '/find/finland/2':
            case '/find/finland/3':
            case '/find/finland/4':
            case '/find/finland/5':
            case '/find/finland/6':
            case '/find/finland/7':
            case '/find/norge':
            case '/find/norge/1':
            case '/find/norge/2':
            case '/find/norge/3':
            case '/find/norge/4':
            case '/find/norge/5':
            case '/find/norge/6':
            case '/find/norge/7':
            case '/find/tyskland':
            case '/find/tyskland/1':
            case '/find/tyskland/2':
            case '/find/tyskland/3':
            case '/find/tyskland/4':
            case '/find/tyskland/5':
            case '/find/tyskland/6':
            case '/find/tyskland/7':
            case '/find/polen':
            case '/find/polen/1':
            case '/find/polen/2':
            case '/find/polen/3':
            case '/find/polen/4':
            case '/find/polen/5':
            case '/find/polen/6':
            case '/find/polen/7':
            case '/find/island':
            case '/find/island/1':
            case '/find/island/2':
            case '/find/island/3':
            case '/find/island/4':
            case '/find/island/5':
            case '/find/island/6':
            case '/find/island/7':
           this.images = [path + 'overlook-crown.jpg']
         break;
         case '/om-overlook':
         case '/rooms':
         case '/rooms/1':
         case '/rooms/2':
         case '/rooms/3':
         case '/rooms/4':
         case '/rooms/5':
         case '/rooms/6':
         case '/rooms/7':
           this.images = [path + 'overlook-aalborg-oest.jpg']
         break;
         case '/login':
         case '/reservation':
           this.images = [path + 'overlook-victoria.jpg']
         break;
 
         default:
           this.images = [];
         break;
       }
 
      }
    })
  }

  prev() {
    const slides = document.querySelectorAll('.slider figure') as NodeListOf<HTMLElement>;
    this.current = (this.current >= 1) ? (this.current - 1) % - this.images.length : this.images.length - 1;
    slides.forEach(slide => slide.style.transform = `translateX(-${this.width * this.current}px)`)
  }
  next() {
    const slides = document.querySelectorAll('.slider figure') as NodeListOf<HTMLElement>;
    this.current = (this.current + 1) % this.images.length;
    slides.forEach(slide => slide.style.transform = `translateX(-${this.width * this.current}px)`)
  }
  
  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.width = window.innerWidth;
  }
}
