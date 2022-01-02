window.addEventListener('scroll', (e) => {
	const headline = document.querySelector('.headline');
	const btn = document.querySelector('.headline__btn');
	const contacts = document.querySelector('.contacts');

	const scrollPosition = window.pageYOffset;

	const headlinePosition = scrollPosition * 0.5;
	const btnPosition = scrollPosition * 0.4;

	headline.style.transform = `translate3d(${headlinePosition}px, 0px, 0px)`;
	btn.style.transform = `translate3d(${btnPosition}px, 0px, 0px)`;
	contacts.style.transform = `translate3d(0px, ${scrollPosition}px, 0px)`;
});
