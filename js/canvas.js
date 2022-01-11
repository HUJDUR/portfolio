const canvas = document.getElementById('canvas');
const header = document.getElementsByClassName('header');
canvas.height = innerHeight;
canvas.width = innerWidth;
const c = canvas.getContext('2d');

let frequncy = 0.01;
let outsideCounter = 0;
const animate = function () {
	requestAnimationFrame(animate);

	c.clearRect(0, 0, canvas.width, canvas.height);
	c.beginPath();
	c.moveTo(canvas.width / 5, 0);

	for (let i = 0; i < canvas.height; i++) {
		c.lineTo(canvas.width / 5 + Math.sin(i * -0.003 + frequncy) * 35, i);
	}
	c.stroke();
	frequncy += 0.01;
};

animate();
