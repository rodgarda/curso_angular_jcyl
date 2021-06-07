import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {map} from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class SolicitudesService {
  solicitudes =[{nombre: 'David', apellidos: 'Rodriguez',nacimiento: new Date('2013/10/27')},
  {nombre: 'Raul', apellidos: 'Perez',nacimiento: new Date('2015/10/07')}];
  constructor(private  _http:HttpClient) { }
  getSolicitudes():any{
    const accessToken = 'o8vlfcqXWB8344KCv5LruaXU9BKAmWWh0JRUbuNdgbA';
    return this._http.get(
    `https://cdn.contentful.com/spaces/im9x7su136k8/environments/master/entries?access_token=${accessToken}`).pipe(
     map(
       (data: any) => data.items.map((x:any)=>x.fields)
    )
  )
  }
}
