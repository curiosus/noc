import P5 from 'p5';

class Walker {
	constructor(width, height, x, y) {
		this.width = width;
		this.height = height;
		this.x = x;
		this.y = y;
	}

	render(sketch) {
		sketch.fill(255, 255, 0);		
		sketch.ellipse(this.x, this.y, this.width, this.height);
	}

	updatez() {
		let v = Math.floor(Math.random() * 4);			
		if (v === 0) {
			this.x+=10;	
		} else if (v === 1) {
			this.x-=10;	
		} else if (v === 2) {
			this.y+=10;	
		} else if (v === 3) {
			this.y-=10;	
		}
	}
}

let walker;

const s = (sk) => {

	sk.setup = () => {
		sk.createCanvas(1024, 768);
		sk.background(0, 0, 0);
		walker = new Walker(40, 40, sk.width / 2, sk.height / 2);
	}

	const update = () => {
	}

	sk.draw = () => {
		walker.updatez();
		walker.render(sk);	
	}

}

const p5 = new P5(s);
