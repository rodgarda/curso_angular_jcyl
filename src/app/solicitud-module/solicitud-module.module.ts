import { SolicitudRoutingModule } from './solicitud-routing.module';
import { FilaSolicitudComponent } from './../fila-solicitud/fila-solicitud.component';
import { SelectorCentroComponent } from './../selector-centro/selector-centro.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SolicitudComponent } from '../solicitud/solicitud.component';
import {MatDatepickerModule} from "@angular/material/datepicker";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatNativeDateModule} from "@angular/material/core";
import {MatGridListModule} from '@angular/material/grid-list';



@NgModule({
  declarations: [SolicitudComponent, SelectorCentroComponent, FilaSolicitudComponent],
 imports: [CommonModule,
          MatDatepickerModule, MatFormFieldModule, MatInputModule,MatNativeDateModule,MatGridListModule,
          SolicitudRoutingModule
          ]
})
export class SolicitudModuleModule { }
