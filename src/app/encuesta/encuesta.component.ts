import Swal from 'sweetalert2';
import { Encuesta } from './../interfaces/encuesta';
import { EncuestaService } from './../services/encuesta.service';
import { Router } from '@angular/router';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Component({
  selector: 'app-encuesta',
  templateUrl: './encuesta.component.html',
  styleUrls: ['./encuesta.component.css']
})
export class EncuestaComponent implements OnInit {
  altaForm: FormGroup;
  user:any;
  email:any;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private encuestaServis: EncuestaService,
    public afAuth: AngularFireAuth,
  ) { 
    this.altaForm = this.fb.group({
      nombre: ['',[Validators.required]],
      apellido: ['',[Validators.required]],
      edad: ['',[Validators.required, this.validarEdad]],
      telefono: ['',[Validators.required,this.validarTelefonoCantidad, this.validarTelefono]],
      respuesta1: ['',[Validators.required]],
      respuesta2: ['',[Validators.required]],
      respuesta3: ['', [Validators.required]],
    });
  }

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
        }else{
          this.user = user;
          this.email = this.user.email;
        }
    })
  }


  validarTelefono(control:AbstractControl){
    const telefono = control.value;
    const tieneLetra = telefono.includes(',');
    if(tieneLetra){
      return {tieneLetra: true}
    }else{
      return null;
    }
  }
  validarTelefonoCantidad(control:AbstractControl){
    const telefono = control.value;
    const tieneDies = telefono.length;
    if(tieneDies > 10){
      return {tieneDies: true}
    }else{
      return null;
    }
  }
  validarEdad(control:AbstractControl){
    const edad= control.value;
    //const edad = this.altaForm.controls['edad'].value;
    if(edad < 18 || edad > 99 ){
      return {edadPasa: true}
    }else{
      return null;
    }
  }
  enviarEncuesta(){
    const {nombre, apellido,edad,telefono,respuesta1, respuesta2  } = this.altaForm.value;
    const encuesta: Encuesta = {email:this.email ,nombre, apellido,edad,telefono,resp1:respuesta1, resp2:respuesta2, resp3: 'playa'  }
    const res = this.encuestaServis.create('encuestas',encuesta)
    if(!res){
      Swal.fire({
        position: 'top-end',
        icon: 'error',
        title: 'Error de Carga',
        showConfirmButton: false,
        timer: 1500
      })
    }else{
      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Envio Correcto',
        showConfirmButton: false,
        timer: 1500
      })
      this.router.navigate(['/home'])
    }
  }


  /*
  checkear(id:number){
    if(id === 1){
      this.altaForm.value.controls.respuesta3.checked;
    }else{
      document.getElementById('check1')?.setAttribute('checked', 'false');
    }
  }*/

}//fin
