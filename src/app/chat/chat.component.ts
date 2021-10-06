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

  mensaje = {
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
        this.mensaje.email = user.email || '';
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
            if(this.user.email == this.mensaje.email){
              this.mensaje.nombre = this.user.nombre
            }
          })
       })
     })
     console.log(this.mensaje)
  }

  obtenerChats(){
    this.dbChar.getAll('CHATS').then(refDB=>{
      refDB?.subscribe(refMensajes =>{
        //console.log(refMensajes)
        this.mensajes = refMensajes.map(refMsj =>{
          this.contadorMensajes++;
          let msj = refMsj.payload.doc.data();
          return msj
        })
       // console.log(this.mensajes)
      })
    })
  }


  altaMsj(){
    this.mensaje.fecha = Date.now().toString();
    this.dbChar.create("CHATS", this.mensaje).then(res =>{
      console.log(res);
    })
    .catch(err =>{
      console.log("error en alta mensaje", err);
    })
  }


}//
