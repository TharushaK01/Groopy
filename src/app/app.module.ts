import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppRoutingModule } from './app-routing.module';
import {MatToolbarModule} from '@angular/material/toolbar';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { NavbarComponent } from './navbar/navbar.component';
import { MatIconModule } from '@angular/material/icon';  
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatCardModule} from '@angular/material/card';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { WeddingComponent } from './wedding/wedding.component';
import { TripComponent } from './trip/trip.component';
import { MusicComponent } from './music/music.component';
import { FooterComponent } from './footer/footer.component';
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
import { LayoutComponent } from './layout/layout.component';
import { SignupComponent } from './signup/signup.component';
import { ChatComponent } from './chat/chat.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';





@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    HomeComponent,
    WeddingComponent,
    TripComponent,
    MusicComponent,
    FooterComponent,
    HotelsComponent,
    FoodComponent,
    DrinksComponent,
    VehiclesComponent,
    PhotographersComponent,
    DecorationComponent,
    LocationComponent,
    GuideComponent,
    AirticketsComponent,
    VenuesComponent,
    SoundComponent,
    ArtistComponent,
    LayoutComponent,
    SignupComponent,
    ChatComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatToolbarModule,
    MatIconModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatMenuModule,
    MatInputModule,
    MatFormFieldModule,
    MatCardModule,
    FormsModule,
    ReactiveFormsModule,
    MatAutocompleteModule,

 

  ],
  providers: [
    provideAnimationsAsync(),
    provideFirebaseApp(() => initializeApp({"projectId":"groopy-db888","appId":"1:121507118517:web:6bfac9ff72bb46a92eadfc","storageBucket":"groopy-db888.firebasestorage.app","apiKey":"AIzaSyDPBbJbwKy5Oo0iWV-SrYeDCqNaBB0ckfo","authDomain":"groopy-db888.firebaseapp.com","messagingSenderId":"121507118517"})),
    provideAuth(() => getAuth())
  ],
  bootstrap: [AppComponent]
})


export class AppModule { }
