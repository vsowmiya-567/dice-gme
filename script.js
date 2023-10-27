
//player score display
const p1score = document.getElementById("p1score") 
const p2score = document.getElementById("p2score") 

//roll now button

const btn1 = document.getElementById("btn1")
const btn2 = document.getElementById("btn2")

//reset button

const rst = document.getElementById("rst")

//imgage tag

const diceimg = document.getElementById("diceimg")

//winner msg

const winner = document.getElementById("winner")

//test

let score1 = 0;
let score2 = 0;
// let target = 30;


function btn11(){
    let randomNum = Math.floor(Math.random()*6)+1;
   // console.log(randomNum)
    diceimg.src = `./images/${randomNum}.png`;
    score1 += randomNum;
    //console.log(score1)
    p1score.innerText = score1;

    btn1.disabled = true;
    btn2.disabled = false;
    document.getElementById("head").innerText = "Player-2 To Play"

    if(score1 >=20 ){
    
        winner.innerText = "player 1 wins!";
    }

   
}



// 2nd

function btn22(){
    let randomNum = Math.floor(Math.random()*6)+1;
    diceimg.src = `./images/${randomNum}.png`;

    score2 += randomNum;
    //console.log(score2)

    p2score.innerText = score2;

    btn1.disabled = false;
    btn2.disabled = true;
    document.getElementById("head").innerText = "Player-1 To Play"


    if(score2 >=20 )
{

    winner.innerText = "player 2 wins!";

}

}

function reset(){
    p1score.textContent = 0;
    p2score.textContent = 0;
    winner.innerText = "";
    score1=0;
    score2=0;
   

}






