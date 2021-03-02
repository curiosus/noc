let position;
let velocity;
const radius = 32;

function setup() {
	createCanvas(1024, 768);
	background(1);
	position = createVector(width / 2, height / 2);
	velocity = createVector(2, 2);
}

function draw() {
	update();
	background(1);
	fill(255, 0, 255);
	ellipse(position.x, position.y, radius, radius);
}

const update = () => {
	
	let x = position.x;
	let y = position.y;
	
	if (x <= 0 || x >= width) {
		velocity.x *= -1;
	}

	if (y <= 0 || y >= height) {
		console.log(velocity.y);
		velocity.y *= -1;
	}

	position.x = x;
	position.y = y;

	position.add(velocity);
}
