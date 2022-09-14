
let consumible = false;
let nombreMochilaPuesto= false;
let eleccionPrim;
let nombrePuesto=false;
let apellidoPuesto=false;
let edadPuesta=false;
botellaDeAgua = {
    nombre: "BOTELLA DE AGUA",
    consumible: true
}
LataDeAtun = {
    nombre: "LATA DE ATUN",
    consumible: true
}
lataDeFrutas = {
    nombre: "LATA DE FRUTAS",
    consumible: true
}
pan = {
    nombre: "PAN",
    consumible: true
}
navaja = {
    nombre: "NAVAJA",
    consumible: false
}
encendedor = {
    nombre: "ENCENDEDOR",
    consumible: false
}
cuencoDeMetal = {
    nombre: "CUENCO DE METAL",
    consumible: false
}

lanzaBengalas = {
    nombre: "LANZA BENGALAS",
    consumible: false
}

martillo = {
    nombre: "MARTILLO",
    consumible: false
}

cubiertos = {
    nombre: "CUBIERTOS",
    consumible: false
}

let contenidoDeMochila = [botellaDeAgua, LataDeAtun, lataDeFrutas, pan, navaja, encendedor, cuencoDeMetal, lanzaBengalas, martillo, cubiertos];


function Humano(nombre, apellido, salud, edad){

    this.nombre = nombre,
    this.apellido = apellido,
    salud = 100,
    this.edad = edad

}

function mostrarContenido(){
    


}

function eliminarContenido(e){
    const o = contenidoDeMochila.find(elemento => {
        return elemento.nombre == e;
    } );
    
    let el = contenidoDeMochila.indexOf(o);

    if (el >= 0){
        contenidoDeMochila.splice(el, 1);
    }
    alert("Elemento "+ o.nombre +" fue eliminado");
}

alert("hola, bienvenida/o soy tu mochila inteligente. me crearon para ayudar a los sobrevivientes a llegar al refugio");

do{
    let nombreMochila = prompt("¿Que nombre queres ponerme?: ");
if(nombreMochila == ""){
 alert("ESE NO ES UN NOMBRE :(")
}else {
    alert("Gracias! el nombre "+nombreMochila+" me encanta :D");
    nombreMochilaPuesto = true;
} 
}while(nombreMochilaPuesto == false)

let humano = new Humano();

while(nombrePuesto == false){
let preguntaNombre = prompt("Cual es tu nombre?");
if(preguntaNombre == ""){
    alert("nombre no valido");
}else{
    alert("Nombre: "+preguntaNombre)
    nombrePuesto = true;
    humano.nombre = preguntaNombre;
}
}

while(apellidoPuesto == false){
    let preguntaApellido = prompt("cual es tu appellido? ");
    if(preguntaApellido == ""){
        alert("Apellido no valido");
    }else{
        alert("Apellido: "+preguntaApellido)
        apellidoPuesto = true;
        humano.apellido = preguntaApellido;
    }
}

while(edadPuesta == false){
    let preguntaEdad = prompt("Cuantos años tenes?");
    if(preguntaEdad == ""){
        alert("Edad no valida");
    }else{
        alert("Edad: "+preguntaEdad)
        edadPuesta = true;
        humano.edad = preguntaEdad;
    }
}

let tirarMochila = prompt("Gracias por la informacion, estoy obligada a darte elegir si queres dejarme aca o llevarme con vos \n1. si queres llevarme \n2. si queres dejarme");

if(tirarMochila == 1){
    
    while(tirarMochila == 1){
        eleccionPrim = prompt("tengo varias opciones que podes elegir, que queres hacer?: \n1. Ver contenido de la mochila \n2. tirar algo de la mochila \n3. consumir algo de la mochila \n4. tirar mochila ");
        switch(eleccionPrim){
            case "1":
                for (let bar of contenidoDeMochila){
                    alert(bar.nombre);
                   };
                break;
            case "2":
                let elementoAEliminar = prompt("¿que objeto queres tirar de la mochila?");
                eliminarContenido(elementoAEliminar.toUpperCase());
                break;
            case "3":
                let comer = prompt("Que quieres consumir? ").toUpperCase();
                for (sic of contenidoDeMochila){
                if(sic.nombre == comer && sic.consumible == true){
                    eliminarContenido(comer.toUpperCase());
                    alert("consumiste: "+comer);
                 }
                } 
                break;
                case "4":
                    tirarMochila = 2;
                    break;
                default:
                  alert("error, vuelva a intentar");
              
        }
    }
}

if(tirarMochila == 2){
    alert("Hasta luego! buen viaje");
}


