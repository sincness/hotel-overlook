import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HotellerRoutingModule } from './hoteller-routing.module';
import { ByerComponent } from './byer/byer.component';
import { HotelComponent } from './hotel/hotel.component';
import { BookingComponent } from './booking/booking.component';
import { BookComponent } from './book/book.component';


@NgModule({
  declarations: [ByerComponent, HotelComponent, BookingComponent, BookComponent],
  imports: [
    CommonModule,
    HotellerRoutingModule
  ]
})
export class HotellerModule { }
