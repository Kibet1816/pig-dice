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
//Check for 1
Player.prototype.checkForOne=function(){
  this.rolled=rolledDice();
  if (rolledDice()===1) {
    this.currentScore=0;
    alert("Oops!!You rolled a 1!!Your turn is over");
  } else {
    this.currentScore=+rolledDice();
  }
}
