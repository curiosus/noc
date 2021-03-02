import P5 from "p5";
import Body from "./body";

const s = (sk) => {

	const bodies = [];

	let scaleFactor = 0;
	let dimFactor = 10;

	sk.setup = () => {
		sk.createCanvas(1024, 768);
		sk.background(1);
		for (let i = 0; i < 5; i++) {
			const body = new Body(p5.createVector(p5.width / 2 + scaleFactor, p5.height / 2), p5, dimFactor);
			bodies[i] = body;
			scaleFactor+=20;
			dimFactor+=5;
		}
	}

	sk.draw = () => {
		sk.background(1);
		update();
		for (let i = 0; i < 5; i++) {
			const body = bodies[i];
			body.render();
		}
	}

	const mousePressed = () => {
		console.log("mouse pressed dude");
	}

	const update = () => {
		const gravity = p5.createVector(0, 0.5);
		const wind = p5.createVector(.05, 0);

		for (let i = 0; i < 5; i++) {

			const body = bodies[i];

			if (body.getPosition().y >= p5.height - 10) {
				body.getPosition().y = p5.height - 10;
				body.getVelocity().y *= -1;
			}

			if (body.getPosition().x >= p5.width - 10) {
				body.getPosition().x = p5.width - 10;
				body.getVelocity().x *= -1;
			}

			body.applyForce(gravity);
			body.applyForce(wind);

			const friction = p5.createVector(body.getVelocity().x, body.getVelocity().y); 
			friction.mult(-1);
			const coefficientOfFriction = .001;
			friction.mult(coefficientOfFriction);
			body.applyForce(friction);

		}
	}



}

const p5 = new P5(s);


