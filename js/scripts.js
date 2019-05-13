var firstPlayer="";
var secondPlayer="";


function Player(rolled,currentScore,totalScore){
  this.rolled=0;
  this.currentScore=0;
  this.totalScore=0;
}

var rolledDice=function(){
  return Math.floor(Math.random()*6)+1;
}

Player.prototype.checkForOne=function(){
  this.rolled=rolledDice();
  if (rolledDice()===1) {
    this.currentScore=0;
    alert("Oops!!You rolled a 1!!Your turn is over");
  } else {
    this.currentScore=+rolledDice();
    this.totalScore=this.currentScore;
  }
}

Player.prototype.holdScore=function(){
  this.totalScore+=this.currentScore;
  this.currentScore=0;
  alert("Your turn is over!");
}

Player.prototype.winner=function(){
  if (this.totalScore>=100) {
    alert("Winner!!!!!");
  }
}


$(document).ready(function(event){
  $('button#dice-roll-1').click(function(){
   firstPlayer=new Player
   firstPlayer.rolled=rolledDice();
   $('#die1 .dice').text(firstPlayer.rolled);
   firstPlayer.checkForOne();
   $('#status-die1').text(firstPlayer.currentScore)
 });
  $('button#dice-roll-2').click(function(){
   secondPlayer=new Player
   secondPlayer.rolled=rolledDice();
   $('#die2 .dice').text(secondPlayer.rolled);
   secondPlayer.checkForOne();
   $('#status-die2').text(secondPlayer.currentScore)
 });
 $('button#dice-hold-1').click(function(){
   $('#die1 .dice').text("Your final result is "+firstPlayer.totalScore)
 });
 $('button#dice-hold-2').click(function(){
    $('#die1 .dice').text("Your final result is "+firstPlayer.totalScore)
  });
});
