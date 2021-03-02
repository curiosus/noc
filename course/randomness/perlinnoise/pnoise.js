const dots = [];

function setup(){
	createCanvas(1024, 768);

	for (let i = 0; i <= 8; i++) {
		const h = Math.floor(random(width));
		const dot = new Dot(createVector(h, (i + 1) * 100));
		dots[i] = dot;
	}

	background(1);
	frameRate(5);
}


function draw() {
	background(1);
	for (let i = 0; i < dots.length; i++) {
		const dot = dots[i];
		dot.render();
	}
}

