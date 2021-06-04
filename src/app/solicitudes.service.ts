import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SolicitudesService {
  solicitudes =[{nombre: 'David', apellidos: 'Rodriguez',nacimiento: new Date('2013/10/27')},
  {nombre: 'Raul', apellidos: 'Perez',nacimiento: new Date('2015/10/07')}];
  constructor() { }
  getSolicitudes(){
    return this.solicitudes
  }
}
