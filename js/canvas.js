const canvas = document.getElementById('canvas');
const header = document.getElementsByClassName('header');
const loading = document.getElementsByClassName('loader');
canvas.height = innerHeight + 100;
canvas.width = innerWidth;
const c = canvas.getContext('2d');

let frequncy = 0.01;
let outsideCounter = 0;
const animate = function () {
	requestAnimationFrame(animate);

	c.clearRect(0, 0, canvas.width, canvas.height);
	c.beginPath();
	c.moveTo(canvas.width / 3, 0);

	for (let i = 0; i < canvas.height; i++) {
		let x =
			canvas.width / 4 -
			35 +
			Math.sin(i * -0.003 + frequncy) * 30 * Math.sin(frequncy);

		c.lineTo(x, i);
		c.moveTo(0, i);
		c.lineTo(x, i);
	}
	c.strokeStyle = 'rgba(255, 255, 255, 0.09)';
	c.stroke();

	frequncy += 0.01;
};

document.documentElement.addEventListener('load', function () {
	loading[0].style.display = 'block';
});

window.addEventListener('load', function () {
	loading[0].style.display = 'none';
	animate();
});
