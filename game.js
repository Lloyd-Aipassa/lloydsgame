let secretNumber = Math.ceil(Math.random() * 20);
let score = 20;
let button = document.querySelector(".check");
document.querySelector(".check").addEventListener("click", function () {
	const numberGuess = document.querySelector("input").value;
	//gewonnen
	if (numberGuess == secretNumber) {
		document.querySelector("h1").textContent = "Yesss";
		// document.querySelector(".check").disabled = "false";
		// document.querySelector(".check").style.backgroundColor = "red";
		button.classList.add(".win");
		document.querySelector(".secretNum").textContent = secretNumber;
	}

	//kies een hoger getal
	else if (numberGuess < secretNumber) {
		document.querySelector(".input").textContent = "33";
		document.querySelector("h1").textContent = "het getal is hoger";
		if (score > 1) {
			score--;
			document.querySelector(".jeScore").textContent = score;
		} else {
			document.querySelector("h1").textContent =
				"je hebt verloren";
			document.querySelector(".jeScore").textContent = 0;
		}
	}

	//kies een lager getal
	else if (numberGuess > secretNumber) {
		document.querySelector("h1").textContent = "het getal is lager";
		if (score > 1) {
			score--;
			document.querySelector(".jeScore").textContent = score;
		} else {
			document.querySelector("h1").textContent =
				"je hebt verloren";
			document.querySelector(".jeScore").textContent = 0;
		}
	}
});

document.querySelector(".reset").addEventListener("click", function () {
	document.querySelector(".secretNum").textContent = "?";
	secretNumber = Math.ceil(Math.random() * 20);
	document.querySelector(".check").enabled = "false";
	console.log(secretNumber);
});
