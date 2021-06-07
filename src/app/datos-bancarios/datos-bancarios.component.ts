import { getTestBed } from '@angular/core/testing';
import { Component, OnInit } from '@angular/core';

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
    console.log(f);
    console.log(f.form.controls.cuenta.value)

  }
}
