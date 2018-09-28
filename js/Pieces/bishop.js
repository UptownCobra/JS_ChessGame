
class Bishop extends Piece {
	constructor(team) {
		super(name, team);
		this.image = setImage();
		this.name = "bishop";
		this.team = team;
	}
}