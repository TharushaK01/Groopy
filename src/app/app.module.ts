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
// import { ChatComponent } from './chat/chat.component'; 



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
    // ChatComponent
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
  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})


export class AppModule { }
