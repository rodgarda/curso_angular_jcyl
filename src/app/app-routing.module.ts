import { ListadoCentrosComponent } from './listado-centros/listado-centros.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SolicitudComponent } from './solicitud/solicitud.component';


const routes: Routes = [
  {path: ''
 , component: SolicitudComponent},
  {path: 'solicitud', component: SolicitudComponent},
  {path: 'centros', component: ListadoCentrosComponent},
]


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }




