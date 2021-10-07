import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AppComponent } from '../app.component';
import { ChatService } from '../services/chat.service';
import { UsuarioService } from '../services/usuario.service';



@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {

  msj = {
    email: '',
    nombre: '',
    msj: '',
    fecha: ''
  }
  
  contadorMensajes = 0;
  user:any;
  mensajes:any[] = [];

  constructor(private dbChar:ChatService,
              private userService:UsuarioService,
              private afAuth:AngularFireAuth,
             ) 
    { }//fin constructor

   async ngOnInit() {

    await this.afAuth.onAuthStateChanged(user =>{
      if(user){
        this.user = user;
        this.msj.email = user.email || '';
        this.cargarUsuario()
      }
     })
    this.obtenerChats();
   
  }

   cargarUsuario(){
     this.userService.getAll('users').then(refDB=>{
       refDB?.subscribe(refUsers=>{
          refUsers.forEach(usuario=>{
            this.user = usuario.payload.doc.data()
            if(this.user.email == this.msj.email){
              this.msj.nombre = this.user.nombre
            }
          })
       })
     })
     console.log(this.msj)
  }

  obtenerChats(){
    this.dbChar.getAll('CHATS').then(refDB=>{
      refDB?.subscribe(refMensajes =>{
        //console.log(refMensajes)
        this.mensajes = refMensajes.map(refMsj =>{
          this.contadorMensajes++;
          let msj = refMsj.payload.doc.data();
          //console.log(msj)
          return msj
        })
        console.log(this.mensajes)
        this.mensajes.sort()
        console.log(this.mensajes)
  
      })
    })

  }


  altaMsj(){
    this.msj.fecha = Date.now().toString();
    this.dbChar.create("CHATS", this.msj).then(res =>{
      console.log(res);
     
    })
    .catch(err =>{
      console.log("error en alta mensaje", err);
    })
  }


}//
