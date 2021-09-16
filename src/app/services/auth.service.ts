import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import * as firebase from "firebase/app"
import { Auth,User,getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, updateCurrentUser, signOut } from 'firebase/auth';
//import {first} from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

 // public user: User;

  constructor(public afAuth: AngularFireAuth) { }

  async login(email:string, password:string){
    const auth = getAuth();
    try {
      const res = await this.afAuth.signInWithEmailAndPassword(email,password)
      return true;
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
    try {
      return this.afAuth.authState.pipe(first()).toPromise();
    } catch (error) {
      console.log(error);
      return error;
    }
  }


}//

function first(): import("rxjs").OperatorFunction<import("firebase/compat").default.User | null, unknown> {
  throw new Error('Function not implemented.');
}

