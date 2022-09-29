function selectPet(){
    let petSelectionHipodoge=document.getElementById("Hipodoge")
    let petSelectionCapipepo=document.getElementById("Capipepo")
    let petSelectionRatigueya=document.getElementById("Ratigueya")
    let petSelectionLangostelvis=document.getElementById("Langostelvis")
    let petSelectionPydos=document.getElementById("Pydos")
    let spanPlayerPet=document.getElementById("Pet-Player")
    if(petSelectionHipodoge.checked){
        spanPlayerPet.innerHTML="Hipodoge"
    }else if(petSelectionCapipepo.checked){
        spanPlayerPet.innerHTML="Capipepo"
    }else if(petSelectionRatigueya.checked){
        spanPlayerPet.innerHTML="Ratigueya"
    }else if(petSelectionLangostelvis.checked){
        spanPlayerPet.innerHTML="Langostelvis"
    }else if(petSelectionPydos.checked){
        spanPlayerPet.innerHTML="Pydos"
    }else{
        alert("Debes de seleccionar una mascota")
    }
    petEnemi()   
}
function petEnemi(){
    let spanEnemi=document.getElementById("Pet-Enemi")
    let selectPet=randomPet(1,3)
    if(selectPet==1){
        spanEnemi.innerHTML="Hipodoge"
    }else if(selectPet==2){
        spanEnemi.innerHTML="Capipepo"
    }else if(selectPet==3){
        spanEnemi.innerHTML="Ratigueya"
    }else if(selectPet==4){
        spanEnemi.innerHTML="Langostelvis"
    }else if(selectPet==5){
        spanEnemi.innerHTML="Pydos"
    }
}
function randomPet(min,max){
    return Math.floor(Math.random()*(max-min+1)+min)
}
function starGame(){
    let StarButton=document.getElementById("button-pet")
    StarButton.addEventListener("click",selectPet)
}

window.addEventListener("load",starGame)

        let spanEnemi=document.getElementById("Pet-Enemi")
