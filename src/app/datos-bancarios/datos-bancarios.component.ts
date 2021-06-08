
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';


@Component({
  selector: 'app-datos-bancarios',
  templateUrl: './datos-bancarios.component.html',
  styleUrls: ['./datos-bancarios.component.css']
})
export class DatosBancariosComponent implements OnInit {
    formBank:FormGroup;
    constructor(private formsBuilder: FormBuilder) {
      this.formBank = formsBuilder.group({
        pais: [ 'ES', [Validators.required, this.myArrobaValidator]],
        iban: [ '12', [Validators.required, this.myArrobaValidator]],
        entidad: [ '1234', [Validators.required, this.myArrobaValidator]],
        sucursal: [ '1234', [Validators.required, this.myArrobaValidator]],
        dc: [ '12', [Validators.required, this.myArrobaValidator]],
        cuenta: [ '1234567890', [Validators.required, this.myArrobaValidator]],
        });
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
