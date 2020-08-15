import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HotellerComponent } from './hoteller.component';
import { ByerComponent } from './byer/byer.component';
import { HotelComponent } from './hotel/hotel.component';
import { BookingComponent } from './booking/booking.component';
import { BookComponent } from './book/book.component';


const routes: Routes = [
  { path: '', redirectTo: 'danmark', pathMatch: 'full' },
  { path: 'danmark', component: HotellerComponent, pathMatch: 'full', data: { id: 1 }},
  { path: 'danmark/:id', component: ByerComponent, pathMatch: 'full' },
  { path: 'danmark/:id/:hotel', component: HotelComponent },
  { path: 'danmark/:id/:hotel/:room', component: BookComponent },
  // { path: 'danmark/:id/:hotel/:room/:type', component: BookComponent },
  { path: 'sverige', component: HotellerComponent, data: { id: 2 }},
  { path: 'sverige/:id', component: ByerComponent, pathMatch: 'full' },
  { path: 'sverige/:id/:hotel', component: HotelComponent },
  { path: 'sverige/:id/:hotel/:room', component: BookComponent },
  // { path: 'sverige/:id/:hotel/:room/:type', component: BookComponent },
  { path: 'finland', component: HotellerComponent, data: { id: 3 }},
  { path: 'finland/:id', component: ByerComponent, pathMatch: 'full' },
  { path: 'finland/:id/:hotel', component: HotelComponent },
  { path: 'finland/:id/:hotel/:room', component: BookComponent },
  // { path: 'finland/:id/:hotel/:room/:type', component: BookComponent },
  { path: 'norge', component: HotellerComponent, data: { id: 4 }},
  { path: 'norge/:id', component: ByerComponent, pathMatch: 'full' },
  { path: 'norge/:id/:hotel', component: HotelComponent },
  { path: 'norge/:id/:hotel/:room', component: BookComponent },
  // { path: 'norge/:id/:hotel/:room/:type', component: BookComponent },
  { path: 'tyskland', component: HotellerComponent, data: { id: 5 }},
  { path: 'tyskland/:id', component: ByerComponent, pathMatch: 'full' },
  { path: 'tyskland/:id/:hotel', component: HotelComponent },
  { path: 'tyskland/:id/:hotel/:room', component: BookComponent },
  // { path: 'tyskland/:id/:hotel/:room/:type', component: BookComponent },
  { path: 'polen', component: HotellerComponent, data: { id: 6 } },
  { path: 'polen/:id', component: ByerComponent, pathMatch: 'full' },
  { path: 'polen/:id/:hotel', component: HotelComponent },
  { path: 'polen/:id/:hotel/:room', component: BookComponent },
  // { path: 'polen/:id/:hotel/:room/:type', component: BookComponent },
  { path: 'island', component: HotellerComponent, data: { id: 7 }},
  { path: 'island/:id', component: ByerComponent, pathMatch: 'full' },
  { path: 'island/:id/:hotel', component: HotelComponent },
  { path: 'island/:id/:hotel/:room', component: BookComponent },
  // { path: 'island/:id/:hotel/:room/:type', component: BookComponent },


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HotellerRoutingModule { }
