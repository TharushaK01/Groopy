import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { WeddingComponent } from './wedding/wedding.component';
import { TripComponent } from './trip/trip.component';
import { MusicComponent } from './music/music.component';
import { HotelsComponent } from './hotels/hotels.component';
import { FoodComponent } from './food/food.component';
import { DrinksComponent } from './drinks/drinks.component';
import { VehiclesComponent } from './vehicles/vehicles.component';
import { PhotographersComponent } from './photographers/photographers.component';



const routes: Routes = [
  { path: 'home', component: HomeComponent}, 
  { path: '', redirectTo: '/home', pathMatch: 'full' }, 
  { path: 'wedding', component: WeddingComponent},
  { path: 'trip', component: TripComponent},
  { path: 'music', component: MusicComponent},
  { path: 'hotels', component: HotelsComponent},
  { path: 'food', component: FoodComponent},
  { path: 'drinks', component: DrinksComponent},
  { path: 'vehicles', component: VehiclesComponent},
  { path: 'photographers', component: PhotographersComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
