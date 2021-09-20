import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl} from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { AuthService } from '../services/auth.service';
//import { toast } from '../../toast';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  
  registerForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
    password2: new FormControl('')
  })
  alert=false;

  constructor(private authSvc:AuthService,  private router:Router) { }

  ngOnInit(): void {
  }
  onRegister(){
    //console.log('Form->', this.registerForm.value)
    const {email, password, password2} = this.registerForm.value;
    if(email == '' || password == '' || password2 == ''){
      //toast('FALTAN DATOS', 3000)
      console.log("FALTAN DATOS");
      return;
    }
    if(password != password2){
      console.log("NO COINCIDEN LAS CONTRASEÑAS");
      return;
    }


    this.authSvc.register(email,password)
    .then(res =>{
      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Usuario Creado correcto',
        showConfirmButton: false,
        timer: 1500
      })
      this.router.navigate(['/home'])
    })
    .catch(err =>{
      Swal.fire({
        position: 'top-end',
        icon: 'error',
        title: 'Error al crear',
        showConfirmButton: false,
        timer: 1500
      })
      console.log('error en alta', err)
    })

  }

}

