'use strict';

class Board {
	constructor(size) {
		this.size = size,
		this.gameBoard = document.getElementById("board")
		this.selectedIndex = null;
		this.initBoardArray = this.createInitBoard(); 
		this.boardArray = new Array;
		this.boardArray = this.initBoard();
		this.validMoves;
		
	
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
			} else if (curSquare.validMove) {
				this.movePiece(curSquare);
			}
		}
		
	}

	
	setValidMoves() {
		let index = this.selectedIndex
		let square = this.boardArray[index];
		this.validMoves = square.piece.validMoves;
		this.checkValidMoves(square);
		this.validMoves.forEach((i) => this.boardArray[i].setValidMove());
	}
	clearValidMoves() {
		this.validMoves.forEach((i) => this.boardArray[i].clearValidMove())
	}
	createInitBoard() {
		w = 'white';
		b = 'black';
		return [new Rook(b, 0), new Knight(b, 1), new Bishop(b, 2), new King(b,3), new Queen(b,4), new Bishop(b, 5), new Knight(b,6), new Rook(b,7),
			new Pawn(b,8), new Pawn(b,9), new Pawn(b,10), new Pawn(b,11), new Pawn(b,12), new Pawn(b,13), new Pawn(b,14), new Pawn(b,15),
			null, null, null, null, null, null, null, null,
			null, null, null, null, null, null, null, null,
			null, null, null, null, null, null, null, null,
			null, null, null, null, null, null, null, null,
			new Pawn(w,48), new Pawn(w,49), new Pawn(w,50), new Pawn(w,51), new Pawn(w,52), new Pawn(w,53), new Pawn(w,54), new Pawn(w,55),
			new Rook(w,56), new Knight(w,57), new Bishop(w, 58), new King(w,59) , new Queen(w,60), new Bishop(w, 61), new Knight(w,62), new Rook(w,63)

		]
	}

	refresh() {
		this.clearValidMoves();
		this.boardArray[this.selectedIndex].setSelected();
		this.boardArray[this.selectedIndex].piece = null;
		this.selectedIndex = null;
		this.clearValidMoves();
		
		this.boardArray.forEach((square) => square.refresh());
		
	}

	checkValidMoves(square) {
		let team = square.piece.team;
		let moveSquare;
		let board = this.boardArray;
		let copy = this.validMoves;
		this.validMoves = copy.filter(function (i, index) {
			moveSquare = board[i]
			if (moveSquare.piece) {
				if (team != moveSquare.piece.team) {
					return true;
				}
			} else
				return true;
		});
	}

	movePiece(square) {
		if (square.piece != null) {
			square.removeBackground();
		}
		
		square.piece = this.boardArray[this.selectedIndex].piece;
		
		this.boardArray[this.selectedIndex].squareElement.classList.remove(this.boardArray[this.selectedIndex].piece.image);
		
		this.refresh();

	}
}


let w = 'white';
let b = 'black';
let test = new Board(63);

