import { SolicitudModuleModule } from './solicitud-module/solicitud-module.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CentroComponent } from './centro/centro.component';
import {HttpClientModule} from "@angular/common/http";
import { ListadoCentrosComponent } from './listado-centros/listado-centros.component';
import { CentroDetalleComponent } from './centro-detalle/centro-detalle.component';

@NgModule({
  declarations: [
    AppComponent,
    ListadoCentrosComponent,
    CentroDetalleComponent,
    CentroComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    SolicitudModuleModule
  ],
  exports: [CentroComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
