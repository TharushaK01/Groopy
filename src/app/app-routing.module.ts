import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { WeddingComponent } from './wedding/wedding.component';
import { TripComponent } from './trip/trip.component';
import { MusicComponent } from './music/music.component';



const routes: Routes = [
  { path: 'home', component: HomeComponent}, 
  { path: '', redirectTo: '/home', pathMatch: 'full' }, 
  { path: 'wedding', component: WeddingComponent},
  { path: 'trip', component: TripComponent},
  { path: 'music', component: MusicComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
