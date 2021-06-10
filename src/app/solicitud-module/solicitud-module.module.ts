import { NgModule } from '@angular/core';
import { SolicitudRoutingModule } from './solicitud-routing.module';
import { FilaSolicitudComponent } from './../fila-solicitud/fila-solicitud.component';
import { SelectorCentroComponent } from './../selector-centro/selector-centro.component';
import { SolicitudComponent } from '../solicitud/solicitud.component';
import { SharedModule } from './../shared/shared.module';
import { CommonModule } from '@angular/common';


@NgModule({
  declarations: [SolicitudComponent, SelectorCentroComponent, FilaSolicitudComponent],
 imports: [
          SharedModule,
          SolicitudRoutingModule,
          CommonModule
          ]
})
export class SolicitudModuleModule { }
