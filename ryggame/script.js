function NumberIndexPair(number, index) {
	this.number = number;
	this.index = index;
}

function GuessEngine() {
	this.redNumbers = new Array();
	this.greenNumbers = new Array();

	this.getNextGuess = function() {
		var guess = this.getGuessArrayWithGreens();

		for (var gc = 0; gc < 4; gc++) {

			if (guess[gc]) continue;

			var sn = this.getRandomNumberLessThan10();

			while (this.isNumberInArray(guess, sn)
				|| this.isNumberInArray(this.redNumbers, sn)) {

				sn = this.getRandomNumberLessThan10();
			}

			guess[gc] = sn;
		}

		return guess.join("");
	}



	this.getRandomNumberLessThan10 = function() {
		return Math.floor(Math.random() * 9.0) + 1;
	}

	this.isNumberInReds = function(number) {
		return this.isNumberInArray(
				this.redNumbers, number);
	}

	this.isNumberInArray = function(array, number) {
		for(var i = 0; i < array.length; i++) {
			if(!array[i]) continue;
			if (number == array[i]) return true;
		}

		return false;
	}

	this.isNumberAlreadyGreen = function(number) {
		for(var i = 0; i < this.greenNumbers.length; i++){
			if (this.greenNumbers[i].number == number)
				return true;
		}
		return false;
	}

	this.setColorOnGuess = function(guess, colors) {
		for(var i = 0; i < colors.length; i++) {
			var current = colors.charAt(i);

			if (current == GuessEngine.green) {
				var pair = new NumberIndexPair(guess[i], i);
				this.greenNumbers.push(pair);
			}
			
			if (current == GuessEngine.red) {
				this.redNumbers.push(guess[i]);
			}
		}
	}

	this.getGuessArrayWithGreens = function() {
		var ga = new Array(4);

		for ( var i = 0; i < this.greenNumbers.length; i++ ) {
			var greenIndex = this.greenNumbers[i].index;
			var greenNum = this.greenNumbers[i].number;

			ga[greenIndex] = greenNum;
		}

		return ga;
	}
}

GuessEngine.green = "g";
GuessEngine.yellow = "y";
GuessEngine.red = "r";
