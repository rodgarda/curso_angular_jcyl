import { CentroComponent } from './../centro/centro.component';
import { FilaSolicitudComponent } from './../fila-solicitud/fila-solicitud.component';
import { SelectorCentroComponent } from './../selector-centro/selector-centro.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SolicitudComponent } from '../solicitud/solicitud.component';



@NgModule({
  declarations: [SolicitudComponent, SelectorCentroComponent, FilaSolicitudComponent],
 imports: [CommonModule],

})
export class SolicitudModuleModule { }
