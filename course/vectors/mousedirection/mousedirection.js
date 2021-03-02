
function setup() {
	createCanvas(1024, 768);
	background(1);
}

function draw() {
	update();
	background(1);
	fill(0, 255, 0);
	stroke(0, 255, 0);
	strokeWeight(2);
	translate(width/2, height/2);
	ellipse(0, 0, 8, 8);
	
	const mouse = createVector(mouseX, mouseY);
	const center = createVector(width/2, height/2);
	mouse.sub(center);
	mouse.normalize();
	mouse.mult(50);
	line(0, 0, mouse.x, mouse.y);

}

const update = () => {
	
}
