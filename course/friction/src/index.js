import P5 from "p5";

const sketch = (sk) => {


	let position;
	let velocity;
	let acceleration;

	sk.setup = () => {
		sk.createCanvas(1024, 768);
		sk.background(1);
		position = p5.createVector(100, p5.height - 30);
		velocity = p5.createVector(0, 0);
		acceleration = p5.createVector(0, 0);
	}

	sk.draw = () => {
		sk.background(1);
		update();

		//ground
		p5.fill(0, 255, 0);	
		p5.rect(0, 768 - 20, 1025, 400);

		//friction markers
		p5.fill(0, 0, 255);
		p5.rect(400, 768-20, 300, 10);


		//moving object
		p5.fill(255, 0, 0);
		p5.rect(position.x, position.y, 20, 10);


	}

	const update = () => {
		acceleration.x = .005;		

		if (position.x > 400 && position.x < 700) {
			const friction = p5.createVector(velocity.x, velocity.y);
			friction.normalize();
			const coefficientOfFriction = .009;
			friction.mult(coefficientOfFriction);
			friction.mult(-1);
			acceleration.add(friction);
		}

		velocity.add(acceleration);
		position.add(velocity);
		acceleration.mult(0);
	}
}

const p5 = new P5(sketch);
