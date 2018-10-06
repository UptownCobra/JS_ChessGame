
class Rook extends Piece {
	constructor(team) {
		super(name, team);
		//this.image = setImage();
		this.name = "rook";
		this.team = team;
		this.image = this.setImage();
		//this.validMoves = this.setValidMoves();	
	}
}