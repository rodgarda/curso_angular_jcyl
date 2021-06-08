import { dashCaseToCamelCase } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core';
import { pairs } from 'rxjs';

@Component({
  selector: 'app-datos-bancarios',
  templateUrl: './datos-bancarios.component.html',
  styleUrls: ['./datos-bancarios.component.css']
})
export class DatosBancariosComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  submit(f){
    //console.log(f);
    //console.log(f.form.controls.cuenta.value)
    if (f.form.controls.pais.errors) {
      console.log(f.form.controls.pais.errors);
     }else if(f.form.controls.iban.errors){
      console.log(f.form.controls.iban.errors);
     }else if(f.form.controls.entidad.errors){
      console.log(f.form.controls.entidad.errors);
     } else if(f.form.controls.sucursal.errors){
      console.log(f.form.controls.sucursal.errors);
     }else if(f.form.controls.dc.errors){
      console.log(f.form.controls.dc.errors);
     }else if(f.form.controls.cuenta.errors){
      console.log(f.form.controls.cuenta.errors);
     }
  }
}
