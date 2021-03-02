let x;
let y;
let h;

function setup() {
	createCanvas(1024, 768);
	background(1);
	x = width / 2;
	y = height / 2;
}

function draw() {
  x += randomGaussian() *  5;  	
	y += randomGaussian() *  5;
	x = constrain(x, 0, width - 1);
	y = constrain(y, 0, height - 1);
  h = 6;
	fill(255, 0, 0);
	stroke(255, 0, 0);
	ellipse(x, y, h, h);


}
