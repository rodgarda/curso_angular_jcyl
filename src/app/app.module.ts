import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SolicitudComponent } from './solicitud/solicitud.component';
import { CentroComponent } from './centro/centro.component';
import {HttpClientModule} from "@angular/common/http";
import { SelectorCentroComponent } from './selector-centro/selector-centro.component';
import { FilaSolicitudComponent } from './fila-solicitud/fila-solicitud.component';
import { ListadoCentrosComponent } from './listado-centros/listado-centros.component';
import { CentroDetalleComponent } from './centro-detalle/centro-detalle.component';

@NgModule({
  declarations: [
    AppComponent,
    SolicitudComponent,
    CentroComponent,
    SelectorCentroComponent,
    FilaSolicitudComponent,
    ListadoCentrosComponent,
    CentroDetalleComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
