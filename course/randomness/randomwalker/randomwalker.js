const walkers = [];

function setup() {
	createCanvas(1024, 768);
	for (let i = 0; i <= 30; i++) {
		const colors = [];
		for (let j = 0; j <=3; j++) {
			colors[j] = Math.floor(random(0, 255)); 
		}
		const position = createVector(random(10, width - 10), random(10, width - 10));
		const walker =  new Walker(position, createVector(3, 3), colors);
		walkers[i] = walker;
	}
	background(1);
}


function draw() {
	for (let i = 0; i < walkers.length; i++) {
		const walker = walkers[i];
		walker.render();
	}
}



