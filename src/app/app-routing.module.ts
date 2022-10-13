import { EncuestaComponent } from './encuesta/encuesta.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { QuiensoyComponent } from './quiensoy/quiensoy.component';
import { RegisterComponent } from './register/register.component';

import { ChatComponent } from './chat/chat.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'home', component: HomeComponent },
  { path: 'quien-soy', component: QuiensoyComponent  },
  { path: 'chat', component: ChatComponent },
  { path: 'encuesta', component: EncuestaComponent },
  { path: 'juegos', 
    loadChildren: () =>import('../app/juegos/routing.module').then(m => m.RoutingModule)
  },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
