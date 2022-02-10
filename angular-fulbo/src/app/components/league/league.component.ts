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

  constructor(leagueService:LeagueServiceService) {
    leagueService.getCurrentLeagues("argentina").subscribe((data: league[]) => {

      this.ligasArgentinas = data;
      console.log(typeof data);
      console.log(typeof this.ligasArgentinas);
      console.log(this.ligasArgentinas);
    });
  }

  ngOnInit(): void {
  }

}
