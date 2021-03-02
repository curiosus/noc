let x;
let y;
const speed = 2;
const dirs = [0, 1, 2, 3, 2, 2, 2, 0, 1, 1 ];
let colors = [0, 255, 0];


function setup() {
	createCanvas(1024, 768);
	background(1);
	x = width / 2;
	y = height / 2;
}


function draw() {
	update();
	fill(colors[0], colors[1], colors[2]);
	stroke(colors[0], colors[1], colors[2]);
	ellipse(x, y, 4, 4);
}

const update = () => {
	let dir = dirs[Math.floor(random(10))];
	if (dir == 0) {
		x = x + 1 * speed;		
	} else if (dir == 1) {
		x = x - 1 * speed;		
	} else if (dir == 2) {
		y = y + 1 * speed;
	} else if (dir == 3) {
		y = y - 1 * speed;
	}

	if (x <= 0) {
		x = width -1;
		colors = [Math.floor(random(255)), Math.floor(random(255)) , Math.floor(random(255))];
	} else if (x >= width) {
		x = 0;
		colors = [Math.floor(random(255)), Math.floor(random(255)) , Math.floor(random(255))];
	}

	if (y <= 0) {
		y = height -1;
		colors = [Math.floor(random(255)), Math.floor(random(255)) , Math.floor(random(255))];
	} else if (y >= height) {
		y = 0;
		colors = [Math.floor(random(255)), Math.floor(random(255)) , Math.floor(random(255))];
	}
}
