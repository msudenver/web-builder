$(document).ready(function() {
	var mainNavId = $("#main-news-nav");
	var navbarId = $("#newsroom-nav.newsroom-nav-container");
	var navbarCollapse = $("#navbar-collapse-1");
	var headerElement = $("#nav-h3");
	var navRight = $("#nav-right");
	var navLeft = $("#nav-left");
	var brandLogo = $("#newsroom-logo");
	var newsHero = $("#newsroom-hero");
	$(window).scroll(function() {
		if( $(window).scrollTop() >= 35) {
			mainNavId.addClass('navbar-fixed-top');
			navbarId.css("height", "150px");
			headerElement.css("display", "none");
			navRight.css({"margin-top": "0px", "display": "inline-block", "position": "relative", "top": "-50px"});
			navRight.removeClass("navbar-right");
			navLeft.css({"padding-top": "50px", "padding-right": "50px", "display": "inline-block", "float": "none"});
			navLeft.removeClass("navbar-left");
			brandLogo.css({"max-width" :"120px", "padding-top" :"0px"});
			newsHero.css("padding-top", "158px");
			navbarCollapse.css({"position": "relative", "right": "0px", "text-align": "right"});
		} else {
			mainNavId.removeClass('navbar-fixed-top');
			navRight.addClass("navbar-right");
			navLeft.addClass("navbar-left");
			navbarId.removeAttr("style");
			headerElement.removeAttr("style");
			navRight.removeAttr("style");
			navLeft.removeAttr("style");
			brandLogo.removeAttr("style");
			newsHero.removeAttr("style");
			navbarCollapse.removeAttr("style");
		}
	});
});

// add this to id after scroll .navbar-fixed-top