import { Component, OnInit } from '@angular/core';
import { ligasNacionalesCodes } from 'src/app/components/codes/ligasNacionalesCodes';
import { LeagueServiceService } from 'src/app/service/league-service.service';

@Component({
  selector: 'app-primera-argentina',
  templateUrl: './primera-argentina.component.html',
  styleUrls: ['./primera-argentina.component.css'],
})
export class PrimeraArgentinaComponent implements OnInit {
  id: number = ligasNacionalesCodes.ligaArgentina;
  tablaGeneral: any[] = [];
  tablaGrupoA: any[] = [];
  tablaGrupoB: any[] = [];

  cantidadDeFechas: any[] = [];

  constructor(private leagueService: LeagueServiceService) {}

  ngOnInit(): void {
    const date = this.leagueService.obtenerFechaActual();

    //Obtener Tablas
    this.leagueService
      .obtenerStandings(this.id, 2022)
      .subscribe((data: any) => {
        this.tablaGrupoA = data.response[0].league.standings[0];
        this.tablaGrupoB = data.response[0].league.standings[1];

        this.tablaGeneral = this.tablaGrupoA.concat(this.tablaGrupoB);
      });

    //Obtener fixture-fechas
    this.leagueService
      .obtenerFechas(this.id, 2022, false)
      .subscribe((data: any) => {
        this.cantidadDeFechas = data;
        console.log(data.response);
      });
  }
}
