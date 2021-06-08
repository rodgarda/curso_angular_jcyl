
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';


@Component({
  selector: 'app-datos-bancarios',
  templateUrl: './datos-bancarios.component.html',
  styleUrls: ['./datos-bancarios.component.css']
})
export class DatosBancariosComponent implements OnInit {
    formBank:FormGroup;
    formControlPais=new FormControl( 'ES', [Validators.required, this.myArrobaValidator]);
    constructor(private formsBuilder: FormBuilder) {
      this.formBank = formsBuilder.group({
        pais: this.formControlPais,
        iban: new FormControl('12', [Validators.required, this.myArrobaValidator]),
        entidad:new FormControl( '1234', [Validators.required, this.myArrobaValidator]),
        sucursal: new FormControl('1234', [Validators.required, this.myArrobaValidator]),
        dc: new FormControl('12', [Validators.required, this.myArrobaValidator]),
        cuenta: new FormControl('1234567890', [Validators.required, this.myArrobaValidator])
        });
        this.formControlPais.valueChanges.subscribe((datos)=>console.log(datos));
    }

  ngOnInit(): void {
  }

  myArrobaValidator(formControl: FormControl) {
    return formControl.value.includes('@') ? { InvalidValue: true } : {};
  }

  submit(){
    console.log(this.formBank)
  }
}
