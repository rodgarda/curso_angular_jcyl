import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CentrosService {
  centros:any = [{nombre: "Fernando de Rojas"}, {nombre: "Agustinas"}];
  constructor() {

  }
  getCentros(){
    return this.centros;
  }
  getCentro(centroId){
    return this.centros.filter((x)=>x==centroId);
  }
}
