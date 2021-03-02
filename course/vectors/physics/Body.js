class Body {

	constructor(pos, dim, clrs, spd){
		this.position = pos;
		this.dimension = dim;
		this.colors = clrs;
		this.speed = spd;
		this.velocity = createVector(0, 0);
		this.acceleration = createVector(0, 0);
	}

	render = () => {
		this.update();
		fill(this.colors);
		stroke(this.colors);
		ellipse(this.position.x, this.position.y, this.dimension.x, this.dimension.y);
	}

	update = () => {
		this.velocity.limit(5);
		this.velocity.add(this.acceleration);
		this.position.add(this.velocity);
		this.acceleration.mult(0);
	}

	addForce = (force) => {
		this.acceleration.add(force);		
	}

	generateForceToward(target) {
		const dir = target.sub(this.position);
		this.addForce(dir.normalize());
	}




}


