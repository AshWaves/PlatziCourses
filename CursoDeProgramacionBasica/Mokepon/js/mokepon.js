let attackPlayer
let attackEnemi
let desicionWin
let livesPlayer=3
let livesEnemi=3

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

function comparationAttacks(){
    let spanLivesEnemi=document.getElementById("lives-enemi")
    let spanLivesPlayer=document.getElementById("lives-player")
    if(attackPlayer==attackEnemi){
        desicionWin="Esto es un empate"
    }else if (attackPlayer=="Water"&& attackEnemi=="Fire"){
        desicionWin="Felicitaciones ganastes"
        livesEnemi=livesEnemi-1
        spanLivesEnemi.innerHTML=livesEnemi
    }else if(attackPlayer=="Fire"&& attackEnemi=="Water"){
        desicionWin="Losiento perdistes"
        livesPlayer=livesPlayer-1
        spanLivesPlayer.innerHTML=livesPlayer
    }else if(attackPlayer=="Fire"&& attackEnemi=="Earth"){
        desicionWin="Felicitaciones ganastes"
        livesEnemi=livesEnemi-1
        spanLivesEnemi.innerHTML=livesEnemi
    }else if(attackPlayer=="Earth"&& attackEnemi=="Fire"){
        desicionWin="Losiento perdistes"
        livesPlayer=livesPlayer-1
        spanLivesPlayer.innerHTML=livesPlayer
    }else if(attackPlayer=="Earth"&& attackEnemi=="Water"){
        desicionWin="Felicitaciones ganastes"
        livesEnemi=livesEnemi-1
        spanLivesEnemi.innerHTML=livesEnemi
    }else if(attackPlayer=="Water"&&attackEnemi=="Earth"){
        desicionWin="Losiento perdistes"
        livesPlayer=livesPlayer-1
        spanLivesPlayer.innerHTML=livesPlayer
    }
}

function randomAttackEnemi(){
    let spanAttackEnemi=document.getElementById("Attack-Enemi")
    let selectAttack=randomAttackAndPet(1,3)
    if(selectAttack==1){
        attackEnemi="Fire"
    }else if(selectAttack==2){
        attackEnemi="Water"
    }else if(selectPet==3){
        attackEnemi="Earht"
    }
    comparationAttacks()
    createMessage()
}
function createMessage(){
    let sectionMessage=document.getElementById("mensaje")
    let paragraph=document.createElement("p")
    paragraph.innerHTML="Tu moscota ataco con " +attackPlayer+" la mascota enemigo ataco con "+attackEnemi+" La desicion es "+desicionWin
    sectionMessage.appendChild(paragraph)
}



function randomAttackAndPet(min,max){
    return Math.floor(Math.random()*(max-min+1)+min)
}

function attackFire(){
    attackPlayer="Fire"
    randomAttackEnemi()
}
function attackWater(){
    attackPlayer="Water"
    randomAttackEnemi()
}
function attackEarth(){
    attackPlayer="Earth"
    randomAttackEnemi()
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
    let buttonFire=document.getElementById("Attack-Fire")
    let buttonWater=document.getElementById("Attack-Water")
    let buttonEarth=document.getElementById("Attack-Earth")
    buttonFire.addEventListener("click",attackFire)
    buttonWater.addEventListener("click",attackWater)
    buttonEarth.addEventListener("click",attackEarth)

}

window.addEventListener("load",starGame)

