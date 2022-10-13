import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root'
})
export class EncuestaService {

  constructor(
    private firestore:AngularFirestore
  ) { }

  async create(collection:string, encuesta:any){ //envia peticion a firebase, Si no existe la coleccion la crea
    try {
     return await this.firestore.collection(collection).add(encuesta) //devuelva una promesas
    } catch (error) {
     console.log('error en: create',error);
     return;
    }
   }//


}//
