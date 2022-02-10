import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LeagueComponent } from './components/league/league.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LeagueServiceService } from "./service/league-service.service";

@NgModule({
  declarations: [
    AppComponent,
    LeagueComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [LeagueServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
