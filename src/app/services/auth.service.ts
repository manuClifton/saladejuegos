import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
//import * as firebase from "firebase/app"
import { Auth,User,getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, updateCurrentUser, signOut } from 'firebase/auth';
//import {first} from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(public afAuth: AngularFireAuth) {}

  async login(email:string, password:string){
    const auth = getAuth();
    try {
      const res = await this.afAuth.signInWithEmailAndPassword(email,password)
      if(res){
        return res;
      }else{
        return false;
      }
     
    } catch (error) {

      return false;
    }
   
  }

  async register(email:string, password:string){
    try {
      const res = await this.afAuth.createUserWithEmailAndPassword(email, password);
      return res;
    } catch (error) {
      console.log(error);
      return error;
    }

  }
  async logout(){
    try {
      await this.afAuth.signOut();
      //redirigir, guardar o borrar cosas de LOCALSTORAGE
    } catch (error) {
      console.log(error);
      return error;
    }
  }

  async getCurrentUser(){

    const unsuscrive = await this.afAuth.onAuthStateChanged(user =>{
        if(user){
          //console.log(user)
          return true;
        }else{

          return false;
        }
    })

  }


}//

