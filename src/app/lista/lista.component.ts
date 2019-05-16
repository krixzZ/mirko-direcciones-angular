import { Component, OnInit } from '@angular/core';
import { Comuna } from '../model/comuna';
import { Provincia } from '../model/provincia';
import { RegionesService } from '../services/regiones.service';
import { Region } from '../model/region';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {

  regiones: Region[] = [];
  provincias: Provincia[] = [];
  comunas: Comuna[] = [];

  constructor(private regionesService: RegionesService) { }

  ngOnInit() {
    this.regionesService.getRegiones().subscribe(
      regiones => this.regiones = regiones
    );
  }

}
