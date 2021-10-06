import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-mayormenor',
  templateUrl: './mayormenor.component.html',
  styleUrls: ['./mayormenor.component.css']
})
export class MayormenorComponent implements OnInit {

  user:any;
  cartas = [1,2,3,4,5,6,7,8,9,10,11,12];

  imgCartas  = [
    ["./../../../assets/img/mm/1_bastos.jpg", "./../../../assets/img/mm/1_copas.jpg",  "./../../../assets/img/mm/1_espadas.jpg", "./../../../assets/img/mm/1_oros.jpg"],
    ["./../../../assets/img/mm/2_bastos.jpg", "./../../../assets/img/mm/2_copas.jpg",  "./../../../assets/img/mm/2_espadas.jpg", "./../../../assets/img/mm/2_oros.jpg"],
    ["./../../../assets/img/mm/3_bastos.jpg", "./../../../assets/img/mm/3_copas.jpg",  "./../../../assets/img/mm/3_espadas.jpg", "./../../../assets/img/mm/3_oros.jpg"],
    ["./../../../assets/img/mm/4_bastos.jpg", "./../../../assets/img/mm/4_copas.jpg",  "./../../../assets/img/mm/4_espadas.jpg", "./../../../assets/img/mm/4_oros.jpg"],
    ["./../../../assets/img/mm/5_bastos.jpg", "./../../../assets/img/mm/5_copas.jpg",  "./../../../assets/img/mm/5_espadas.jpg", "./../../../assets/img/mm/5_oros.jpg"],
    ["./../../../assets/img/mm/6_bastos.jpg", "./../../../assets/img/mm/6_copas.jpg",  "./../../../assets/img/mm/6_espadas.jpg", "./../../../assets/img/mm/6_oros.jpg"],
    ["./../../../assets/img/mm/7_bastos.jpg", "./../../../assets/img/mm/7_copas.jpg",  "./../../../assets/img/mm/7_espadas.jpg", "./../../../assets/img/mm/7_oros.jpg"],
    ["./../../../assets/img/mm/8_bastos.jpg", "./../../../assets/img/mm/8_copas.jpg",  "./../../../assets/img/mm/8_espadas.jpg", "./../../../assets/img/mm/8_oros.jpg"],
    ["./../../../assets/img/mm/9_bastos.jpg", "./../../../assets/img/mm/9_copas.jpg",  "./../../../assets/img/mm/9_espadas.jpg", "./../../../assets/img/mm/9_oros.jpg"],
    ["./../../../assets/img/mm/10_bastos.jpg", "./../../../assets/img/mm/10_copas.jpg","./../../../assets/img/mm/10_espadas.jpg","./../../../assets/img/mm/10_oros.jpg"],
    ["./../../../assets/img/mm/11_bastos.jpg", "./../../../assets/img/mm/11_copas.jpg","./../../../assets/img/mm/11_espadas.jpg","./../../../assets/img/mm/11_oros.jpg"],
    ["./../../../assets/img/mm/12_bastos.jpg", "./../../../assets/img/mm/12_copas.jpg","./../../../assets/img/mm/12_espadas.jpg","./../../../assets/img/mm/12_oros.jpg"],
  ]
  cartaActual = Math.floor(Math.random()*this.cartas.length);
  imgActual = this.imgCartas[this.cartaActual][Math.floor(Math.random()*4)];

  numJugador:any;
  imgJugador:any;
  flag=false;

  constructor(public afAuth: AngularFireAuth,private router:Router) { }

  async ngOnInit() {
    this.imgJugador = null;
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
  }


  mayor(){
    
    this.nuevaCarta()
    this.flag = true;
          if(this.numJugador > this.cartaActual){
            Swal.fire({
              position: 'top-end',
              icon: 'success',
              title: 'GANASTE',
              showConfirmButton: false,
              timer: 1500
            })
           }

          if(this.numJugador < this.cartaActual){
            Swal.fire({
              position: 'top-end',
              icon: 'warning',
              title: 'PERDISTE',
              showConfirmButton: false,
              timer: 1500
            })
          }

          if(this.numJugador == this.cartaActual){
            Swal.fire({
              position: 'top-end',
              icon: 'info',
              title: 'EMPATE',
              showConfirmButton: false,
              timer: 1500
            })
         }
         setTimeout(() => {
          this.cartaActual = Math.floor(Math.random()*this.cartas.length);
          this.imgActual = this.imgCartas[this.cartaActual][Math.floor(Math.random()*4)];
          this.flag = false;
         }, 2000);

       }

      menor(){
        this.nuevaCarta()
        this.flag = true;
              if(this.numJugador > this.cartaActual){
                Swal.fire({
                  position: 'top-end',
                  icon: 'warning',
                  title: 'PERDISTE',
                  showConfirmButton: false,
                  timer: 1500
                })
               }
    
              if(this.numJugador < this.cartaActual){
                Swal.fire({
                  position: 'top-end',
                  icon: 'success',
                  title: 'GANASTE',
                  showConfirmButton: false,
                  timer: 1500
                })
              }
    
              if(this.numJugador == this.cartaActual){
                Swal.fire({
                  position: 'top-end',
                  icon: 'info',
                  title: 'EMPATE',
                  showConfirmButton: false,
                  timer: 1500
                })
             }

             setTimeout(() => {
              this.cartaActual = Math.floor(Math.random()*this.cartas.length);
              this.imgActual = this.imgCartas[this.cartaActual][Math.floor(Math.random()*4)];
              this.flag = false;
             }, 2000);

           }

    nuevaCarta(){
      this.numJugador = Math.floor(Math.random()*this.cartas.length);
      //alert(this.numJugador)
      this.imgJugador = this.imgCartas[this.numJugador][Math.floor(Math.random()*4)];
      //alert(this.imgJugador)
    }

}//
