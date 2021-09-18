import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import {FormGroup, FormControl} from '@angular/forms';
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
    email: new FormControl(''),
    password: new FormControl('')
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
      }
   } catch (error) {
     console.log(error);
   }
    
  }


}//
