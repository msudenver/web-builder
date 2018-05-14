$(document).ready(function() {
	var mainNavId = $("#main-news-nav");
	var navbarId = $("#newsroom-nav.newsroom-nav-container");
	var headerElement = $("#nav-h3");
	var navRight = $("#nav-right");
	var brandLogo = $("#newsroom-logo");
	$(window).scroll(function() {
		if( $(window).scrollTop() >= 35) {
			mainNavId.addClass('navbar-fixed-top');
			navbarId.css("height", "150px");
			headerElement.css("display", "none");
			navRight.css("margin-top", "0px");
			brandLogo.css({"max-width" :"120px", "padding-top" :"0px"});
		} else {
			mainNavId.removeClass('navbar-fixed-top');
			navbarId.removeAttr("style");
			headerElement.removeAttr("style");
			navRight.removeAttr("style");
			brandLogo.removeAttr("style");
		}
	});
});

// add this to id after scroll .navbar-fixed-top