function actionPetButton(){// creo la funcion
    let inputHIipodoge=document.getElementById("Hipodoge")
    let inputCapipepo=document.getElementById("Capipepo")
    let inputRatigueya=document.getElementById("Ratigueya")
    let inputLangostelvis=document.getElementById("Langostelvis")
    let inputPydos=document.getElementById("Pydos")
    if(inputHIipodoge.checked){// con el getElementById capturo un id de mi documento html y lo comparo, si es asi funcionara alguna de las condicionales 
        alert("Has seleccionado a hipodoge")
    }else if (inputCapipepo.checked){
        alert("Has seleccionado a Capipepo")
    }else if(inputRatigueya.checked){
        alert("Has seleccionado a Ratigueya")
    }else if(inputLangostelvis.checked){
        alert("Has seleccionado a Langostelvis")
    }else if(inputPydos.checked){
        alert("Has seleccionado a Pydos")
    }else{
        alert("Debes seleccionar un Mokepon")
    }
}
function startGame(){
    let selecPetButton=document.getElementById("button-pet");// capturo un id de mi documento html
    selecPetButton.addEventListener("click",actionPetButton);//escuha el evento y crea la accion de ese evento
}
//añado el window para que escuche cuando mi pagina carga por completo y inicia la funcion star game
window.addEventListener("load",startGame)