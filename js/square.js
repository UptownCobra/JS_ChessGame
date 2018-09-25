class Square {
	constructor(index) {
		this.isSelected = false;
		this.index = index;
		this.validMove = false;
		this.width = document.getElementById('board').clientWidth;
		this.squareWidth = .125 * this.width;
		this.squareElement = this.makeSquare();

	};

	// Creates the square div element
	makeSquare() {
		let element = document.createElement('div');
		element.classList = "board-square";
		//element.addEventListener('click', () => this.setSelected(), 0);
		element.innerText = this.index;
		element.id = this.index;
		element.style = "height: " + this.squareWidth + "px;";
		document.getElementById('board').appendChild(element);
		return element;
	}


	setSelected() {
		if (!this.isSelected) {
			this.isSelected = true;
			this.squareElement.classList.add('selected');
		}
		else if (this.isSelected) {
			this.isSelected = false;
			this.squareElement.classList.remove('selected');
		}
	}

	clearValidMove() {
		this.validMove = false;
		this.squareElement.classList.remove('valid-move');
	}
	setValidMove() {
		this.validMove = true;
		this.squareElement.classList.add('valid-move');
	}
}