mapboxgl.accessToken =
	'pk.eyJ1IjoibmFkaXJodWpkdXIiLCJhIjoiY2t4dnFnNmFrMXp3MTJwbXZnMWgxbXJpYSJ9.2ab3QSklErh6eEDmSqjrRA';

const locations = [
	{
		city: 'Teslić',
		coordinates: [17.8595, 44.6063],
		description: 'City in which I was born.',
	},
	{
		city: 'Bosanski Šamac',
		coordinates: [18.469, 45.0611],
		description: 'Current job location.',
	},
	{
		city: 'Tuzla',
		coordinates: [18.6734, 44.58],
		description: 'Where I finished my high school education.',
	},
	{
		city: 'Mostar',
		coordinates: [17.8, 43.39],
		description: "Where I'm currently attending college.",
	},
];

let map = new mapboxgl.Map({
	container: 'map',
	style: 'mapbox://styles/nadirhujdur/ckxvrg4mx3zbu15t3bagv8mw3',
	center: [14.7, 43.921],
	zoom: 6.8,
	interactive: false,
});

locations.forEach((location) => {
	const el = document.createElement('div');
	el.className = 'marker';

	const marker = new mapboxgl.Marker({
		element: el,
		anchor: 'bottom',
	})
		.setLngLat(location.coordinates)
		.setPopup(
			new mapboxgl.Popup({ offset: 40 }).setHTML(
				`<p class="mapboxgl-popup-content__header">${location.city}</p> <p class="mapboxgl-popup-content__description">${location.description}</p>`
			)
		)
		.addTo(map);

	el.addEventListener('mouseenter', () => marker.togglePopup());
	el.addEventListener('mouseleave', () => marker.togglePopup());
});

let popup = new mapboxgl.Popup({
	offset: [0, -7],
	closeButton: false,
	closeOnClick: false,
});

map.on('mouseenter', 'test', function (e) {
	map.getCanvas().style.cursor = 'pointer';

	popup.setLngLat();
});
