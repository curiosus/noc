class Dot {

	constructor(pos) {
			this.position = pos;
			this.radius = 32;
			this.colors = [Math.floor(random(255)), Math.floor(random(255)),Math.floor(random(255))];
			this.t = random();
	}

	render = () => {
		this.update();
		stroke(this.colors[0], this.colors[1], this.colors[2]);
		fill(this.colors[0], this.colors[1], this.colors[2]);
		ellipse(this.position.x, this.position.y, this.radius, this.radius);
	}

	update = () => {
		this.t = this.t + 0.25; 
		let x = noise(this.t);
		x = map(x, 0, 1, 0, width);
		this.position.x = x;

	}

}
