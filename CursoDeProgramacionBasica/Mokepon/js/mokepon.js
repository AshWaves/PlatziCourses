let attackPlayer
let attackEnemi

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
    let selectPet=randomAttackAndPet(1,5)
    if(selectPet==1){
        spanEnemi.innerHTML="Hipodoge"
        //attackEnemi="Water"
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
function randomAttackAndPet(min,max){
    return Math.floor(Math.random()*(max-min+1)+min)
}

function attackFire(){
    attackPlayer="Fire"
    alert(attackPlayer)
}
function attackWater(){
    attackPlayer="Water"
    alert(attackPlayer)
}
function attackEarth(){
    attackPlayer="Earth"
    alert(attackPlayer)
}
function CombinationAttackFireAndWater(){
    attackFire
    attackWater
}
function combinationAttackEarhtAndFire(){
    attackEarth
    attackFire
}
function starGame(){
    let StarButton=document.getElementById("button-pet")
    StarButton.addEventListener("click",selectPet)
    let buttonFire=document.getElementById("button-fire")
    let buttonWater=document.getElementById("button-water")
    let buttonEarth=document.getElementById("button-earth")
    buttonFire.addEventListener("click",attackFire)
    buttonWater.addEventListener("click",attackWater)
    buttonEarth.addEventListener("click",attackEarth)

}

window.addEventListener("load",starGame)

