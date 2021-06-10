import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { SolicitudModuleModule } from './solicitud-module/solicitud-module.module';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CentroComponent } from './centro/centro.component';
import { ListadoCentrosComponent } from './listado-centros/listado-centros.component';
import { CentroDetalleComponent } from './centro-detalle/centro-detalle.component';
import { DatosBancariosComponent } from './datos-bancarios/datos-bancarios.component';
import { ConfiguracionComponent } from './configuracion/configuracion.component';
import { NotauthorizedComponent } from './notauthorized/notauthorized.component';
import { HomeComponent } from './home/home.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from './shared/shared.module';


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
    SharedModule,
    RouterModule,
    AppRoutingModule,
    SolicitudModuleModule,
    BrowserModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
