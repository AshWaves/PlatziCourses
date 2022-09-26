function actionPetButton(){// creo la funcion
    if(document.getElementById("Hipodoge")){// con el getElementById capturo un id de mi documento html y lo comparo, si es asi funcionara alguna de las condicionales
        alert("Has seleccionado a hipoge")
    }else if (document.getElementById("Capipepo")){
        alert("Has seleccionado a Capipepo")
    }else if(document.getElementById("Ratigueya")){
        alert("Has seleccionado a Ratigueya")
    }else if(document.getElementById("Langostelvis")){
        alert("Has seleccionado a Langostelvis")
    }else if(document.getElementById("Pydos")){
        alert("Has seleccionado a Pydos")
    }
}
function startGame(){
    let selecPetButton=document.getElementById("button-pet");// capturo un id de mi documento html
    selecPetButton.addEventListener("click",actionPetButton);//escuha el evento y crea la accion de ese evento
}
//añado el window para que escuche cuando mi pagina carga por completo y inicia la funcion star game
window.addEventListener("load",startGame)