import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import {FormGroup, FormControl, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userExist:any;

  loginForm = new FormGroup({
    email: new FormControl('',Validators.required),
    password: new FormControl('', Validators.min(6))
  })

  constructor(private authSvc:AuthService, private router:Router, public afAuth: AngularFireAuth ) { }

  async ngOnInit() {

    this.userExist = await this.afAuth.onAuthStateChanged(user =>{
      if(user){
        console.log(user)
        this.router.navigate(['/home'])
      }
  })
     

  }

  async onLogin(){

   const {email, password} = this.loginForm.value;
   if(email == '' || password == ''){
     console.log("FALTAN DATOS");
     return;
   }

   try {
    const user = await this.authSvc.login(email,password)
      if(user){
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'Acceso correcto',
          showConfirmButton: false,
          timer: 1500
        })
        this.router.navigate(['/home'])
        window.location.reload()
      }
   } catch (error) {
    Swal.fire({
      position: 'top-end',
      icon: 'error',
      title: 'Error de Ingreso',
      showConfirmButton: false,
      timer: 1500
    })
     console.log(error);
   }
  }
  accesoRapido(id:number){
      if(id == 0){
        this.loginForm.value.email = 'admin@admin.com';
        this.loginForm.value.password = '000000';
      }
      if(id == 1){
        this.loginForm.value.email = 'usuario1@usuario1.com';
        this.loginForm.value.password = '111111'
      }
      if(id == 2){
        this.loginForm.value.email = 'usuario2@usuario2.com';
        this.loginForm.value.password = '222222'
      }
  }

}//
