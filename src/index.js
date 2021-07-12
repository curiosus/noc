import P5 from 'p5';

const s = (sk) => {
	sk.createCanvas(1024, 768);
	sk.background(0, 0, 0);
	p5.fill(255, 0, 0);
	p5.ellipse(0, 0, 4, 4);
}

const p5 = new P5(s);
