"use strict";(self.webpackChunksaladejuegos=self.webpackChunksaladejuegos||[]).push([[623],{9623:(k,d,r)=>{r.r(d),r.d(d,{RoutingModule:()=>b});var c=r(8583),u=r(8698),g=r(8239),h=r(8259),a=r.n(h),t=r(3018),m=r(8006),l=r(665);function A(n,s){if(1&n&&t._UZ(0,"img",7),2&n){const i=t.oxw();t.s9C("src",i.imgJugador,t.LSH)}}function f(n,s){if(1&n&&t._UZ(0,"img",18),2&n){const i=t.oxw();t.s9C("src",i.imagen,t.LSH)}}const T=[{path:"ahorcado",component:(()=>{class n{constructor(i,e){this.afAuth=i,this.router=e,this.flag=!0,this.contFallas=0,this.palabra="",this.guiones="",this.nuevoGuion="",this.letra="",this.imagen="./../../../assets/img/Ahorcado01.png",this.imagenes=["./../../../assets/img/Ahorcado01.png","./../../../assets/img/Ahorcado02.png","./../../../assets/img/Ahorcado03.png","./../../../assets/img/Ahorcado04.png","./../../../assets/img/Ahorcado05.png","./../../../assets/img/Ahorcado06.png"],this.palabras=["casa","perro","gato","avion","canasto","clima","elefante","auto","tigre","leon","computadora","celular","telefono","escritorio","boca","cabeza","zatato","camisa","pantalon","mochila","barbijo","electricidad"]}ngOnInit(){var i=this;return(0,g.Z)(function*(){i.user=yield i.afAuth.onAuthStateChanged(e=>{e||(a().fire({position:"top-end",icon:"warning",title:"Ingresa tu usuario",showConfirmButton:!1,timer:1500}),i.router.navigate(["/login"]))}),i.actualizarPalabrta(),i.crearGuiones()})()}verificar(i){this.letra=i;for(let e=0;e<this.palabra.length;e++)this.palabra[e]==this.letra&&(this.guiones=this.replaceAt(2*e,this.letra,this.guiones),this.flag=!1);this.flag&&(this.contFallas++,this.imagen=this.imagenes[this.contFallas],5==this.contFallas&&(setTimeout(()=>{this.imagen=this.imagenes[5]},1e3),a().fire({icon:"error",title:"PERDISTE",text:"Volve a intenarlo..."}),this.actualizarPalabrta(),this.crearGuiones(),setTimeout(()=>{this.imagen="./../../../assets/img/Ahorcado01.png",this.contFallas=0,this.letra=""},1500))),this.guiones.includes("_")||(a().fire({icon:"success",title:"GANASTE",showConfirmButton:!1,timer:1500}),this.imagen=this.imagenes[0],this.actualizarPalabrta(),this.crearGuiones(),this.contFallas=0,this.letra=""),this.flag=!0}actualizarPalabrta(){return this.palabra=this.palabras[Math.floor(Math.random()*this.palabras.length)]}crearGuiones(){return this.guiones=this.palabra.replace(/./g,"_ ")}replaceAt(i,e,o){return o.substr(0,i)+e+o.substr(i+e.length)}}return n.\u0275fac=function(i){return new(i||n)(t.Y36(m.zQ),t.Y36(u.F0))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-ahorcado"]],decls:91,vars:3,consts:[[1,"container"],[1,"row"],[1,"col-6"],["type","text","maxlength","1","name","","id","","placeholder","Ingrese una letra",3,"ngModel","ngModelChange"],[1,"ahorcado"],["alt","",2,"width","350px","height","350px",3,"src"],[1,"col-12"],[1,"card"],[1,"card-header","bg-warning"],[1,"text-center"],[1,"input-group","input-group-sm","row"],["id","resultado",1,"input-group-addon","col-lg-12"],[1,"card-body"],["type","button",1,"btn","btn-outline-primary","col-lg-2","col-md-2","col-xs-2",3,"click"],[1,"btn","btn-outline-primary","col-lg-2","col-md-2","col-xs-2",3,"click"],[1,"card-header","bg-info"]],template:function(i,e){1&i&&(t.TgZ(0,"div",0),t.TgZ(1,"div",1),t.TgZ(2,"div",2),t.TgZ(3,"h1"),t._uU(4,"Juego del Ahorcado"),t.qZA(),t.TgZ(5,"p"),t._uU(6,"Igresa las letras en el teclado virtual"),t.qZA(),t.TgZ(7,"input",3),t.NdJ("ngModelChange",function(p){return e.letra=p}),t.qZA(),t.TgZ(8,"p"),t._uU(9),t.qZA(),t.TgZ(10,"div",4),t._UZ(11,"img",5),t.qZA(),t.qZA(),t.TgZ(12,"div",2),t.TgZ(13,"div",0),t.TgZ(14,"div",1),t.TgZ(15,"div",6),t.TgZ(16,"div",7),t.TgZ(17,"div",8),t.TgZ(18,"h4",9),t._uU(19,"TECLADO"),t.qZA(),t.TgZ(20,"div",10),t._UZ(21,"span",11),t.qZA(),t.qZA(),t.TgZ(22,"div",12),t.TgZ(23,"div",1),t.TgZ(24,"button",13),t.NdJ("click",function(){return e.verificar("a")}),t._uU(25,"A"),t.qZA(),t.TgZ(26,"button",13),t.NdJ("click",function(){return e.verificar("b")}),t._uU(27,"B"),t.qZA(),t.TgZ(28,"button",14),t.NdJ("click",function(){return e.verificar("c")}),t._uU(29,"C"),t.qZA(),t.TgZ(30,"button",14),t.NdJ("click",function(){return e.verificar("d")}),t._uU(31,"D"),t.qZA(),t.TgZ(32,"button",14),t.NdJ("click",function(){return e.verificar("e")}),t._uU(33,"E"),t.qZA(),t.TgZ(34,"button",14),t.NdJ("click",function(){return e.verificar("f")}),t._uU(35,"F"),t.qZA(),t.qZA(),t.TgZ(36,"div",1),t.TgZ(37,"button",13),t.NdJ("click",function(){return e.verificar("g")}),t._uU(38,"G"),t.qZA(),t.TgZ(39,"button",13),t.NdJ("click",function(){return e.verificar("h")}),t._uU(40,"H"),t.qZA(),t.TgZ(41,"button",13),t.NdJ("click",function(){return e.verificar("i")}),t._uU(42,"I"),t.qZA(),t.TgZ(43,"button",13),t.NdJ("click",function(){return e.verificar("j")}),t._uU(44,"J"),t.qZA(),t.TgZ(45,"button",13),t.NdJ("click",function(){return e.verificar("k")}),t._uU(46,"K"),t.qZA(),t.TgZ(47,"button",13),t.NdJ("click",function(){return e.verificar("l")}),t._uU(48,"L"),t.qZA(),t.qZA(),t.TgZ(49,"div",1),t.TgZ(50,"button",13),t.NdJ("click",function(){return e.verificar("m")}),t._uU(51,"M"),t.qZA(),t.TgZ(52,"button",13),t.NdJ("click",function(){return e.verificar("n")}),t._uU(53,"N"),t.qZA(),t.TgZ(54,"button",13),t.NdJ("click",function(){return e.verificar("\xf1")}),t._uU(55,"\xd1"),t.qZA(),t.TgZ(56,"button",13),t.NdJ("click",function(){return e.verificar("o")}),t._uU(57,"O"),t.qZA(),t.TgZ(58,"button",13),t.NdJ("click",function(){return e.verificar("p")}),t._uU(59,"P"),t.qZA(),t.TgZ(60,"button",13),t.NdJ("click",function(){return e.verificar("q")}),t._uU(61,"Q"),t.qZA(),t.qZA(),t.TgZ(62,"div",1),t.TgZ(63,"button",13),t.NdJ("click",function(){return e.verificar("r")}),t._uU(64,"R"),t.qZA(),t.TgZ(65,"button",13),t.NdJ("click",function(){return e.verificar("s")}),t._uU(66,"S"),t.qZA(),t.TgZ(67,"button",13),t.NdJ("click",function(){return e.verificar("t")}),t._uU(68,"T"),t.qZA(),t.TgZ(69,"button",13),t.NdJ("click",function(){return e.verificar("u")}),t._uU(70,"U"),t.qZA(),t.TgZ(71,"button",13),t.NdJ("click",function(){return e.verificar("v")}),t._uU(72,"V"),t.qZA(),t.TgZ(73,"button",13),t.NdJ("click",function(){return e.verificar("w")}),t._uU(74,"W"),t.qZA(),t.qZA(),t.TgZ(75,"div",1),t.TgZ(76,"button",13),t.NdJ("click",function(){return e.verificar("x")}),t._uU(77,"X"),t.qZA(),t.TgZ(78,"button",13),t.NdJ("click",function(){return e.verificar("y")}),t._uU(79,"Y"),t.qZA(),t.TgZ(80,"button",13),t.NdJ("click",function(){return e.verificar("z")}),t._uU(81,"Z"),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.TgZ(82,"div",6),t.TgZ(83,"div",7),t.TgZ(84,"div",15),t.TgZ(85,"h4",9),t._uU(86,"HISTORIAL"),t.qZA(),t.TgZ(87,"div",10),t._UZ(88,"span",11),t.qZA(),t.qZA(),t.TgZ(89,"div",12),t._uU(90," ACA VA EL HISTORIAL "),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA()),2&i&&(t.xp6(7),t.Q6J("ngModel",e.letra),t.xp6(2),t.Oqu(e.guiones),t.xp6(2),t.s9C("src",e.imagen,t.LSH))},directives:[l.Fj,l.nD,l.JJ,l.On],styles:[""]}),n})()},{path:"mayormenor",component:(()=>{class n{constructor(i,e){this.afAuth=i,this.router=e,this.cartas=[1,2,3,4,5,6,7,8,9,10,11,12],this.imgCartas=[["./../../../assets/img/mm/1_bastos.jpg","./../../../assets/img/mm/1_copas.jpg","./../../../assets/img/mm/1_espadas.jpg","./../../../assets/img/mm/1_oros.jpg"],["./../../../assets/img/mm/2_bastos.jpg","./../../../assets/img/mm/2_copas.jpg","./../../../assets/img/mm/2_espadas.jpg","./../../../assets/img/mm/2_oros.jpg"],["./../../../assets/img/mm/3_bastos.jpg","./../../../assets/img/mm/3_copas.jpg","./../../../assets/img/mm/3_espadas.jpg","./../../../assets/img/mm/3_oros.jpg"],["./../../../assets/img/mm/4_bastos.jpg","./../../../assets/img/mm/4_copas.jpg","./../../../assets/img/mm/4_espadas.jpg","./../../../assets/img/mm/4_oros.jpg"],["./../../../assets/img/mm/5_bastos.jpg","./../../../assets/img/mm/5_copas.jpg","./../../../assets/img/mm/5_espadas.jpg","./../../../assets/img/mm/5_oros.jpg"],["./../../../assets/img/mm/6_bastos.jpg","./../../../assets/img/mm/6_copas.jpg","./../../../assets/img/mm/6_espadas.jpg","./../../../assets/img/mm/6_oros.jpg"],["./../../../assets/img/mm/7_bastos.jpg","./../../../assets/img/mm/7_copas.jpg","./../../../assets/img/mm/7_espadas.jpg","./../../../assets/img/mm/7_oros.jpg"],["./../../../assets/img/mm/8_bastos.jpg","./../../../assets/img/mm/8_copas.jpg","./../../../assets/img/mm/8_espadas.jpg","./../../../assets/img/mm/8_oros.jpg"],["./../../../assets/img/mm/9_bastos.jpg","./../../../assets/img/mm/9_copas.jpg","./../../../assets/img/mm/9_espadas.jpg","./../../../assets/img/mm/9_oros.jpg"],["./../../../assets/img/mm/10_bastos.jpg","./../../../assets/img/mm/10_copas.jpg","./../../../assets/img/mm/10_espadas.jpg","./../../../assets/img/mm/10_oros.jpg"],["./../../../assets/img/mm/11_bastos.jpg","./../../../assets/img/mm/11_copas.jpg","./../../../assets/img/mm/11_espadas.jpg","./../../../assets/img/mm/11_oros.jpg"],["./../../../assets/img/mm/12_bastos.jpg","./../../../assets/img/mm/12_copas.jpg","./../../../assets/img/mm/12_espadas.jpg","./../../../assets/img/mm/12_oros.jpg"]],this.cartaActual=Math.floor(Math.random()*this.cartas.length),this.imgActual=this.imgCartas[this.cartaActual][Math.floor(4*Math.random())],this.flag=!1}ngOnInit(){var i=this;return(0,g.Z)(function*(){i.imgJugador=null,i.user=yield i.afAuth.onAuthStateChanged(e=>{e||(a().fire({position:"top-end",icon:"warning",title:"Ingresa tu usuario",showConfirmButton:!1,timer:1500}),i.router.navigate(["/login"]))})})()}mayor(){this.nuevaCarta(),this.flag=!0,this.numJugador>this.cartaActual&&a().fire({position:"top-end",icon:"success",title:"GANASTE",showConfirmButton:!1,timer:1500}),this.numJugador<this.cartaActual&&a().fire({position:"top-end",icon:"warning",title:"PERDISTE",showConfirmButton:!1,timer:1500}),this.numJugador==this.cartaActual&&a().fire({position:"top-end",icon:"info",title:"EMPATE",showConfirmButton:!1,timer:1500}),setTimeout(()=>{this.cartaActual=Math.floor(Math.random()*this.cartas.length),this.imgActual=this.imgCartas[this.cartaActual][Math.floor(4*Math.random())],this.flag=!1},2e3)}menor(){this.nuevaCarta(),this.flag=!0,this.numJugador>this.cartaActual&&a().fire({position:"top-end",icon:"warning",title:"PERDISTE",showConfirmButton:!1,timer:1500}),this.numJugador<this.cartaActual&&a().fire({position:"top-end",icon:"success",title:"GANASTE",showConfirmButton:!1,timer:1500}),this.numJugador==this.cartaActual&&a().fire({position:"top-end",icon:"info",title:"EMPATE",showConfirmButton:!1,timer:1500}),setTimeout(()=>{this.cartaActual=Math.floor(Math.random()*this.cartas.length),this.imgActual=this.imgCartas[this.cartaActual][Math.floor(4*Math.random())],this.flag=!1},2e3)}nuevaCarta(){this.numJugador=Math.floor(Math.random()*this.cartas.length),this.imgJugador=this.imgCartas[this.numJugador][Math.floor(4*Math.random())]}}return n.\u0275fac=function(i){return new(i||n)(t.Y36(m.zQ),t.Y36(u.F0))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-mayormenor"]],decls:29,vars:2,consts:[[1,"container"],[1,"row"],[1,"col-12"],[1,"text-center"],[1,"card"],[1,"card-header","bg-info"],[1,"card-body","text-center"],["alt","",2,"width","350px","height","350px",3,"src"],["alt","","style","width: 350px; height: 350px;",3,"src",4,"ngIf"],[1,"row","text-center","m-auto"],["type","button",1,"btn","btn-danger","m-3","col-lg-5","col-md-5","col-xs-5",3,"click"],["type","button",1,"btn","btn-success","m-3","col-lg-5","col-md-5","col-xs-5",3,"click"],[1,"card-header","bg-gradient"],[1,"input-group","input-group-sm","row"],["id","resultado",1,"input-group-addon","col-lg-12"]],template:function(i,e){1&i&&(t.TgZ(0,"div",0),t.TgZ(1,"div",1),t.TgZ(2,"div",2),t.TgZ(3,"h1",3),t._uU(4,"Juego Mayor y Menor"),t.qZA(),t.TgZ(5,"p",3),t._uU(6,"Elegi si es mayor o menor, y apreta el BOTON"),t.qZA(),t.TgZ(7,"div",4),t.TgZ(8,"div",5),t.TgZ(9,"h4",3),t._uU(10,"La carta actual es:"),t.qZA(),t.qZA(),t.TgZ(11,"div",6),t._UZ(12,"img",7),t.YNc(13,A,1,1,"img",8),t.TgZ(14,"div",9),t.TgZ(15,"button",10),t.NdJ("click",function(){return e.mayor()}),t._uU(16,"Mayor"),t.qZA(),t.TgZ(17,"button",11),t.NdJ("click",function(){return e.menor()}),t._uU(18,"Menor"),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.TgZ(19,"div",2),t.TgZ(20,"div",4),t.TgZ(21,"div",12),t.TgZ(22,"h4",3),t._uU(23,"HISTORIAL"),t.qZA(),t.TgZ(24,"div",13),t._UZ(25,"span",14),t.qZA(),t.qZA(),t.TgZ(26,"div",6),t.TgZ(27,"h4"),t._uU(28,"GANADAS: 0 \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 PERDIDAS: 0"),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA()),2&i&&(t.xp6(12),t.s9C("src",e.imgActual,t.LSH),t.xp6(1),t.Q6J("ngIf",e.flag))},directives:[c.O5],styles:[""]}),n})()},{path:"preguntados",component:(()=>{class n{constructor(){this.base_preguntasJason=[{categoria:"Arte y literatura",pregunta:"\xbfQui\xe9n pint\xf3 la mona lisa?",respuesta:"Leonardo da Vinci",incorrecta1:"Picasso",incorrecta2:"Miguel \xc1ngel",incorrecta3:"Monet",imagen:"https://i.ibb.co/9cjvmw1/mona-lisa.jpg",objectFit:"cover"},{categoria:"Arte y literatura",pregunta:'Pintor de  "El jard\xedn de las delicias"',respuesta:"El Bosco",incorrecta1:"Vel\xe1squez",incorrecta2:"Picasso",incorrecta3:"Dal\xed\r",imagen:"https://i.ibb.co/SDjX7PM/jardin-de-las-delicias.jpg",objectFit:"cover"},{categoria:"Arte y literatura",pregunta:'significado de  "El jard\xedn de las delicias"',respuesta:"Mundo Terrenal",incorrecta1:"Es Mejor Morir",incorrecta2:"Dios Es El Camino",incorrecta3:"Ad\xe1n Y Eva\r",imagen:"https://i.ibb.co/SDjX7PM/jardin-de-las-delicias.jpg",objectFit:"cover"},{categoria:"Arte y literatura",pregunta:"Ciudad fetiche del escritor Paul Auster",respuesta:"Nueva York",incorrecta1:"Par\xeds",incorrecta2:"\xc1msterdam",incorrecta3:"Bogot\xe1\r",imagen:"https://i.ibb.co/zfM2Vyd/paul-auster.jpg",objectFit:"cover"}],this.pregunta="",this.categoria="",this.respuesta="",this.incorrecta1="",this.incorrecta2="",this.incorrecta3="",this.imagen="",this.objectFit="",this.opcion1="",this.opcion2="",this.opcion3="",this.opcion4="",this.style={background:""},this.npreguntas=[],this.posibles_respuestas=[],this.suspender_botones=!1,this.preguntas_hechas=0,this.preguntas_correctas=0,this.preguntas_incorrectas=0}ngOnInit(){this.escogerPreguntaAleatoria()}elegirPregunta(i){const{categoria:e,pregunta:o,respuesta:p,incorrecta1:v,incorrecta2:C,incorrecta3:q,imagen:y,objectFit:j}=this.base_preguntasJason[i];this.categoria=e,this.pregunta=o,this.respuesta=p,this.incorrecta1=v,this.incorrecta2=C,this.incorrecta3=q,this.imagen=y,this.objectFit=j}escogerPreguntaAleatoria(){const i=Math.floor(Math.random()*this.base_preguntasJason.length);this.elegirPregunta(i),this.desordenarRespuestas()}select_id(i){return document.getElementById(i)}desordenarRespuestas(){this.posibles_respuestas=[this.respuesta,this.incorrecta1,this.incorrecta2,this.incorrecta3],this.posibles_respuestas.sort(()=>Math.random()-.5),this.opcion1=this.posibles_respuestas[0],this.opcion2=this.posibles_respuestas[1],this.opcion3=this.posibles_respuestas[2],this.opcion4=this.posibles_respuestas[3]}oprimirBtn(i){this.posibles_respuestas[i]==this.respuesta?(a().fire({icon:"success",title:"CORRECTO",showConfirmButton:!1,timer:1500}),this.escogerPreguntaAleatoria()):(a().fire({icon:"warning",title:"INCORRECTO",showConfirmButton:!1,timer:1500}),this.escogerPreguntaAleatoria())}}return n.\u0275fac=function(i){return new(i||n)},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-preguntados"]],decls:30,vars:11,consts:[[1,"container"],[1,"row"],[1,"col-12"],[1,"text-center"],[1,"card","text-center"],[1,"card-header","bg-info"],[1,"card-body","text-center"],["alt","","style","width: 100%; height: 20vh; object-fit:cover;",3,"src",4,"ngIf"],[1,"row","text-center","m-2"],["id","btn1","type","button",1,"btn","btn-outline-primary","m-1","col-lg-12","col-md-12","col-xs-12",3,"ngStyle","click"],["id","btn2","type","button",1,"btn","btn-outline-primary","m-1","col-lg-12","col-md-12","col-xs-12",3,"ngStyle","click"],["id","btn3","type","button",1,"btn","btn-outline-primary","m-1","col-lg-12","col-md-12","col-xs-12",3,"ngStyle","click"],["id","btn4","type","button",1,"btn","btn-outline-primary","m-1","col-lg-12","col-md-12","col-xs-12",3,"ngStyle","click"],[1,"col-12","mt-2"],[1,"card"],[1,"card-header","bg-gradient"],[1,"input-group","input-group-sm","row"],["id","resultado",1,"input-group-addon","col-lg-12"],["alt","",2,"width","100%","height","20vh","object-fit","cover",3,"src"]],template:function(i,e){1&i&&(t.TgZ(0,"div",0),t.TgZ(1,"div",1),t.TgZ(2,"div",2),t.TgZ(3,"h1",3),t._uU(4),t.qZA(),t.TgZ(5,"div",4),t.TgZ(6,"div",5),t.TgZ(7,"h4",3),t._uU(8),t.qZA(),t.qZA(),t.TgZ(9,"div",6),t.YNc(10,f,1,1,"img",7),t.TgZ(11,"div",8),t.TgZ(12,"button",9),t.NdJ("click",function(){return e.oprimirBtn(0)}),t._uU(13),t.qZA(),t.TgZ(14,"button",10),t.NdJ("click",function(){return e.oprimirBtn(1)}),t._uU(15),t.qZA(),t.TgZ(16,"button",11),t.NdJ("click",function(){return e.oprimirBtn(2)}),t._uU(17),t.qZA(),t.TgZ(18,"button",12),t.NdJ("click",function(){return e.oprimirBtn(3)}),t._uU(19),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.TgZ(20,"div",13),t.TgZ(21,"div",14),t.TgZ(22,"div",15),t.TgZ(23,"h4",3),t._uU(24,"HISTORIAL"),t.qZA(),t.TgZ(25,"div",16),t._UZ(26,"span",17),t.qZA(),t.qZA(),t.TgZ(27,"div",6),t.TgZ(28,"h4"),t._uU(29,"GANADAS: 0 \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 PERDIDAS: 0"),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA()),2&i&&(t.xp6(4),t.hij("Categoria: ",e.categoria,""),t.xp6(4),t.hij("Pregunta: ",e.pregunta,""),t.xp6(2),t.Q6J("ngIf",e.imagen),t.xp6(2),t.Q6J("ngStyle",e.style),t.xp6(1),t.Oqu(e.opcion1),t.xp6(1),t.Q6J("ngStyle",e.style),t.xp6(1),t.Oqu(e.opcion2),t.xp6(1),t.Q6J("ngStyle",e.style),t.xp6(1),t.Oqu(e.opcion3),t.xp6(1),t.Q6J("ngStyle",e.style),t.xp6(1),t.Oqu(e.opcion4))},directives:[c.O5,c.PC],styles:[".container[_ngcontent-%COMP%]{height:100vh;width:100vw;background:slategray}button[_ngcontent-%COMP%]{padding:15px 80px;text-align:center;display:inline-block;box-shadow:0 10px 30px #2f4c5a66;border-radius:5px;border-color:#888;margin:5px 20px 40px;transition:all .3s ease-in-out}button[_ngcontent-%COMP%]:hover{background:orange;border-color:#b3b3b3}"]}),n})()},{path:"mijuego",component:(()=>{class n{constructor(i,e){this.afAuth=i,this.router=e,this.style={width:"100%",height:"500px",border:"10px dashed #aa4",background:"#ffb"},this.stylePLayer={position:"absolute",background:"#900",border:"4px dashed #b22",borderRadius:"25px",width:"50px",height:"50px",transition:"All 0.3s",marginTop:"",marginLeft:""},this.puntos=0,this.tiempo=30,this.necesario=30}ngOnInit(){var i=this;return(0,g.Z)(function*(){i.user=yield i.afAuth.onAuthStateChanged(e=>{e||(a().fire({position:"top-end",icon:"warning",title:"Ingresa tu usuario",showConfirmButton:!1,timer:1500}),i.router.navigate(["/login"]))}),i.iniciar()})()}iniciar(){setInterval(()=>{this.restarTiempo()},1e3)}sumarPuntos(){this.puntos++,this.stylePLayer.marginTop=Math.round(420*Math.random())+"px",this.stylePLayer.marginLeft=Math.round(1e3*Math.random())+"px",this.puntos==this.necesario&&(a().fire({position:"top",title:"GANASTE",text:"Queres intentar otra vez?",icon:"success",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Volver a jugar"}).then(i=>{i.isConfirmed?this.reiniciar():this.router.navigate(["/home"])}),this.reiniciar())}restarTiempo(){this.tiempo--,0==this.tiempo&&(a().fire({position:"top",title:"PERDISTE",text:"Queres intentar otra vez?",icon:"error",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Volver a jugar"}).then(i=>{i.isConfirmed?this.reiniciar():this.router.navigate(["/home"])}),this.reiniciar())}reiniciar(){this.tiempo=30,this.puntos=0}}return n.\u0275fac=function(i){return new(i||n)(t.Y36(m.zQ),t.Y36(u.F0))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-mijuego"]],decls:19,vars:5,consts:[[1,"text-center"],[1,"card-header","bg-info"],[3,"ngStyle"],[3,"ngStyle","mouseover"],[1,"container"],[1,"row"],[1,"col-12","mt-2"],[1,"card"],[1,"card-header","bg-gradient"],[1,"input-group","input-group-sm","row"],["id","resultado",1,"input-group-addon","col-lg-12"],[1,"card-body","text-center"]],template:function(i,e){1&i&&(t.TgZ(0,"h1",0),t._uU(1,"Mi Juego"),t.qZA(),t.TgZ(2,"div",1),t.TgZ(3,"h4",0),t._uU(4),t.qZA(),t.qZA(),t.TgZ(5,"div",2),t.TgZ(6,"div",3),t.NdJ("mouseover",function(){return e.sumarPuntos()}),t.qZA(),t.qZA(),t.TgZ(7,"div",4),t.TgZ(8,"div",5),t.TgZ(9,"div",6),t.TgZ(10,"div",7),t.TgZ(11,"div",8),t.TgZ(12,"h4",0),t._uU(13,"HISTORIAL"),t.qZA(),t.TgZ(14,"div",9),t._UZ(15,"span",10),t.qZA(),t.qZA(),t.TgZ(16,"div",11),t.TgZ(17,"h4"),t._uU(18,"GANADAS: 0 \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 PERDIDAS: 0"),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA()),2&i&&(t.xp6(4),t.lnq("puntos:",e.puntos," / ",e.necesario," \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 Tiempo: ",e.tiempo," "),t.xp6(1),t.Q6J("ngStyle",e.style),t.xp6(1),t.Q6J("ngStyle",e.stylePLayer))},directives:[c.PC],styles:[""]}),n})()}];let b=(()=>{class n{}return n.\u0275fac=function(i){return new(i||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[[u.Bz.forChild(T),c.ez]]}),n})()}}]);