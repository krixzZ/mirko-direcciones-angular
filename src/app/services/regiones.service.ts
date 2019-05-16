import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Region } from '../model/region';

@Injectable({
  providedIn: 'root'
})
export class RegionesService {

  public regiones: Region[] = [];

  constructor(private http: HttpClient) { }

  private urlListaRegiones = 'https://apis.digital.gob.cl/dpa/regiones';


  getRegiones(): Observable<Region[]> {
    return this.http.get(this.urlListaRegiones).pipe(
      map(response => response as Region[])
    );
  }
}
