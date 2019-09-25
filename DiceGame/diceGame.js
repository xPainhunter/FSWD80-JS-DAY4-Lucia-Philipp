var firstPlayer = prompt("Enter first Player", "Name");
document.getElementById("playerName1").innerHTML=firstPlayer;

var secondPlayer = prompt("Enter second Player", "Name");
document.getElementById("playerName2").innerHTML=secondPlayer;

var execution1 = 0;
var execution2 = 0;
var a ;
var b ;
function rollDice1(){
	
	var p1dice1 = Number(Math.floor(Math.random()*6)+1);
	var p1dice2 = Number(Math.floor(Math.random()*6)+1);
	var p1diceSum = p1dice1 + p1dice2;
	document.getElementById("p1dice1").innerHTML=p1dice1;
	document.getElementById("p1dice2").innerHTML=p1dice2;
	document.getElementById("p1sum").innerHTML=p1diceSum;
	execution1 = execution1 + 1;
	a = Number(p1diceSum);
	console.log(a);
	return a;	
}

function rollDice2(){
	var p2dice1 = Number(Math.floor(Math.random()*6)+1);
	var p2dice2 = Number(Math.floor(Math.random()*6)+1);
	var p2diceSum = p2dice1 + p2dice2;
	document.getElementById("p2dice1").innerHTML=p2dice1;
	document.getElementById("p2dice2").innerHTML=p2dice2;
	document.getElementById("p2sum").innerHTML=p2diceSum;
	execution2 = execution2 + 1;
	b = Number(p2diceSum);
	console.log(b);
	return b;
}

function getResult(a,b){
	var player1 = document.getElementById("playerName1").innerHTML;
	var player2 = document.getElementById("playerName2").innerHTML;
	console.log(a,b);
	if (a>b){
		document.getElementById("result").innerHTML=player1 + " won the game!";
	}
	else if (a<b){
		document.getElementById("result").innerHTML=player2 + " won the game!";
	}
	else {
		document.getElementById("result").innerHTML="No winner. Roll again";
	}
}

setInterval(function(){
	if(a>0 && b>0 && execution1 == execution2){
		getResult(a,b);
	}
},1000)


