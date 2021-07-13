import P5 from 'p5';

class Walker {
	constructor(width, height, x, y) {
		this.width = width;
		this.height = height;
		this.x = x;
		this.y = y;
	}
}

const s = (sk) => {

	sk.setup = () => {
		sk.createCanvas(1024, 768);
		sk.background(0, 0, 0);
		sk.fill(255, 0, 0);
		sk.ellipse(0, 0, 4, 4);
		

	}
}

const p5 = new P5(s);
