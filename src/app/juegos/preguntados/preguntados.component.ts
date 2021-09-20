import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-preguntados',
  templateUrl: './preguntados.component.html',
  styleUrls: ['./preguntados.component.css']
})
export class PreguntadosComponent implements OnInit {

  preguntas = [
    {},{},{},{}
  ];
  preguntaActual = Math.floor(Math.random()*this.preguntas.length);
  respuesta:any;

  constructor() { }

  ngOnInit(): void {
  }

  elegir(){
    //1-obtener valor de respuesta
    //2-verificar si es correcta 
    //3-si es correcta suma puntos, sino pierde.
    
  }

}
