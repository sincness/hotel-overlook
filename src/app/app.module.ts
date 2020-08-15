import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Modulet til at benytte forms
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// Modulet til at indhente data
import { HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ForsideComponent } from './pages/forside/forside.component';
import { NavComponent } from './partials/nav/nav.component';
import { FooterComponent } from './partials/footer/footer.component';
import { LoginComponent } from './pages/login/login.component';
import { HotellerComponent } from './pages/hoteller/hoteller.component';
import { RoomsComponent } from './pages/rooms/rooms.component';
import { ReservationComponent } from './pages/reservation/reservation.component';
import { OmComponent } from './pages/om/om.component';
import { SliderComponent } from './partials/slider/slider.component';
import { FejlComponent } from './pages/fejl/fejl.component';
import { RoomComponent } from './pages/room/room.component';
import { SearchComponent } from './partials/search/search.component';
import { FindComponent } from './pages/find/find.component';
import { FinderComponent } from './pages/finder/finder.component';
import { NyhedComponent } from './pages/nyhed/nyhed.component';
import { NyhederComponent } from './pages/nyheder/nyheder.component';
import { MinSideComponent } from './pages/min-side/min-side.component';
import { TakComponent } from './pages/tak/tak.component';

@NgModule({
  declarations: [
    AppComponent,
    ForsideComponent,
    NavComponent,
    FooterComponent,
    LoginComponent,
    HotellerComponent,
    RoomsComponent,
    ReservationComponent,
    OmComponent,
    SliderComponent,
    FejlComponent,
    RoomComponent,
    SearchComponent,
    FindComponent,
    FinderComponent,
    NyhedComponent,
    NyhederComponent,
    MinSideComponent,
    TakComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule, 
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
