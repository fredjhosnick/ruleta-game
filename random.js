let numberInput = document.getElementById("numberInput");
let button = document.getElementById("btn");
let numberRandom = document.getElementById("numberRandom");
let numberInputValue = document.getElementById("numberInputValue");
let meinePunkte = document.getElementById("kontostand");
let buttogerade = document.getElementById("gerade");
let buttonUngerade = document.getElementById("ungerade");
let inputmoney = document.getElementById("einsatz");

let kontoStand = 500;

button.addEventListener("click", ()=>{
    let spielerZahl = numberInput.value;
let randomNumer = Math.round(Math.random()*36)
    numberRandom.innerHTML = randomNumer;

    inputmoney.value;

  
    if(randomNumer == spielerZahl){  
           
        kontoStand += inputmoney.value*2;
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
           kontoStand += inputmoney.value*2;
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
        kontoStand += inputmoney.value*2;
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







