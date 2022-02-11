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

  constructor(private leagueService:LeagueServiceService) {
    leagueService.getCurrentLeagues("argentina").subscribe((data: any) => {

      this.ligasArgentinas = data.response;

      console.log(this.ligasArgentinas);
    });
  }

  ngOnInit(): void {

  }

  getStandigs() :  void{
    for(let ligas of this.ligasArgentinas){
      this.leagueService.getStandingForLeague(ligas.league.id,2022).subscribe((data:any)=>{
        console.log(data);
      }); 
       
    }

    
  }

}
