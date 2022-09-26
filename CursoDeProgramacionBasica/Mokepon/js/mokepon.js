function actionPetButton(){// creo la funcion
    let inputHipodoge=document.getElementById("Hipodoge")
    let inputCapipepo=document.getElementById("Capipepo")
    let inputRatigueya=document.getElementById("Ratigueya")
    let inputLangostelvis=document.getElementById("Langostelvis")
    let inputPydos=document.getElementById("Pydos")
    let spanMascotaPlayer=document.getElementById("Pet-Player")
    if(inputHipodoge.checked){// con el getElementById capturo un id de mi documento html y lo comparo, si es asi funcionara alguna de las condicionales 
        spanMascotaPlayer.innerHTML="Hipodoge"
    }else if (inputCapipepo.checked){
        spanMascotaPlayer.innerHTML="Capipepo"
    }else if(inputRatigueya.checked){
        spanMascotaPlayer.innerHTML="Ratigueya"
    }else if(inputLangostelvis.checked){
        spanMascotaPlayer.innerHTML="Langostelvis"
    }else if(inputPydos.checked){
        spanMascotaPlayer.innerHTML="Pydos"
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