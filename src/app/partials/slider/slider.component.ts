import { Component, OnInit, Inject, HostListener } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { DOCUMENT } from '@angular/common';

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
