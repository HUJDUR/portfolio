const canvas = document.getElementById('canvas');
const header = document.getElementsByClassName('header');
canvas.height = innerHeight + 100;
canvas.width = innerWidth;
const c = canvas.getContext('2d');

const Circle = function (x, y, radius, color) {
	this.x = x;
	this.y = y;
	this.radius = radius;
	this.r = 0;
	this.color = color;

	this.draw = function () {
		c.beginPath();
		c.arc(this.x, this.y, this.r, 0, Math.PI * 2, false);
		c.fillStyle = this.color;
		c.fill();
		c.stroke();
	};

	this.update = function () {
		// c.clearRect(0, 0, innerHeight, innerWidth);
		if (this.radius > this.r) this.r += 0.5;
		this.draw();
	};
};

const StraightLine = function (x, y, end, dy, color) {
	this.x = x;
	this.y = y + 100;
	this.end = end;
	this.now = innerHeight;
	this.dy = dy;
	this.color = color;

	this.draw = function () {
		c.beginPath();
		c.moveTo(this.x, this.y);
		c.lineTo(this.x, this.now);
		c.strokeStyle = this.color;
		c.stroke();
	};

	this.update = function () {
		c.clearRect(0, 0, innerHeight, innerWidth);
		if (this.now > this.end) this.now -= this.dy;
		this.draw();
	};
};

const line = new StraightLine(
	innerWidth / 4,
	innerHeight,
	innerHeight / 3,
	9,
	'#e9c46a'
);
const circle = new Circle(innerWidth / 4, innerHeight / 3, 10, '#e9c46a');

const animate = function () {
	line.update();
	circle.update();
	requestAnimationFrame(animate);
};

// setTimeout(() => {
animate();
// }, 2500);
