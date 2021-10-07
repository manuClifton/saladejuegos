import { Component,OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AuthService } from './services/auth.service';
import { UsuarioService } from './services/usuario.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  public isLogged = false;
  title = 'saladejuegos';
  userActual:any;
  coincide = false;

  constructor(private authSvc:AuthService, public afAuth: AngularFireAuth, private userService:UsuarioService) { }

  async ngOnInit() {

     await this.afAuth.onAuthStateChanged(user =>{
      if(user){
        this.userService.getAll('users').then(refDB=>{
          refDB?.subscribe(refUsers=>{
             refUsers.forEach(usuario=>{
               if(!this.coincide){
                this.userActual = usuario.payload.doc.data()
               }
              if(user.email == this.userActual.email){
                  //console.log(this.userActual)
                  this.coincide = true
                  return;
              }
             })
          })
        })
        this.isLogged = true;
      }else{
        this.isLogged = false;
      }
  })
    
 }//

 onLogout(){
   this.authSvc.logout();
   this.isLogged= false;
   this.coincide = false;
   this.userActual = null;
 }


 accesoRapido(id:number){
  if(id == 0){
    
  }
 }





}//
