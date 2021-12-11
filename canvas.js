const canvas = document.getElementById('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
const c = canvas.getContext('2d');

const Circle = function (x, y, dx, dy, radius) {
	this.x = x;
	this.y = y;
	this.dx = dx;
	this.dy = dy;
	this.radius = radius;

	this.draw = function () {
		c.beginPath();
		c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
		c.strokeStyle = 'red';
		c.stroke();
		// c.fill();
	};

	this.update = function () {
		this.draw();
		if (this.x + this.radius > innerWidth || this.x - this.radius < 0)
			this.dx = -this.dx;

		if (this.y + this.radius > innerHeight || this.y - this.radius < 0)
			this.dy = -this.dy;

		this.x += this.dx;
		this.y += this.dy;
	};
};

const circles = [];

for (let i = 0; i < 100; i++) {
	const radius = Math.floor(Math.random() * 15) + 5;
	const x = Math.random() * (innerWidth - radius * 2);
	const y = Math.random() * (innerHeight - radius * 2);
	const dx = (Math.random() - 0.5) * 3;
	const dy = (Math.random() - 0.5) * 3;
	circles[i] = new Circle(x, y, dx, dy, radius);
}
console.log(circles);

// const animate = function () {
// 	c.clearRect(0, 0, innerWidth, innerHeight);
// 	for (let i = 0; i < circles.length; i++) {
// 		circles[i].update();
// 	}
// 	requestAnimationFrame(animate);
// };

animate();
