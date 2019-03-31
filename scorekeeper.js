var p1button = document.querySelector("#p1");
var p2button = document.querySelector("#p2");
var resetbutton = document.getElementById("reset");
var p1display = document.querySelector("#p1display");
var p2display = document.querySelector("#p2display");
var numInput = document.querySelector("input");
var winningScoreDislay = document.querySelector("p span");
var gameOver = false;
var winningScore = 5;

var p1score  = 0;
var p2score = 0;

p1button.addEventListener("click",function(){
	if(!gameOver){
		p1score++;
		if(p1score === winningScore){
			p1display.classList.add("winner");
			gameOver = true;
		}
		p1display.textContent = p1score;
	}
	
	
});


p2button.addEventListener("click",function(){
	if(!gameOver){
		p2score++;
		if(p2score === winningScore){
			p2display.classList.add("winner");
			gameOver = true;
		}
		p2display.textContent = p2score;
	}
	
	
});
resetbutton.addEventListener("click",function(){
reset();

});

function reset(){
	p1score = 0;
p2score = 0;
p1display.textContent = 0;
p2display.textContent = 0;
p1display.classList.remove("winner");
p2display.classList.remove("winner");
gameOver = false;

}

numInput.addEventListener("change",function(){
	winningScoreDislay.textContent = numInput.value;
	winningScore = Number(numInput.value);
	reset();


});
