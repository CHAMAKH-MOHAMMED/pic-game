'use strict';
//structer the varible to use
const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1');

const currentScore0 = document.getElementById('current--0');
const currentScore1 = document.getElementById('current--1');

const diceEl = document.querySelector('.dice');
const BtnNew = document.querySelector('.btn--new');
const BtnRoll = document.querySelector('.btn--roll');
const BtnHold = document.querySelector('.btn--hold');

//START function
let scoreTotal,activeplayer,score,palying;

const  startcondition=function(){
  palying=true;

   scoreTotal=[0,0]
   activeplayer=0;
  score = 0;



  score0El.textContent = 0;
  score1El.textContent = 0;
  currentScore0.textContent=0;
  currentScore1.textContent=0;


  diceEl.style.visibility = 'visible';
  document.querySelector(`.player--0`).classList.remove("player--winner");
  document.querySelector(`.player--1`).classList.remove("player--winner");
  document.querySelector(`.player--0`).classList.add("player--active");
  document.querySelector(`.player--1`).classList.remove("player--active");
  
  diceEl.style.visibility = 'hidden';


}
startcondition();



//actice player and score




//function for palyer

  const switchplayer= function(){
    document.querySelector(`.player--0`).classList.toggle("player--active");
    document.querySelector(`.player--1`).classList.toggle("player--active");
    document.getElementById(`current--${activeplayer}`).textContent=0;
    activeplayer=(activeplayer===0)?1:0;
    score=0;

}


//buttun Roll drice
BtnRoll.addEventListener('click', function () {
  if(palying){
  const dice = Math.trunc(Math.random() * 6) + 1;
  diceEl.style.visibility = 'visible';
  diceEl.src = `dice-${dice}.png`;
  if (dice !== 1) {
    score += dice;
    document.getElementById(`current--${activeplayer}`).textContent=score;
  } else {
   document.querySelector(`#score--${activeplayer}`).textContent=0;
   scoreTotal[activeplayer]=0;
   switchplayer();

  }
}});






BtnHold.addEventListener("click",function(){
  if (palying){
    //current score for every player
scoreTotal[activeplayer]+=score;
console.log(scoreTotal)
document.querySelector(`#score--${activeplayer}`).textContent=scoreTotal[activeplayer];

if(scoreTotal[activeplayer]>=20){
  palying=false;
  document.querySelector(`.player--${activeplayer}`).classList.add("player--winner");

  document.querySelector(`.player--${activeplayer}`).classList.remove("player--active");

}else{
//switch player
switchplayer();
}
}})

BtnNew.addEventListener("click",function(){
startcondition(); 
})

