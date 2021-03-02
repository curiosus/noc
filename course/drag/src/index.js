import P5 from "p5";

const sketch = (sk) => {
	

	sk.setup = () => {
		sk.createCanvas(1024, 768);	
		sk.background(1);
	}

	sk.draw = () => {
		sk.background(1);	
		p5.fill(0, 255, 0);
    p5.rect(0, 768 - 20, 1025, 400);


	}

}

const p5 = new P5(sketch);
