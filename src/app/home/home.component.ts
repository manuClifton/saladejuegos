import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private authSvc:AuthService) { }

  async ngOnInit() {
    console.log()
    const user = await this.authSvc.getCurrentUser()
    if(user){
      console.log("Usuario:", user)
    }
  }

}
