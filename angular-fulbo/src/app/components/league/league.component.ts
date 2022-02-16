import { Component, OnInit } from '@angular/core';
import { league } from 'src/app/interfaces/league';
import { LeagueServiceService } from "../../service/league-service.service";

@Component({
  selector: 'app-league',
  templateUrl: './league.component.html',
  styleUrls: ['./league.component.css']
})
export class LeagueComponent implements OnInit {
  ligasArgentinas: league[] = [];

  partidosDeHoy: any[] = [];
  

  constructor(private leagueService:LeagueServiceService) {

  }

  ngOnInit(): void {
    //obtener fecha de hoy  
    const date = new Date();
    this.leagueService.obtenerPartidosFecha(2,2021,parsearFecha(date)).subscribe((data: any) => {
      this.partidosDeHoy = data.response;
      console.log(this.partidosDeHoy);
    });
  }


}


function parsearFecha(date: Date): string {
    let year= date.getFullYear().toString();
    let month = date.getMonth()+1;
    let monthFinal = "";
    let day = date.getDate().toString();


    if(month.toString().length == 1){
      month.toString();
      monthFinal= `0${month}`
    }

    if(day.length == 1){
      day= `0${day}`
    }

    return `${year}-${monthFinal}-${day}`;
}

