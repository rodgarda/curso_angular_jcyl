import { SolicitudModuleModule } from './solicitud-module/solicitud-module.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CentroComponent } from './centro/centro.component';
import {HttpClientModule} from "@angular/common/http";
import { ListadoCentrosComponent } from './listado-centros/listado-centros.component';
import { CentroDetalleComponent } from './centro-detalle/centro-detalle.component';
import { DatosBancariosComponent } from './datos-bancarios/datos-bancarios.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatListModule } from '@angular/material/list';
import { ConfiguracionComponent } from './configuracion/configuracion.component';
import { NotauthorizedComponent } from './notauthorized/notauthorized.component';
import { HomeComponent } from './home/home.component';




@NgModule({
  declarations: [
    AppComponent,
    ListadoCentrosComponent,
    CentroDetalleComponent,
    CentroComponent,
    DatosBancariosComponent,
    ConfiguracionComponent,
    NotauthorizedComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    SolicitudModuleModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
