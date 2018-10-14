var numSquares = 6;
var colors = [];
var answer;

var colors = ["rgb(255, 0, 0)", "rgb(0, 255, 0)", "rgb(0, 0, 255)"];
var random_color = colors[Math.floor(Math.random() * colors.length)];

var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.getElementById("message");
var head = document.getElementById("head");
var resetBtn = document.getElementById("reset");
var modeBtn = document.getElementsByClassName("mode");

init();

function init(){
	document.getElementById('head').style.backgroundColor = random_color;
	document.querySelector("nav").style.backgroundColor = random_color;
	setupModeBtns();
	setupSquares();
	reset();
}

function setupModeBtns(){
	for(var i = 0; i< modeBtn.length; i++) {
		modeBtn[i].addEventListener("click", function(){
			removeSelectedMode();
			this.classList.add("selected");
			this.textContent === "Easy" ? numSquares = 3: numSquares = 6;
			reset()
		})
	}
}

function setupSquares(){
	for(var i=0; i < squares.length; i++){
		squares[i].addEventListener("click", function(){
			var choice = this.style.backgroundColor;
			if(choice === answer){
				message.textContent = "CORRECT!";
				winningChange(choice);
				head.style.backgroundColor = choice;
				document.querySelector("nav").style.backgroundColor = choice;
				resetBtn.textContent = "PLAY AGAIN";
			} else {
				this.style.backgroundColor = "#333333";
				message.textContent = "Try Again";
			}
		})
	}
}

function removeSelectedMode(){
	for (i = 0; i < modeBtn.length; i++){
		modeBtn[i].classList.remove("selected");
	}
}

function reset(){
	colors = generateColors(numSquares);
	answer = pickedAnswer();
	colorDisplay.textContent = answer;
	message.textContent = "";
	resetBtn.textContent = "Change Colours"
	for(var i = 0; i < squares.length; i++){
		if(colors[i]){
			squares[i].style.display = "block";
			squares[i].style.backgroundColor = colors[i];
		} else{
			squares[i].style.display = "none";
		}
	}
}

resetBtn.addEventListener("click", function(){
	reset();
})


function winningChange(color){
	for(var i = 0; i < squares.length; i++){
		squares[i].style.backgroundColor = color;
	}
}

function pickedAnswer(){
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
}

function generateColors(num){
	var arr = [];
	for(var i = 0; i < num; i++){
		arr.push(randomColor());
	}
	return arr;
}

function randomColor(){
		var r = Math.floor(Math.random() * 256);
		var g = Math.floor(Math.random() * 256);
		var b = Math.floor(Math.random() * 256);
		return "rgb(" + r + ", " + g + ", " + b + ")"
}