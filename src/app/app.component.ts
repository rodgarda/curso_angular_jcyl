import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  linksMenu=[{name:'Solicitudes',url:'solicitud'},{name:'Listado de centros',url:'centros'},{name:'Datos Bancarios',url:'banco'}]
  title = 'solicitud';
}
