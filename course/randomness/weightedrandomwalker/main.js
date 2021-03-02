let walker;


function setup() {
	createCanvas(1024, 768);
	const position = createVector(width / 2, height / 2);
	walker = new Walker(position, createVector(3, 3));
	background(1);
}


function draw() {
	walker.render();
}
