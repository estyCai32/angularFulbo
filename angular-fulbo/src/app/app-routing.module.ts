import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LeagueComponent } from './components/league/league.component';
import { BMetroComponent } from './components/ligasNacionales/bMetro/b-metro/b-metro.component';
import { BNacionalComponent } from './components/ligasNacionales/bNacional/b-nacional/b-nacional.component';
import { PrimeraCComponent } from './components/ligasNacionales/c/primera-c/primera-c.component';
import { CopaArgentinaComponent } from './components/ligasNacionales/copaArg/copa-argentina/copa-argentina.component';
import { PrimeraArgentinaComponent } from './components/ligasNacionales/primeraArg/primera-argentina/primera-argentina.component';

const routes: Routes = [
  { path: '', component: LeagueComponent },
  { path: 'primeraArg', component: PrimeraArgentinaComponent },
  { path: 'bNacional', component: BNacionalComponent },
  { path: 'bMetro', component: BMetroComponent },
  { path: 'primeraC', component: PrimeraCComponent },
  { path: 'copaArgentina', component: CopaArgentinaComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
