
class King extends Piece {
	constructor(name, team) {
		super(name, team);
		//this.image = setImage();
		this.name = "king";
		this.team = team;
		this.image = this.setImage();
		this.validMoves = this.setValidMoves();	}
}