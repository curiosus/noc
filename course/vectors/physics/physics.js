let body;

let forceV;

function setup() {
	createCanvas(1024, 768);
	background(1);
	const position = createVector(width / 2, height / 2);
	const dimension = createVector(16, 16);
	const colors = color(0, 255, 0);
  let speed = 2.0;
	body = new Body(position, dimension, colors, speed);

}

function draw() {
	update();
	background(1);
	body.render();
}

const update = () => {
	const mouse = createVector(mouseX, mouseY);
	body.generateForceToward(mouse);


}

const checkEdges = () => {
	if (position.x > width) position.x = 0;
	if (position.x < 0) position.x = width;
	if (position.y > height) position.y = 0;
	if (position.y < 0) position.y = height; 
}
