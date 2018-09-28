
class piece {
	constructor(name, team) {
		this.name = name;
		this.team = team;
		this.isTaken = false;
		this.imageLocation = setImageLocation();
	}

	setImageLocation() {
		return "/" + this.team + "_" + this.name + ".png";
	}

}