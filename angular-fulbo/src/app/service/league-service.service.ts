import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { league } from '../interfaces/league';
import { map, Observable } from 'rxjs';


const API_KEY:string = "26619f57e7b5adaa81bf8da202ed757c";
  
const httpOptions = {
  headers: new HttpHeaders({
    "x-rapidapi-host": "v3.football.api-sports.io",
    "x-rapidapi-key": API_KEY
  })
};

@Injectable({
  providedIn: 'root'
})
export class LeagueServiceService {


  constructor(private httpClient:HttpClient) {}

  getCurrentLeagues(country:string):Observable<any[]>{
    return this.httpClient.get<any[]>(`https://v3.football.api-sports.io/leagues?country=${country}&current=true&season=2022`, httpOptions)
    .pipe(
      map((response) => {
        if (response) return response;
      })
    );;
  }

  obtenerPartidosFecha(leagueId:number,seasonYear,date: string) {
    return this.httpClient.get<any[]>(`https://v3.football.api-sports.io/fixtures?league=${leagueId}&season=${seasonYear}&date=${date}`, httpOptions)
    .pipe(
      map((response) => {
        if (response) return response;
      })
    );;
    
  }

  // getFixture(league:number,season:league){
  //   return this.httpClient.get<any[]>(`https://v3.football.api-sports.io/leagues?country=${country}&current=true&season=2022`, httpOptions)
  //   .pipe(
  //     map((response) => {
  //       if (response) return response;
  //     })
  //   );;
  // }


}
