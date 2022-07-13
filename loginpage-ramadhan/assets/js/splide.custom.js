document.addEventListener( 'DOMContentLoaded', function () {
	new Splide( '.splide', {
		type: 'loop',
		arrows: false,
		autoplay: true,
		interval: 3000,
	}).mount();
});