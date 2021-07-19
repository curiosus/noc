import P5 from 'p5';

class Walker {
	constructor(width, height, x, y) {
		this.width = width;
		this.height = height;
		this.position = p5.createVector(x, y);
		this.movement = p5.createVector(0, 0);
		this.speed = 15;
	}

	render(sketch) {
		sketch.fill(255, 255, 0);		
		sketch.ellipse(this.position.x , this.position.y, this.width, this.height);
	}

	updatez() {
		let v = Math.floor(Math.random() * 8);			
		this.movement.x = 0;
		this.movement.y = 0;
		if (v === 0) {
			this.movement.x = this.speed;
		} else if (v === 1) {
			this.movement.x = this.speed;
		} else if (v === 2) {
			this.movement.y = this.speed; 
		} else if (v === 3) {
			this.movement.y = -this.speed;
		} else if (v === 4) {
			this.movement.x = this.speed;
			this.movement.y - this.speed;
		} else if (v === 5) {
			this.movement.x = -this.speed;
			this.movement.y = -this.speed;
		} else if (v === 6) {
			this.movement.x = this.speed;
			this.movement.y = -this.speed;
		} else if (v === 7) {
			this.movement.x = -this.speed;
			this.movement.y = this.speed;
		}


		if (this.position.x > this.width && this.movement.x > 0) {

			console.log(p5.width);
			this.movement.x = 0;	
		}
		
		this.position.x += this.movement.x;
		this.position.y += this.movement.y;




	}		
		


}

let walker;

const s = (sk) => {

	sk.setup = () => {
		sk.createCanvas(1024, 768);
		sk.background(0, 0, 0);
		sk.frameRate(3);
		walker = new Walker(40, 40, sk.width / 2, sk.height / 2);
	}

	const update = () => {
		walker.updatez();
	}

	const drawNoise = () => {
		let r = p5.random();
	}

	sk.draw = () => {
		update();
		walker.render(sk);	
		drawNoise();
	}


}

const p5 = new P5(s);
