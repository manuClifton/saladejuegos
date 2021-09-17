import { Component,OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  public isLogged = false;
  title = 'saladejuegos';
  user: any;

  constructor(private authSvc:AuthService, public afAuth: AngularFireAuth) { }

  async ngOnInit() {

    this.user = await this.afAuth.onAuthStateChanged(user =>{
      if(user){
        console.log(user)
        this.user = user;
        this.isLogged = true;
      }else{
        this.user = null;
        this.isLogged = false;
      }
  })
    
 }//

 onLogout(){
   this.authSvc.logout();
   this.isLogged= false;
 }

}//
