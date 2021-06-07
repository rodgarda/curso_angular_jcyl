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
<<<<<<< HEAD
import { DatosBancariosComponent } from './datos-bancarios/datos-bancarios.component';

=======
>>>>>>> ef5ce845747bf5941838b1f24a56cacc1100ca7c

@NgModule({
  declarations: [
    AppComponent,
    ListadoCentrosComponent,
    CentroDetalleComponent,
<<<<<<< HEAD
    CentroComponent,
    DatosBancariosComponent
=======
    CentroComponent
>>>>>>> ef5ce845747bf5941838b1f24a56cacc1100ca7c
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
<<<<<<< HEAD
    SolicitudModuleModule,
    FormsModule
=======
    SolicitudModuleModule
>>>>>>> ef5ce845747bf5941838b1f24a56cacc1100ca7c
  ],
  exports: [CentroComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
