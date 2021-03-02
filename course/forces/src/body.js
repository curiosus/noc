class Body {
	
	constructor(pos, p, dim) {
		this.position = pos;	
		this.p5 = p;
		this.velocity = this.p5.createVector(0, 0);
		this.acceleration = this.p5.createVector(0, 0);
		this.dimension = this.p5.createVector(dim, dim);
		this.mass = dim;
	}

	update() {
		this.velocity.add(this.acceleration);
		this.position.add(this.velocity);
		this.acceleration.mult(0);
	}

	render() {
		this.update();
		this.p5.fill(125);		
		this.p5.ellipse(this.position.x, this.position.y, this.dimension.x, this.dimension.y);
	}

	applyForce(force) {
		const f = this.p5.createVector(force.x, force.y);
		f.x = f.x / this.mass;
		//f.y = f.y / this.mass;
		this.acceleration.add(f);		
	}

	getPosition() {
		return this.position;
	}

	getVelocity() {
		return this.velocity;
	}
};

export default Body;
