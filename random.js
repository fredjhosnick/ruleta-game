let numberInput = document.getElementById("numberInput");
let button = document.getElementById("btn");
let numberRandom = document.getElementById("numberRandom");
let numberInputValue = document.getElementById("numberInputValue");
let meinePunkte = document.getElementById("kontostand");
let buttogerade = document.getElementById("gerade");
let buttonUngerade = document.getElementById("ungerade");
let inputmoney = document.getElementById("einsatz");
let btn5 = document.getElementById("btn5");
let btn10 = document.getElementById("btn10");
let btn20 = document.getElementById("btn20");
let btn100 = document.getElementById("btn100");
let multiPlay = document.getElementById("multiPlay");


let kontoStand = 500;

button.addEventListener("click", ()=>{
    let spielerZahl = numberInput.value;
let randomNumer = Math.round(Math.random()*36)
    numberRandom.innerHTML = randomNumer;

    inputmoney.value;

  
    if(randomNumer == spielerZahl){  
           
        kontoStand += inputmoney.value*36;
        document.getElementById("win").innerHTML = "Du hast gewonen😁";
        document.getElementById("win").style.color="green";
        
    } else{
        

    document.getElementById("win").innerHTML = "Du hast verloren☹️";
    document.getElementById("win").style.color="red";
    kontoStand -= inputmoney.value;
    }   
    meinePunkte.innerHTML = kontoStand;
    if(kontoStand <= 0){

        meinePunkte.innerHTML = "Du hast kein Geld " +"<br>" + "😩😬😵‍💫☹️";

    }
})

numberInput.addEventListener("keyup",()=>{
    numberInputValue.innerHTML = numberInput.value;
});

buttogerade.addEventListener("click", ()=>{
    
    let gerade = Math.round((Math.random()*36));
    numberRandom.innerHTML = gerade ;

    inputmoney.value;
    if(gerade % 2 == 0){
           kontoStand += inputmoney.value*36;
           document.getElementById("win").innerHTML = "Du hast gewonen😁";
        document.getElementById("win").style.color="green";
      
    }else{
        kontoStand -= inputmoney.value;
        document.getElementById("win").innerHTML = "Du hast verloren☹️";
        document.getElementById("win").style.color="red";
    }
    meinePunkte.innerHTML = kontoStand;
    if(kontoStand <=0){
        meinePunkte.innerHTML = "You don't  have  money" +"<br>" + "😩😬😵‍💫☹️🥴";
    }
});

buttonUngerade.addEventListener("click", ()=>{
    let ungerade =Math.round((Math.random()*36)); 
    numberRandom.innerHTML = ungerade ;
    inputmoney.value;
    if(ungerade % 2 != 0){
        kontoStand += inputmoney.value*36;
        document.getElementById("win").innerHTML = "Du hast gewonen😁";

        document.getElementById("win").style.color="green";
    }else{
        kontoStand -= inputmoney.value;
        document.getElementById("win").innerHTML = "Du hast verloren☹️";
        document.getElementById("win").style.color="red";
       
    }
    meinePunkte.innerHTML = kontoStand;
    if(kontoStand <=0){
        meinePunkte.innerHTML = "You don't  have  money" +"<br>" + "😩😬😵‍💫☹️🥴";
    }
});

btn5.addEventListener("click", ()=>{

    for(let i = 0; i < 5 ; i++){

        let randomMultiplayNummer = Math.round(Math.random()*36);

        multiPlay.innerHTML += randomMultiplayNummer +", ";

    }


});
btn10.addEventListener("click", ()=>{

    for(let i = 0; i < 10 ; i++){

        let randomMultiplayNummer = Math.round(Math.random()*36);

        multiPlay.innerHTML += randomMultiplayNummer + ",  ";

    }


})
btn20.addEventListener("click", ()=>{
    for(let i = 0; i < 20 ; i++){

        let randomMultiplayNummer = Math.round(Math.random()*36);

        multiPlay.innerHTML += randomMultiplayNummer + ",";

    }


});

btn100.addEventListener("click", ()=>{

    for(let i = 0; i < 100 ; i++){

        let randomMultiplayNummer = Math.round(Math.random()*36);

        multiPlay.innerHTML += randomMultiplayNummer + "," ;

    }


});







