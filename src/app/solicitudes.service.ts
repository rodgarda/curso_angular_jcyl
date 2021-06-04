import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SolicitudesService {
  solicitudes =[{nombre: 'David', apellidos: 'Rodriguez',nacimiento: new Date('2013/10/27')},
  {nombre: 'Raul', apellidos: 'Perez',nacimiento: new Date('2015/10/07')}];
  constructor(private  _http:HttpClient) { }
  getSolicitudes():any{
    const accessToken = 'w553KmY_mhtkpRngkuh6qoYMPc-McVjwAjSNbQ0IxNs';
    return this._http.get(
    `https://cdn.contentful.com/spaces/im9x7su136k8/environments/master/entries?access_token=${accessToken}`)
    .toPromise();

  }
}
