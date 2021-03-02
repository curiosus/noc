class Walker {
	
	constructor(pos, dim, clrs) {
		this.position = pos;
		this.dimension = dim;
		this.colors = clrs;
		this.speed = 2;
	}

	render = () => {
		this.update();
		fill(255, 0, 0);
		stroke(255, 0, 0);
		ellipse(this.position.x, this.position.y, this.dimension.x, this.dimension.y);
	}

	update = () => {
		let x = this.position.x;
		let y = this.position.y;
		const num = Math.floor(random(100));

		if (num >= 50) {
			x = x + 1 * this.speed;
		} else if (num <= 20) {
			x = x - 1 * this.speed;
		} else if (num > 20 && num <= 35) {
			y = y + 1 * this.speed;
		} else if (num > 35 && num <= 50) {
			y = y -1 * this.speed;
		} else {
			console.log("Error: choice is " + num);
		}


		if (x >= width - 1) {
			x = 0;
		} else if (x < 0) {
			x = width - 1;
		}

		y = constrain(y, 0, height - 1);

		this.position.x = x;
		this.position.y = y;

		
	}

}
