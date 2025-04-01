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
import { DecorationComponent } from './decoration/decoration.component';
import { LocationComponent } from './location/location.component';
import { GuideComponent } from './guide/guide.component';
import { AirticketsComponent } from './airtickets/airtickets.component';
import { VenuesComponent } from './venues/venues.component';
import { SoundComponent } from './sound/sound.component';
import { ArtistComponent } from './artist/artist.component';
import { SignupComponent } from './signup/signup.component';
import { ChatComponent } from './chat/chat.component';
import { canActivate, redirectUnauthorizedTo, redirectLoggedInTo } from '@angular/fire/auth-guard';
import { ProfileComponent } from './profile/profile.component';

const redirectToLogin = () => redirectUnauthorizedTo(['login']);
const redirectToHome = () => redirectLoggedInTo(['home']);

const routes: Routes = [
  { path: 'signup', component: SignupComponent,
    ...canActivate(redirectToHome)
  }, 
  { path: 'login', component: LoginComponent,
    ...canActivate(redirectToHome)
  }, 
  { path: 'home', component: HomeComponent,
    ...canActivate(redirectToLogin)
  }, 
  { path: '', redirectTo: '/login', pathMatch: 'full' }, 
  { path: 'wedding', component: WeddingComponent},
  { path: 'trip', component: TripComponent},
  { path: 'music', component: MusicComponent},
  { path: 'hotels', component: HotelsComponent},
  { path: 'food', component: FoodComponent},
  { path: 'drinks', component: DrinksComponent},
  { path: 'vehicles', component: VehiclesComponent},
  { path: 'photographers', component: PhotographersComponent},
  { path: 'decoration', component: DecorationComponent},
  { path: 'location', component: LocationComponent},
  { path: 'guide', component: GuideComponent},
  { path: 'airtickets', component: AirticketsComponent},
  { path: 'venues', component: VenuesComponent},
  { path: 'sound', component: SoundComponent},
  { path: 'artist', component: ArtistComponent},
  { path: 'chat', component: ChatComponent},
  { path: 'profile', component: ProfileComponent,
    ...canActivate(redirectToLogin)
  },



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
