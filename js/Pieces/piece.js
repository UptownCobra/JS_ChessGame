
class Piece {
	constructor(name, team,  pieceMap) {
		this.name = name;
		this.team = team;
		this.isTaken = false;
		this.location 
		//this.imageLocation = this.setImageLocation();
	}

	setImage() {
		return "url(images/" + this.team + "_" + this.name + ".png)";
	}

	getValidMoves() {
		return this.validMoves;
	}

}