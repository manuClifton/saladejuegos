import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl} from '@angular/forms';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl('')
  })

  constructor(private authSvc:AuthService ) { }

  ngOnInit(): void {
  }
  onLogin(){
   // console.log('Form->', this.loginForm.value)
   const {email, password} = this.loginForm.value;
   if(email == '' || password == ''){
     console.log("FALTAN DATOS");
     return;
   }

    this.authSvc.login(email,password)
    .then(res =>{
      if(res){
        console.log("LOGIN CORRECTO")
      }else{
        console.log("ERROR DE LOGIN")
      }
    })

    
  }


}//
