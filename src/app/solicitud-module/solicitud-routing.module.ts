import { SolicitudComponent } from './../solicitud/solicitud.component';
import { LoginguardGuard } from './../loginguard.guard';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
   {path: '', component: SolicitudComponent,canActivate: [LoginguardGuard]},
   {path: 'solicitud', component: SolicitudComponent,canActivate: [LoginguardGuard]},
]


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SolicitudRoutingModule { }
