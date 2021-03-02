class Walker {


	constructor(pos, dim, clrs) {
		this.position = pos;
		this.dimension = dim; 
		this.colors = clrs;
		this.speed = 2;
	}

	render = () => {
		this.update();
		fill(this.colors[0], this.colors[1], this.colors[2]);
		stroke(this.colors[0], this.colors[1], this.colors[2]);
		ellipse(this.position.x, this.position.y, this.dimension.x, this.dimension.y);
	}

	update = () => {
		let x = this.position.x;
		let y = this.position.y;
		const choice = Math.floor(random(4));
		if (choice == 0) {
			x = x + 1 * this.speed;
		} else if (choice == 1) {
			x = x - 1 * this.speed;
		} else if (choice == 2) {
			y = y + 1 * this.speed;
		} else if (choice == 3) {
			y = y -1 * this.speed;
		} else {
			console.log("Error: choice is " + choice);
		}
		x = constrain(x, 0,  width - 1);
		y = constrain(y, 0, height - 1);


		this.position.x = x;
		this.position.y = y;

		
	}

}
