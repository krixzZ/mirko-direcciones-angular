import { Component, OnInit } from '@angular/core';
import { Region } from '../model/region';
import { RegionesService } from '../services/regiones.service';

@Component({
  selector: 'app-seleccion',
  templateUrl: './seleccion.component.html',
  styleUrls: ['./seleccion.component.css']
})
export class SeleccionComponent implements OnInit {

  regiones: Region[] = [];

  constructor(private regionesService: RegionesService) { }

  ngOnInit() {
    this.regionesService.getRegiones().subscribe(regiones => this.regiones = regiones);
  }

}
