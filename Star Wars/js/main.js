$( document ).ready(function() {
	$(".owl-carousel").owlCarousel({
 		margin:20,
 		nav:true,
 		navClass: ["slider-nav-left", "slider-nav-right"],
 		responsive:{0:{items:1},700:{items:2},900:{items:3},1200:{items:4}}
 	})
});


$(".menu-btn").on("click", function(e) {
	e.preventDefault;
	$(this).toggleClass("menu-btn-active");
	$(".mobile-menu").toggleClass("mobile-menu-active");
	$(".main-header").toggleClass("main-header-fixed");
	$(".header-logo").toggleClass("header-logo-hidden");
	$(".hero").toggleClass("hero-padding");
});