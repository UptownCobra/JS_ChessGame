'use strict';

class Board {
	constructor(size) {
		this.size = size,
		this.gameBoard = document.getElementById("board")
		this.selectedIndex = null;
		this.boardArray = this.initBoard();
		this.validMoves = [2,5];
	};

	initBoard() {
		let boardArray = new Array();
		for (let i = 0; i <= this.size; i++) {
			boardArray[i] = new Square(i);
			boardArray[i].squareElement.addEventListener('click', (e) => this.handleSquareClick(e), 0);
		}
		return boardArray;
	}

	handleSquareClick(e) {
		let index = parseInt(e.target.id);
		let curSquare = this.boardArray[index]; //element that was clicked on 
		if (!this.boardArray.some((i) => i.isSelected)) { //if none of the squares are selected
			curSquare.setSelected();
			this.setValidMoves();
		} else {
			if (curSquare.isSelected) {
				this.clearValidMoves();
				curSquare.setSelected();

			}
		}
		
	}
	setValidMoves() {
		this.validMoves.map((i) => this.boardArray[i].setValidMove());
	}
	clearValidMoves() {
		this.validMoves.map((i) => this.boardArray[i].clearValidMove())
	}

}



let test = new Board(63);
