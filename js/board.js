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


let w = 'white';
let b = 'black';
let test = new Board(63);
let wq = new Queen(w);
let bq = new Queen(b);
let wk = new King(w);
let bk = new King(b);
let wkn = new Knight(w);
let bkn = new Knight(b);
let wb = new Bishop(w);
let bb = new Bishop(b);
let wr = new Rook(w);
let br = new Rook(b);
let wp = new Pawn(w);
let bp = new Pawn(b);