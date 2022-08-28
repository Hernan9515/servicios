import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  public now=Date.now();
  public name="Hernan Enriquez"
  public data={
    "name":"Stiven Rojas",
    "age":35,
    "status":"Soltero"
  };

  constructor() { }

  ngOnInit(): void {
  }

}
