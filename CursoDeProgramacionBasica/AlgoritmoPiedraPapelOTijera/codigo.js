//1 es piedra, 2 es papel y 3 es tijera
let jugador=0
let minRange=1
let maxRange=3
//con Math.floor obtengo un numero redondeado sin decimales
//con Math.random genero un numero aletorio entre 3 y 1 
let computador= Math.floor((Math.random() * (3 - 1 + 1)) + 1);
//con el ciclo do while creo un bucle que me permite iniciarlo una vez siempre y finlizarlo con la condicion de parada que es 0 
do{//inicio del ciclo
        jugador= prompt("Elije : 1 Piedra, 2 Papel, 3 Tijera, 0 SALIR")
        alert("Has elegido:  "+jugador);
    if(jugador == computador){
        alert("Esto es un empate")
    }else if(jugador==1 && computador==3){
        alert("Ganastes piedra gana a tijera")
    }else if(jugador==3 && computador==1){
        alert("Perdiste piedra gana a tijera")
    }else if(jugador==2 && computador==1){
        alert("Ganastes papel gana a piedra")
    }else if(jugador==1 && computador==2 ){
        alert("Perdistes papel gana a piedra")
    }else if(jugador ==3 && computador==2){
        alert("Ganastes tijera gana a papel")
    }else if(jugador==2 && computador==3){
        alert("Perdistes tijera gana a papel")
    }else if (jugador==0){
        alert("Adios graicas por jugar")
    }else{
        alert("Losiento opcion incorrecta vuleve a intentar")
    }
}while(jugador!=0)//condicion de parada 
