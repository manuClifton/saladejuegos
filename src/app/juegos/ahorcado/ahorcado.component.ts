import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ahorcado',
  templateUrl: './ahorcado.component.html',
  styleUrls: ['./ahorcado.component.css']
})
export class AhorcadoComponent implements OnInit {

  palabras = ["casa","perro","gato","avion","canasto","clima","elefante","auto","tigre","leon","computadora","celular","telefono",
              "escritorio","boca","cabeza","zatato","camisa","pantalon","mochila","barbijo","electricidad"]

  palabra = '';
  
  palabraConGuiones = '';
  
  letra = '';

  

  constructor() { }

  ngOnInit(): void {
    this.actualizarPalabrta();
    this.crearGuiones()
  }

  calcular(){
    //alert(this.cambiarPalabra() +"  "+  this.crearGuiones())
    this.palabra.search(this.letra) //me da la posicion de la letra si esta, sino me da -1

    alert()

    

    }
  actualizarPalabrta(){
    return this.palabra = this.palabras[Math.floor(Math.random()*this.palabras.length)]
  }
  crearGuiones(){
    return  this.palabraConGuiones = this.palabra.replace(/./g, "_ ");
  }
}
