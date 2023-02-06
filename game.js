let secretNumber = Math.ceil(Math.random() * 20);
let score = 20;
let highScore = 0;
let button = document.getElementById("check");
document.querySelector("#check").addEventListener("click", function () {
	const numberGuess = document.querySelector("input").value;
    document.querySelector("input").value = '';
	
    const scoreMutatie = function(){
        numberGuess.textContent ='';
		if (score > 1) {
			score--;
			document.querySelector(".jeScore").textContent = score;
		} else {
			document.querySelector("h1").textContent =
				"je hebt verloren";
			document.querySelector(".jeScore").textContent = 0;
		}
    }

    //gewonnen
	if (numberGuess == secretNumber) {
		document.querySelector("h1").textContent = "Winner!";
		document.querySelector("h1").style.color = "green";
		button.classList.add("win");
		document.querySelector(".secretNum").textContent = secretNumber;
        if(score > highScore){
            highScore = score;
            document.querySelector(".Highscore").textContent = score;
        }
       
	}

    //kies een hoger getal
	else if (numberGuess < secretNumber) {
        document.querySelector("h1").textContent = "het getal is hoger";
        document.querySelector("h1").style.color = "red";
        scoreMutatie()
	}

	//kies een lager getal
	else if (numberGuess > secretNumber) {
		document.querySelector("h1").textContent = "het getal is lager";
		document.querySelector("h1").style.color = "blue";
		scoreMutatie()
	}
});

document.querySelector(".reset").addEventListener("click", function () {
    document.querySelector("input").value = '';
    button.classList.remove("win");
    document.querySelector(".jeScore").textContent = '20';
	document.querySelector(".secretNum").textContent = "?";
    document.querySelector("h1").textContent =
				"Raad het geheime nummer";
	secretNumber = Math.ceil(Math.random() * 20);
	score = 20;
	console.log(secretNumber);
});
