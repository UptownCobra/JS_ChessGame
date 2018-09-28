
class Bishop extends Piece {
	constructor(team) {
		super(name, team);
		//this.image = setImage();
		this.name = "bishop";
		this.team = team;
		this.image = this.setImage();
		this.validMoves = this.setValidMoves();
	}

	setValidMoves() {
		return [2, 5, 28, 4];
	}
}