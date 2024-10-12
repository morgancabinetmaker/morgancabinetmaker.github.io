// Smooth Scroll
var scroll = new SmoothScroll('#nav li a', {
	updateURL: false
});


$(document).ready(function() {

	// Nav Toggle
	$('.nav-toggle').on('click', function(e) {
		e.preventDefault();
		$('body').toggleClass('nav-open');
	});

	// Close Nav
	$('#nav a').on('click', function(e) {
		e.preventDefault();
		$('body').removeClass('nav-open');
	});

	// Testimonials
	$('#testimonials .owl-carousel').owlCarousel({
		items: 1,
		loop: true,
		autoplay: true,
		autoplayTimeout: 8000
	});

	// Stop Autoplay when Clicked or Dragged
	$("#testimonials .owl-carousel").on("click dragged.owl.carousel", function() {
		var carousel = $("#testimonials .owl-carousel").data("owl.carousel");
		carousel.options.autoplay = false;
		$("#testimonials .owl-carousel").trigger("refresh.owl.carousel");
	});

	// Showcase
	$('#showcase .owl-carousel').owlCarousel({
		items: 2,
		lazyLoad: true,
		lazyLoadEager: 1,
		loop: true,
		dots: false,
		nav: true,
		navContainer: '#showcase .arrows .cell',
		autoWidth: true,

		responsive: {
			0: {
				margin: 15
			},

			768: {
				margin: 30
			},

			1024: {
				margin: 40
			},

			1280: {
				margin: 60
			}
		}
	});

	// Hide Imprint and Privacy
	$('.section.legal').hide();

	// Open Imprint
	$('.open-imprint').on('click', function(e) {
		e.preventDefault();

		$('#privacy').hide();
		$('#imprint').show();

		$('html, body').animate({scrollTop: $('#footer').offset().top}, 500, 'easeInOutCubic');
	});

	// Open Privacy
	$('.open-privacy').on('click', function(e) {
		e.preventDefault();

		$('#imprint').hide();
		$('#privacy').show();

		$('html, body').animate({scrollTop: $('#footer').offset().top}, 500, 'easeInOutCubic');
	});

	// Close Imprint or Privacy
	$('.section.legal .close-button').on('click', function(e) {
		e.preventDefault();

		$(this).closest('.section.legal').hide();
	});

});


$(window).on('load scroll resize', addInViewportClass);


// Check if element is in viewport
$.fn.isInViewport = function() {

	var elementTop = $(this).offset().top;
	var elementBottom = elementTop + $(this).outerHeight();

	var viewportTop = $(window).scrollTop();
	var viewportBottom = viewportTop + $(window).height();

	if ( window.matchMedia("(max-width: 767px)").matches ) {
		var viewportOffset = 30;
	} else {
		var viewportOffset = 200;
	}

	return elementBottom > viewportTop + viewportOffset && elementTop < viewportBottom - viewportOffset;

};


// Add class when image wrapper enters viewport
function addInViewportClass() {

	$('.img-wrapper').each(function() {
		if ( $(this).isInViewport() ) {
			$(this).addClass('in-viewport');
		}
	});

}