import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { league } from '../interfaces/league';


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

  getCurrentLeagues(country:string){
    return this.httpClient.get<league[]>(`https://v3.football.api-sports.io/leagues?country=${country}&current=true`, httpOptions);
  }
}
