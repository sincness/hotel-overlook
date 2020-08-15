import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ForsideComponent } from './pages/forside/forside.component';
import { LoginComponent } from './pages/login/login.component';
import { ReservationComponent } from './pages/reservation/reservation.component';
import { RoomsComponent } from './pages/rooms/rooms.component';
import { FejlComponent } from './pages/fejl/fejl.component';
import { RoomComponent } from './pages/room/room.component';
import { FindComponent } from './pages/find/find.component';
import { FinderComponent } from './pages/finder/finder.component';
import { NyhedComponent } from './pages/nyhed/nyhed.component';
import { NyhederComponent } from './pages/nyheder/nyheder.component';
import { AuthGuard } from './guards/auth.guard';
import { MinSideComponent } from './pages/min-side/min-side.component';
import { TakComponent } from './pages/tak/tak.component';
import { BuyGuard } from './guards/buy.guard';
import { OmComponent } from './pages/om/om.component';


const routes: Routes = [
  { path: '', redirectTo: 'forside', pathMatch: 'full' },
  { path: 'forside', component: ForsideComponent },
  { path: 'hoteller', loadChildren: () => import('./pages/hoteller/hoteller.module').then(m => m.HotellerModule) },
  { path: 'om-overlook', component: OmComponent },
  { path: 'find', component: FindComponent },
  { path: 'find/:country/:persons', component: FinderComponent },
  { path: 'nyheder', component: NyhederComponent },
  { path: 'nyheder/:id', component: NyhedComponent },
  { path: 'rooms', component: RoomsComponent },
  { path: 'rooms/:id', component: RoomComponent },
  { path: 'reservation', component: ReservationComponent, canActivate: [AuthGuard] },
  { path: 'reservation/tak', component: TakComponent, canActivate: [BuyGuard] },
  { path: 'login', component: LoginComponent },
  { path: 'min-side', component: MinSideComponent, canActivate: [AuthGuard] },
  { path: '**', component: FejlComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
