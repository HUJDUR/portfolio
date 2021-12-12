const canvas = document.getElementById('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
const c = canvas.getContext('2d');

// const Circle = function (x, y, dx, dy, radius, color) {
// 	this.x = x;
// 	this.y = y;
// 	this.dx = dx;
// 	this.dy = dy;
// 	this.radius = radius;
// 	this.color = color;

// 	this.draw = function () {
// 		c.beginPath();
// 		c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
// 		c.strokeStyle = this.color;
// 		c.stroke();
// 		c.fillStyle = this.color;
// 		c.fill();
// 	};

// 	this.update = function (mousePosition) {
// 		this.draw();
// 		if (this.x + this.radius > innerWidth || this.x - this.radius < 0)
// 			this.dx = -this.dx;

// 		if (this.y + this.radius > innerHeight || this.y - this.radius < 0)
// 			this.dy = -this.dy;

// 		this.x += this.dx;
// 		this.y += this.dy;
// 	};
// };

// const mousePosition = {
// 	x: undefined,
// 	y: undefined,
// };

// window.addEventListener('mousemove', function (event) {
// 	mousePosition.x = event.x;
// 	mousePosition.y = event.y;
// });

// const circles = [];
// const colors = [
// 	// '#65ccb8',
// 	// '#86c232',
// 	// '#46344e',
// 	// '#31708e',
// 	// '#f13c20',
// 	// '#b39bc8',
// 	// '#e85a4f',
// 	'#86b3d1',
// ];

// // Randomization of the necessary circle attributes nad circle creation

// for (let i = 0; i < 40; i++) {
// 	const radius = Math.floor(Math.random() * 30) + 20;
// 	const x = Math.random() * (innerWidth - radius * 1.5);
// 	const y = Math.random() * (innerHeight - radius * 1.5);
// 	const dx = (Math.random() - 0.5) * 2;
// 	const dy = (Math.random() - 0.5) * 2;
// 	const color = Math.floor(Math.random() * colors.length) + 0;

// 	circles[i] = new Circle(x, y, dx, dy, radius, colors[color]);
// }

// // Canvas animate function

// const animate = function () {
// 	c.clearRect(0, 0, innerWidth, innerHeight);
// 	for (let i = 0; i < circles.length; i++) {
// 		circles[i].update(mousePosition);
// 	}
// 	requestAnimationFrame(animate);
// };

// animate();
