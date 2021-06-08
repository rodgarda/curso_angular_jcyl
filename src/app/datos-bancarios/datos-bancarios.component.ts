
import { Component, OnInit } from '@angular/core';
import { FormBuilder,  FormGroup } from '@angular/forms';


@Component({
  selector: 'app-datos-bancarios',
  templateUrl: './datos-bancarios.component.html',
  styleUrls: ['./datos-bancarios.component.css']
})
export class DatosBancariosComponent implements OnInit {
    f: FormGroup;
    pais: string;
    iban: number;
    entidad: number;
    sucursal: number;
    dc: number
    cuenta: number;
    constructor(private formsBuilder: FormBuilder) {
      this.f = formsBuilder.group({ pais: '', iban: '' , entidad: '' , sucursal: '' , dc: '' , cuenta: '' });
    }

  ngOnInit(): void {
    this.pais='ES'
    this.iban=12;
    this.entidad=1234;
    this.sucursal=12;
    this.dc=12;
    this.cuenta=1234567890;

  }


  submit(){
    //console.log(f);
    //console.log(f.form.controls.cuenta.value)
    console.log(this.f);
    console.log(this.f.controls.cuenta.value);
    console.log(this.pais);
  }
}
