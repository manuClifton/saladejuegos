import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { QuiensoyComponent } from './quiensoy/quiensoy.component';
import { RegisterComponent } from './register/register.component';
import { AhorcadoComponent } from './juegos/ahorcado/ahorcado.component';
import { MayormenorComponent } from './juegos/mayormenor/mayormenor.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'home', component: HomeComponent },
  { path: 'quien-soy', component: QuiensoyComponent },
  { path: 'juegos/ahorcado', component: AhorcadoComponent },
  { path: 'juegos/mayormenor', component: MayormenorComponent }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
