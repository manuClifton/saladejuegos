import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-ahorcado',
  templateUrl: './ahorcado.component.html',
  styleUrls: ['./ahorcado.component.css']
})
export class AhorcadoComponent implements OnInit {
  user:any;
  flag = true;
  contFallas = 0;
  palabra = '';
  guiones = '';
  nuevoGuion = '';
  letra = '';
  imagen = "./../../../assets/img/Ahorcado01.png";
  imagenes = [
              "./../../../assets/img/Ahorcado01.png",
              "./../../../assets/img/Ahorcado02.png",
              "./../../../assets/img/Ahorcado03.png",
              "./../../../assets/img/Ahorcado04.png",
              "./../../../assets/img/Ahorcado05.png",
              "./../../../assets/img/Ahorcado06.png"
            ]

  palabras = ["casa","perro","gato","avion","canasto","clima","elefante","auto","tigre","leon","computadora","celular","telefono",
              "escritorio","boca","cabeza","zatato","camisa","pantalon","mochila","barbijo","electricidad"];
  

  constructor(public afAuth: AngularFireAuth,private router:Router) { }

  async ngOnInit() {

    this.user = await this.afAuth.onAuthStateChanged(user =>{
      if(!user){
        Swal.fire({
          position: 'top-end',
          icon: 'warning',
          title: 'Ingresa tu usuario',
          showConfirmButton: false,
          timer: 1500
        })
        this.router.navigate(['/login'])
        }
    })
    this.actualizarPalabrta();
    this.crearGuiones()
  }

  
  verificar(letra:string){
    this.letra = letra;
      for (let i = 0; i < this.palabra.length; i++) { 
        if(this.palabra[i] == this.letra){
          this.guiones = this.replaceAt(i*2, this.letra, this.guiones);
          this.flag = false;
        }
      }
    

    if(this.flag){
      this.contFallas++;
      this.imagen = this.imagenes[this.contFallas]
      if(this.contFallas == 5){
   
        setTimeout(() => {
          this.imagen = this.imagenes[5];
        }, 1000);
        
        Swal.fire({
          icon: 'error',
          title: 'PERDISTE',
          text: 'Volve a intenarlo...',
        })
        this.actualizarPalabrta();
        this.crearGuiones();
        setTimeout(() => {
          this.imagen = "./../../../assets/img/Ahorcado01.png";
          this.contFallas = 0;
          this.letra = '';
        }, 1500);

      }
    }

    if(!this.guiones.includes('_')){
      Swal.fire({
        icon: 'success',
        title: 'GANASTE',
        showConfirmButton: false,
        timer: 1500
      })
      this.imagen= this.imagenes[0];
      this.actualizarPalabrta();
      this.crearGuiones();
      this.contFallas = 0;
      this.letra = '';
    }

    this.flag = true;

    }//



  actualizarPalabrta(){
    return this.palabra = this.palabras[Math.floor(Math.random()*this.palabras.length)]
  }
  crearGuiones(){
    return  this.guiones = this.palabra.replace(/./g, "_ ");
  }



  replaceAt(index:any, character:string, palabra:string) {
     return palabra.substr(0, index) + character + palabra.substr(index+character.length); 
    } 


}//
