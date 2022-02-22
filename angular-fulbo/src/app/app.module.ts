import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LeagueComponent } from './components/league/league.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LeagueServiceService } from './service/league-service.service';
import { PrimeraArgentinaComponent } from './components/ligasNacionales/primeraArg/primera-argentina/primera-argentina.component';
import { BNacionalComponent } from './components/ligasNacionales/bNacional/b-nacional/b-nacional.component';
import { BMetroComponent } from './components/ligasNacionales/bMetro/b-metro/b-metro.component';
import { CopaArgentinaComponent } from './components/ligasNacionales/copaArg/copa-argentina/copa-argentina.component';
import { PrimeraCComponent } from './components/ligasNacionales/c/primera-c/primera-c.component';

@NgModule({
  declarations: [AppComponent, LeagueComponent, NavbarComponent, PrimeraArgentinaComponent, BNacionalComponent, BMetroComponent, CopaArgentinaComponent, PrimeraCComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [LeagueServiceService],
  bootstrap: [AppComponent],
})
export class AppModule {}
