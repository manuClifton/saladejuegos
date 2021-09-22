import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { QuiensoyComponent } from './quiensoy/quiensoy.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';

import {AngularFireModule} from '@angular/fire/compat';
import {AngularFireAuthModule} from '@angular/fire/compat/auth';
import { environment } from 'src/environments/environment';
import { AhorcadoComponent } from './juegos/ahorcado/ahorcado.component';
import { MayormenorComponent } from './juegos/mayormenor/mayormenor.component';
import { PreguntadosComponent } from './juegos/preguntados/preguntados.component';
import { MijuegoComponent } from './juegos/mijuego/mijuego.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    QuiensoyComponent,
    AhorcadoComponent,
    MayormenorComponent,
    PreguntadosComponent,
    MijuegoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
