import { HomeComponent } from './home/home.component';
import { NotauthorizedComponent } from './notauthorized/notauthorized.component';
import { ConfiguracionComponent } from './configuracion/configuracion.component';
import { LoginguardGuard } from './loginguard.guard';
import { DatosBancariosComponent } from './datos-bancarios/datos-bancarios.component';
import { ListadoCentrosComponent } from './listado-centros/listado-centros.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CentroDetalleComponent } from './centro-detalle/centro-detalle.component';


const routes: Routes = [
  {path: '',  component: HomeComponent},
  {path: 'solicitud', loadChildren: () => import('./solicitud-module/solicitud-module.module').then(m => m.SolicitudModuleModule),canActivate: [LoginguardGuard]},
  {path: 'centros', component: ListadoCentrosComponent,canActivate: [LoginguardGuard]},
  {path: 'banco', component: DatosBancariosComponent,canActivate: [LoginguardGuard]},
   {path: 'centros/:centroId', component: CentroDetalleComponent,canActivate: [LoginguardGuard]},
   {path: 'configuracion', component: ConfiguracionComponent,canActivate: [LoginguardGuard]},
   {path: 'notauthorized', component: NotauthorizedComponent,canActivate: [LoginguardGuard]},
   { path: '**', component: HomeComponent }
]


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }




