import { Component, OnInit } from '@angular/core';
import { league } from 'src/app/interfaces/league';
import { partido } from 'src/app/interfaces/partido';
import { LeagueServiceService } from '../../service/league-service.service';
import { copasInternacionales } from '../codes/copasInternacioles';
import { ligasNacionalesCodes } from '../codes/ligasNacionalesCodes';
import { selecciones } from '../codes/selecciones';
import { torneosInternacionales } from '../codes/torneosInternacionales';

@Component({
  selector: 'app-league',
  templateUrl: './league.component.html',
  styleUrls: ['./league.component.css'],
})
export class LeagueComponent implements OnInit {
  ligasArgentinas: league[] = [];

  partidosDeHoy: partido[] = [];

  constructor(private leagueService: LeagueServiceService) {}

  ngOnInit(): void {
    //obtener fecha de hoy
    const date = new Date();

    this.leagueService
      .obtenerPartidosFecha(
        ligasNacionalesCodes.ligaArgentina,
        2022,
        parsearFecha(date)
      )
      .subscribe((data: any) => {
        this.partidosDeHoy = data.response;
        console.log(this.partidosDeHoy);
        transformarHora(this.partidosDeHoy);
      });
  }

  parsearTime(time: number) {
    document.querySelector('match-status').innerHTML = '10';
  }
}

function parsearFecha(date: Date): string {
  let year = date.getFullYear().toString();
  let month = date.getMonth() + 1;
  let monthFinal = '';
  let day = date.getDate().toString();

  if (month.toString().length == 1) {
    month.toString();
    monthFinal = `0${month}`;
  }

  if (day.length == 1) {
    day = `0${day}`;
  }

  return `${year}-${monthFinal}-${day}`;
}

function obtenerCodesdeTodasLasLigas() {
  var codesLigasHoy = [];

  for (var log in ligasNacionalesCodes) {
    if (!isNaN(Number(log))) {
      codesLigasHoy.push(log);
    }
  }

  for (var log in copasInternacionales) {
    if (!isNaN(Number(log))) {
      codesLigasHoy.push(log);
    }
  }

  for (var log in selecciones) {
    if (!isNaN(Number(log))) {
      codesLigasHoy.push(log);
    }
  }

  for (var log in torneosInternacionales) {
    if (!isNaN(Number(log))) {
      codesLigasHoy.push(log);
    }
  }

  return codesLigasHoy;
}

function transformarHora(partidosDeHoy: partido[]) {
  for (let i = 0; i < partidosDeHoy.length; i++) {
    let date = new Date(partidosDeHoy[i].fixture.date);

    partidosDeHoy[i].fixture.date = `${date.getHours().toString()}:${date
      .getMinutes()
      .toString()}`;
    console.log(partidosDeHoy[i].fixture.date);
  }
}
