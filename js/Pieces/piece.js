
class Piece {
	constructor(name, team) {
		this.name = name;
		this.team = team;
		this.isTaken = false;
		//this.imageLocation = this.setImageLocation();
	}

	setImage() {
		return "<img src=\"images/" + this.team + "_" + this.name + ".png\">";

	}

	getValidMoves() {
		return this.validMoves;
	}

}