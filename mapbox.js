mapboxgl.accessToken =
	'pk.eyJ1IjoibmFkaXJodWpkdXIiLCJhIjoiY2t4dnFnNmFrMXp3MTJwbXZnMWgxbXJpYSJ9.2ab3QSklErh6eEDmSqjrRA';

const locations = [
	{ city: 'Teslic', coordinates: [17.8595, 44.6063] },
	{ city: 'Bosanski Samac', coordinates: [18.469, 45.0611] },
	{ city: 'Tuzla', coordinates: [18.6734, 44.58] },
	{ city: 'Mostar', coordinates: [17.8, 43.39] },
];

let map = new mapboxgl.Map({
	container: 'map',
	style: 'mapbox://styles/nadirhujdur/ckxvrg4mx3zbu15t3bagv8mw3',
	center: [14.7, 43.921],
	zoom: 6.8,
	interactive: false,
});

// const bounds = new mapboxgl.LngLatBounds();

locations.forEach((location) => {
	const el = document.createElement('div');
	el.className = 'marker';

	new mapboxgl.Marker({
		element: el,
		anchor: 'bottom',
		// offset: 30,
	})
		.setLngLat(location.coordinates)
		.addTo(map);
	// bounds.extend(location.coordinates);
});

// map.fitBounds({
// 	padding: {
// 		top: 200,
// 		bottom: 200,
// 		right: 100,
// 		left: 100,
// 	},
// });
