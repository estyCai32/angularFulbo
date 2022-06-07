import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { league } from '../interfaces/league';
import { map, Observable } from 'rxjs';

const API_KEY: string = '26619f57e7b5adaa81bf8da202ed757c';

const httpOptions = {
  headers: new HttpHeaders({
    'x-rapidapi-host': 'v3.football.api-sports.io',
    'x-rapidapi-key': API_KEY,
  }),
};

@Injectable({
  providedIn: 'root',
})
export class LeagueServiceService {
  constructor(private httpClient: HttpClient) {}

  getCurrentLeagues(country: string): Observable<any[]> {
    return this.httpClient
      .get<any[]>(
        `https://v3.football.api-sports.io/leagues?country=${country}&current=true&season=2022`,
        httpOptions
      )
      .pipe(
        map((response) => {
          if (response) return response;
        })
      );
  }

  obtenerPartidosFecha(leagueId: any, seasonYear, date: string) {
    return this.httpClient
      .get<any[]>(
        `https://v3.football.api-sports.io/fixtures?league=${leagueId}&season=${seasonYear}&date=${date}&timezone=America/Argentina/Buenos_Aires`,
        httpOptions
      )
      .pipe(
        map((response) => {
          if (response) return response;
        })
      );
  }

  obtenerTimezone() {
    return this.httpClient
      .get<any[]>(`https://v3.football.api-sports.io/timezone`, httpOptions)
      .pipe(
        map((response) => {
          if (response) return response;
        })
      );
  }

  obtenerFechaActual() {
    const date = new Date();

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

  obtenerStandings(id: number, season: number) {
    return this.httpClient
      .get<any[]>(
        `https://v3.football.api-sports.io/standings?league=${id}&season=${season}`,
        httpOptions
      )
      .pipe(
        map((response) => {
          if (response) return response;
        })
      );
  }

  obtenerFechas(id: number, season: number, current: boolean) {
    return this.httpClient
      .get<any[]>(
        `https://v3.football.api-sports.io/fixtures/rounds?season=${season}&league=${id}&current=${current}`,
        httpOptions
      )
      .pipe(
        map((response) => {
          if (response) return response;
        })
      );
  }
}
