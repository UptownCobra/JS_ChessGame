'use strict';

class Board {
	constructor(size) {
		this.size = size,
		this.gameBoard = document.getElementById("board")
		this.selectedIndex = null;
		this.initBoardArray = this.createInitBoard(); 
		this.boardArray = this.initBoard();
		this.validMoves = [2, 5];
		
	
	};

	initBoard() {
		let boardArray = new Array();
		for (let i = 0; i <= this.size; i++) {
			if (this.initBoardArray[i] != null) {
				this.initBoardArray[i].location = i;
			}
			boardArray[i] = new Square(i, this.initBoardArray[i]);
			boardArray[i].squareElement.addEventListener('click', (e) => this.handleSquareClick(e), 0);
		}
		return boardArray;
	}

	handleSquareClick(e) {
		let index = parseInt(e.target.id);
		let curSquare = this.boardArray[index]; //element that was clicked on 
		if (!this.boardArray.some((i) => i.isSelected)) { //if none of the squares are selected
			curSquare.setSelected();
			this.selectedIndex = curSquare.index;
			this.setValidMoves();
		} else {
			if (curSquare.isSelected) {
				this.clearValidMoves();
				curSquare.setSelected();
				this.selectedIndex = null;

			}
		}
		
	}
	setValidMoves() {
		this.validMoves.map((i) => this.boardArray[i].setValidMove());
	}
	clearValidMoves() {
		this.validMoves.map((i) => this.boardArray[i].clearValidMove())
	}
	createInitBoard() {
		w = 'white';
		b = 'black';
		return [new Rook(b), new Knight(b), new Bishop(b), new King(b), new Queen(b), new Bishop(b), new Knight(b), new Rook(b),
			new Pawn(b), new Pawn(b), new Pawn(b), new Pawn(b), new Pawn(b), new Pawn(b), new Pawn(b), new Pawn(b),
			null, null, null, null, null, null, null, null,
			null, null, null, null, null, null, null, null,
			null, null, null, null, null, null, null, null,
			null, null, null, null, null, null, null, null,
			new Pawn(w), new Pawn(w), new Pawn(w), new Pawn(w), new Pawn(w), new Pawn(w), new Pawn(w), new Pawn(w),
			new Rook(w), new Knight(w), new Bishop(w), new Queen(w) , new King(w) , new Bishop(w), new Knight(w), new Rook(w)

		]
	}

	refresh() {
		this.boardArray.map((square) => square.refresh());
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