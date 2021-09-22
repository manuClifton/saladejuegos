import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-mijuego',
  templateUrl: './mijuego.component.html',
  styleUrls: ['./mijuego.component.css']
})
export class MijuegoComponent implements OnInit {

  style = {
    width: '100%',
    height: '500px',
    border: '10px dashed #aa4',
    background: '#ffb'
  }

  stylePLayer = {
    position: 'absolute',
    background: '#900',
    border: '4px dashed #b22',
    borderRadius: '25px',
    width: '50px',
    height: '50px',
    transition: 'All 0.3s',
    marginTop: '',
    marginLeft: '',
  }

  puntos = 0;
  tiempo = 30;
  necesario = 30;
  user:any;
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
   this.iniciar();
  }

  iniciar(){
    setInterval(() => {
      this.restarTiempo()
    }, 1000);
  }
  sumarPuntos(){
    this.puntos++;
    this.stylePLayer.marginTop = Math.round(Math.random()*420)+"px";
    this.stylePLayer.marginLeft = Math.round(Math.random()*1000)+"px";
    if(this.puntos == this.necesario){
      Swal.fire({
        position: 'top',
        title: 'GANASTE',
        text: "Queres intentar otra vez?",
        icon: 'success',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Volver a jugar'
      }).then((result) => {
        if (result.isConfirmed) {
          this.reiniciar()
        }else{
          this.router.navigate(['/home'])
        }
      })
      this.reiniciar();
    }
  }
  restarTiempo(){
    this.tiempo--;
    if(this.tiempo == 0){

      Swal.fire({
        position: 'top',
        title: 'PERDISTE',
        text: "Queres intentar otra vez?",
        icon: 'error',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Volver a jugar'
      }).then((result) => {
        if (result.isConfirmed) {
          this.reiniciar()
        }else{
          this.router.navigate(['/home'])
        }
      })

      this.reiniciar()
    }
  }

  reiniciar(){
    this.tiempo = 30;
    this.puntos = 0;
  }
  


}//
