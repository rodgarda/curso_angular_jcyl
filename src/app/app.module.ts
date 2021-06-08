import { SolicitudModuleModule } from './solicitud-module/solicitud-module.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CentroComponent } from './centro/centro.component';
import {HttpClientModule} from "@angular/common/http";
import { ListadoCentrosComponent } from './listado-centros/listado-centros.component';
import { CentroDetalleComponent } from './centro-detalle/centro-detalle.component';
import { DatosBancariosComponent } from './datos-bancarios/datos-bancarios.component';


@NgModule({
  declarations: [
    AppComponent,
    ListadoCentrosComponent,
    CentroDetalleComponent,
    CentroComponent,
    DatosBancariosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    SolicitudModuleModule,
    FormsModule
  ],
  exports: [CentroComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
