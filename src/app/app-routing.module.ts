import { ListadoCentrosComponent } from './listado-centros/listado-centros.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SolicitudComponent } from './solicitud/solicitud.component';
import { CentroDetalleComponent } from './centro-detalle/centro-detalle.component';


const routes: Routes = [
  {path: ''
 , component: SolicitudComponent},
  {path: 'solicitud', component: SolicitudComponent},
  {path: 'centros', component: ListadoCentrosComponent},
   {path: 'centros/:centroId', component: CentroDetalleComponent},
]


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }




