var firstPlayer="";
var secondPlayer="";

  //Business logic
function Player(rolled,currentScore,totalScore){
  this.rolled=0;
  this.currentScore=0;
  this.totalScore=0;
}
//Generate random number;
var rolledDice=function(){
  return Math.floor(Math.random()*6)+1;
}
