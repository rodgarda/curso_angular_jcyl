import { NotauthorizedComponent } from './notauthorized/notauthorized.component';
import { ConfiguracionComponent } from './configuracion/configuracion.component';
import { LoginguardGuard } from './loginguard.guard';

import { DatosBancariosComponent } from './datos-bancarios/datos-bancarios.component';
import { ListadoCentrosComponent } from './listado-centros/listado-centros.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SolicitudComponent } from './solicitud/solicitud.component';
import { CentroDetalleComponent } from './centro-detalle/centro-detalle.component';


const routes: Routes = [
  {path: ''
 , component: SolicitudComponent},
  {path: 'solicitud', component: SolicitudComponent,canActivate: [LoginguardGuard]},
  {path: 'centros', component: ListadoCentrosComponent,canActivate: [LoginguardGuard]},
  {path: 'banco', component: DatosBancariosComponent,canActivate: [LoginguardGuard]},
   {path: 'centros/:centroId', component: CentroDetalleComponent,canActivate: [LoginguardGuard]},
   {path: 'configuracion', component: ConfiguracionComponent,canActivate: [LoginguardGuard]},
   {path: 'notauthorized', component: NotauthorizedComponent,canActivate: [LoginguardGuard]},
]


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }




