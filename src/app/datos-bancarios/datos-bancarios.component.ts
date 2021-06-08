
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-datos-bancarios',
  templateUrl: './datos-bancarios.component.html',
  styleUrls: ['./datos-bancarios.component.css']
})
export class DatosBancariosComponent implements OnInit {
    f: FormGroup;
    constructor(private formsBuilder: FormBuilder) {
      this.f = formsBuilder.group({ pais: '', iban: '' , entidad: '' , sucursal: '' , dc: '' , cuenta: '' });
    }

  ngOnInit(): void {
  }
  submit(){
    //console.log(f);
    //console.log(f.form.controls.cuenta.value)
    console.log(this.f);
    console.log(this.f.controls.cuenta.value);
  }
}
