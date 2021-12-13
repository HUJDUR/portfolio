const canvas = document.getElementById('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
const c = canvas.getContext('2d');

// const Circle = function (x, y, radius, color) {
// 	this.x = x;
// 	this.y = y;
// 	this.radius = radius;
// 	this.color = color;

// 	this.draw = function () {
// 		c.beginPath();
// 		c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
// 		c.fillStyle = this.color;
// 		c.fill();
// 		c.stroke();
// 	};
// };

// const circle = new Circle(innerWidth / 4, innerHeight / 3, 10, '#e91e63');
// circle.draw();

const StraightLine = function (x, y, y2, dy, color) {
	this.x = x;
	this.start = innerHeight;
	this.y = y;
	this.y2 = y2;
	this.dy = dy;
	this.color = color;

	this.draw = function () {
		c.beginPath();
		c.moveTo(this.x, this.y);
		c.lineTo(this.x, this.start);
		c.strokeStyle = this.color;
		c.stroke();
		c.closePath();
	};

	this.update = function () {
		// console.log(this.start - this.y2);
		if (this.start > this.y2) this.start = this.start - this.dy;
		this.draw();
	};
};

const animate = function () {
	const line = new StraightLine(
		innerWidth / 4,
		innerHeight,
		innerHeight / 3,
		100,
		'#e91e63'
	);

	line.update();
	requestAnimationFrame(animate);
};

animate();
