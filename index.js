let städer = ["tirana", "bucarest", "sverige", "nordkorea", "luxemberg"];
let länder = ["albanien", "rumänien", "stockholm", "pyongyang","luxemberg"];
let slump = parseInt(Math.random() * 7);

let p_fråga = document.querySelector("#fråga");
let input_svar = document.querySelector("#svar");
let p_resultat = document.querySelector("#resultat");

function fråga(){
    slump = parseInt(Math.random() * 7);
    
    let fråga = länder[slump];

    p_fråga.textContent = "ange en huvudstad för " + fråga;
}

let poäng = 0;
function ange_svar(){
    let svar = input_svar.value;
    p_resultat.textContent = "rätt svar" + städer[slump];
    svar = "";
    if(svar == städer[slump]);
        poäng++;
        poäng *= 10;
        p_resultat.textContent = "Poäng:" + poäng;
    
}

let nyland = document.querySelector("#landsvar");
let nystad = document.querySelector("#stadsvar");

function nyfråga(){
    let nylandfråga = nyland.value;
    let nystadfråga = nystad.value;

    städer.push(nystadfråga);
    länder.push(nylandfråga);
}


