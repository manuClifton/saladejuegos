import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import { JuegosService } from 'src/app/services/juegos.service';
import Swal from 'sweetalert2';
//import {}from  './preguntas.js';

@Component({
  selector: 'app-preguntados',
  templateUrl: './preguntados.component.html',
  styleUrls: ['./preguntados.component.css']
})

export class PreguntadosComponent implements OnInit {

  base_preguntasJason:any[] = [{
          "categoria": "Arte y literatura",
          "pregunta": "¿Quién pintó la mona lisa?",
          "respuesta": "Leonardo da Vinci",
          "incorrecta1": "Picasso",
          "incorrecta2": "Miguel Ángel",
          "incorrecta3": "Monet",
          "imagen": "https://i.ibb.co/9cjvmw1/mona-lisa.jpg",
          "objectFit": "cover"
      },
      {
          "categoria": "Arte y literatura",
          "pregunta": "Pintor de  \"El jardín de las delicias\"",
          "respuesta": "El Bosco",
          "incorrecta1": "Velásquez",
          "incorrecta2": "Picasso",
          "incorrecta3": "Dalí\r",
          "imagen": "https://i.ibb.co/SDjX7PM/jardin-de-las-delicias.jpg",
          "objectFit": "cover"
      },
      {
          "categoria": "Arte y literatura",
          "pregunta": "significado de  \"El jardín de las delicias\"",
          "respuesta": "Mundo Terrenal",
          "incorrecta1": "Es Mejor Morir",
          "incorrecta2": "Dios Es El Camino",
          "incorrecta3": "Adán Y Eva\r",
          "imagen": "https://i.ibb.co/SDjX7PM/jardin-de-las-delicias.jpg",
          "objectFit": "cover"
      },
      {
          "categoria": "Arte y literatura",
          "pregunta": "Ciudad fetiche del escritor Paul Auster",
          "respuesta": "Nueva York",
          "incorrecta1": "París",
          "incorrecta2": "Ámsterdam",
          "incorrecta3": "Bogotá\r",
          "imagen": "https://i.ibb.co/zfM2Vyd/paul-auster.jpg",
          "objectFit": "cover"
      },
      {
        "categoria": "Arte y literatura",
        "pregunta": "Escritor de \"El viejo y el mar\"",
        "respuesta": "Ernest Hemingway",
        "incorrecta1": "Julio Verne",
        "incorrecta2": "Gabriel García Márquez",
        "incorrecta3": "Ernesto Sábato\r",
        "imagen": "https://i.ibb.co/WHd1NnL/el-viejo-y-el-mar.jpg",
        "objectFit": "cover"
    },
    {
        "categoria": "Arte y literatura",
        "pregunta": "Vivía en el 221B de Backer Street.",
        "respuesta": "Sherlock Holmes",
        "incorrecta1": "Katniss Everdeen",
        "incorrecta2": "Hermione Jean Granger",
        "incorrecta3": "Harry James Potter \r",
        "imagen": "https://i.ibb.co/SPqsRyx/221b.jpg",
        "objectFit": "cover"
    },
    {
        "categoria": "Arte y literatura",
        "pregunta": "Género al que pertenece la novela \"La historia del ojo\" de George Bataille",
        "respuesta": "Erótico",
        "incorrecta1": "Drama",
        "incorrecta2": "Terror",
        "incorrecta3": "Suspenso\r",
        "imagen": "https://i.ibb.co/dgfv8zK/el-ojo.gif",
        "objectFit": "cover"
    },
    {
        "categoria": "Arte y literatura",
        "pregunta": "Es una figura clave del dadaísmo y el surrealismo.",
        "respuesta": "Max Ernst",
        "incorrecta1": "Pablo Picasso",
        "incorrecta2": "Vincent Van Gogh",
        "incorrecta3": "Claude Monet\r",
        "imagen": "https://i.ibb.co/dLw3jng/Dada-min-e1533749290497.jpg",
        "objectFit": "cover"
    }
];
  pregunta = "";
  categoria = "";
  respuesta = "";
  incorrecta1 = "";
  incorrecta2 = "";
  incorrecta3 = "";
  imagen = "";
  objectFit = "";

  opcion1= "";
  opcion2= "";
  opcion3= "";
  opcion4= "";

  style = {
    background: ""
  }
  npreguntas = []

  posibles_respuestas:any[] = [];

  suspender_botones = false;

  preguntas_hechas = 0
  preguntas_correctas = 0
  preguntas_incorrectas = 0;

  jugador = {
    email: '',
    ganadas: 0,
    perdidas: 0
  }
  jugadores:any | [];
  user:any;

  constructor(private juegoDB:JuegosService,public afAuth: AngularFireAuth,private router:Router) { }

  async ngOnInit() {

    this.user = await this.afAuth.onAuthStateChanged(user =>{
      if(!user){
        Swal.fire({
          position: 'top-end',
          icon: 'warning',
          title: 'Ingresa tu usuario',
          showConfirmButton: false,
          timer: 1500
        })
        this.router.navigate(['/login'])
        }else{
          this.user = user;
          this.jugador.email = this.user.email;
        }
    })
  /*  this.base_preguntas = this.readText("preguntas.json")
    this.interprete_bp = JSON.parse(this.base_preguntas)
    this.escogerPreguntaAleatoria()*/

    this.escogerPreguntaAleatoria()
    this.obtenerValoresJugadores()
  }

  
  obtenerValoresJugadores(){
    this.juegoDB.getAll('preguntados').then(refDB=>{
      refDB?.subscribe(refjugadores =>{
        //console.log(refMensajes)
        this.jugadores = refjugadores.map(refJugador =>{

          let jugador = refJugador.payload.doc.data();

          return jugador
        })
        if(this.jugadores){
          for (let i = 0; i < this.jugadores.length; i++) {
            if(this.jugadores[i].email == this.jugador.email){
              this.jugador.ganadas = this.jugadores[i].ganadas;
              this.jugador.perdidas = this.jugadores[i].perdidas;
            }
          }
          console.log(this.jugador)
        }
      })

    })
  }//



  elegirPregunta(n:number){
   const {categoria, pregunta, respuesta, incorrecta1, incorrecta2, incorrecta3, imagen, objectFit} = this.base_preguntasJason[n];

    this.categoria = categoria;
    this.pregunta = pregunta;
    this.respuesta = respuesta;
    this.incorrecta1 = incorrecta1;
    this.incorrecta2 = incorrecta2;
    this.incorrecta3 = incorrecta3;
    this.imagen = imagen;
    this.objectFit = objectFit;

  }


escogerPreguntaAleatoria() {
    const n = Math.floor(Math.random() * this.base_preguntasJason.length)
    this.elegirPregunta(n)
    this.desordenarRespuestas()
  }

  
  select_id(id:string) {
    return document.getElementById(id)
  }

  desordenarRespuestas() {
    this.posibles_respuestas = [
      this.respuesta,
      this.incorrecta1,
      this.incorrecta2,
      this.incorrecta3
    ]
    this.posibles_respuestas.sort(() => Math.random() - 0.5)
  
    this.opcion1 = this.posibles_respuestas[0]
    this.opcion2 = this.posibles_respuestas[1]
    this.opcion3 = this.posibles_respuestas[2]
    this.opcion4 = this.posibles_respuestas[3]
  }

  oprimirBtn(res:number){

      if(this.posibles_respuestas[res] == this.respuesta){
        
        Swal.fire({
          icon: 'success',
          title: 'CORRECTO',
          showConfirmButton: false,
          timer: 1500
        })
        this.jugador.ganadas++
        
        this.escogerPreguntaAleatoria()
        this.agregarPuntajeDB()
      }else{
        Swal.fire({
          icon: 'warning',
          title: 'INCORRECTO',
          showConfirmButton: false,
          timer: 1500
        })
        this.jugador.perdidas++
  
        this.escogerPreguntaAleatoria()
        this.agregarPuntajeDB()
      }
  }




  agregarPuntajeDB(){
    let existe = true;
        for (let i = 0; i < this.jugadores.length; i++) {
          if(this.jugadores[i].email == this.jugador.email){
             //YA EXISTE EL JUGADOR AGREGAR DATOS NUEVOS MODIFICAR
             this.juegoDB.update('preguntados', this.jugador.email, this.jugador)
             .then(res =>{
              console.log(res)
              //aca hago lo que quiero
              //toast('Se creo usuario Correctamente', 3000)  AGREGAR EL CREAR DATOS EN LA TABLA
            })
            .catch(err =>{
              console.log('error en alta', err)
            })
            existe = true;
            break;
          }else{
            existe = false;
          }
          
        }
        if(!existe){
              // SI NO EXISTE CREARLO Y ASIGNAR PUNTOS
              this.juegoDB.create('preguntados',this.jugador)
              .then(res =>{
                console.log(res)
                //aca hago lo que quiero
                //toast('Se creo usuario Correctamente', 3000)  AGREGAR EL CREAR DATOS EN LA TABLA
              })
              .catch(err =>{
                console.log('error en alta', err)
              })
        }

  }//


























  /*
  btn_correspondiente = [
    this.select_id("btn1"), this.select_id("btn2"),
    this.select_id("btn3"), this.select_id("btn4")
  ]

  select_id(id:string) {
    return document.getElementById(id)
  }
  


oprimir_btn(i) {
    if (this.suspender_botones) {
      return;
    }
    this.suspender_botones = true
    if (posibles_respuestas[i] == this.pregunta.respuesta) {
      this.preguntas_correctas++
      btn_correspondiente[i].style.background = "lightgreen"
    } else {
      btn_correspondiente[i].style.background = "pink"
    }
    for (let j = 0; j < 4; j++) {
      if (this.posibles_respuestas[j] == this.pregunta.respuesta) {
        btn_correspondiente[j].style.background = "lightgreen"
        break
      }
    }
    setTimeout(() => {
      this.reiniciar()
      this.suspender_botones = false
    }, 3000);
}
    reiniciar() {
      for (const btn of this.btn_correspondiente) {
        btn.style.background = "white"
      }
      this.escogerPreguntaAleatoria()
    }
    style(id:string) {
      return this.select_id(id).style
    }

  escogerPreguntaAleatoria() {
    this.n = Math.floor(Math.random() * this.interprete_bp.length)
    // n = 0
  
    while (this.npreguntas.includes(n)) {
      n++
      if (n >= this.interprete_bp.length) {
        n = 0
      }
      if (this.npreguntas.length == this.interprete_bp.length) {
        this.npreguntas = []
      }
    }
    this.npreguntas.push(n)
    this.preguntas_hechas++
    
    this.escogerPregunta(n)
  }

  desordenarRespuestas() {
    this.posibles_respuestas = [
      this.pregunta.respuesta,
      this.pregunta.incorrecta1,
      this.pregunta.incorrecta2,
      this.pregunta.incorrecta3
    ]
    this.posibles_respuestas.sort(() => Math.random() - 0.5)
  
    this.select_id("btn1").innerHTML = this.posibles_respuestas[0]
    this.select_id("btn2").innerHTML = this.posibles_respuestas[1]
    this.select_id("btn3").innerHTML = this.posibles_respuestas[2]
    this.select_id("btn4").innerHTML = this.posibles_respuestas[3]
  }

  readText(ruta_local:string) {
    var texto = null;
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.open("GET", ruta_local, false);
    xmlhttp.send();
    if (xmlhttp.status == 200) {
      texto = xmlhttp.responseText;
    }
    return texto;
  }
  */

}
