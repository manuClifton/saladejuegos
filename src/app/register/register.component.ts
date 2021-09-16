import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl} from '@angular/forms';
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

  constructor(private authSvc:AuthService) { }

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
      console.log(res)
      window.location.href = './home';
    })
    .catch(err =>{
      console.log('error en alta', err)
    })

  }

}

