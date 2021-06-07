<<<<<<< HEAD
import { DatosBancariosComponent } from './datos-bancarios/datos-bancarios.component';
=======
>>>>>>> ef5ce845747bf5941838b1f24a56cacc1100ca7c
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
<<<<<<< HEAD
  {path: 'banco', component: DatosBancariosComponent},
=======
>>>>>>> ef5ce845747bf5941838b1f24a56cacc1100ca7c
   {path: 'centros/:centroId', component: CentroDetalleComponent},
]


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }




