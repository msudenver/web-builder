//Once the DOM is ready for JS code to be executed. 
$(document).ready(function() {
	/* Define our element variables by getting elements by ID */
	var mainNavId = $("#main-news-nav");
	var navbarId = $("#newsroom-nav.newsroom-nav-container");
	var navbarHeader = $("#nav-header");
	var navbarCollapse = $("#navbar-collapse-1");
	var headerElement = $("#nav-h3");
	var navRight = $("#nav-right");
	var navLeft = $("#nav-left");
	var brandLogo = $("#newsroom-logo");
	var newsHero = $("#newsroom-hero");
	/* Our switch to let the window.scrollTop() function know
		whether out navbar is sticky or not*/ 
	var isStuck = false; 

	function stickyNavbar() {
		$(window).scroll(function() {
			/* when the window is scrolled, if we scroll past 35px AND our window's 
				width is 992px change the following styles and classes */
			if( $(window).scrollTop() >= 35 && $(window).width() >= 992) {
				if(!isStuck) {
					isStuck = true;
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
					navbarHeader.css({"width": "150px"});
					console.log("is stuck");/* this is used for debugging. helps determine stuck or not stuck after styles change on scroll */
				}
				
			} else {
				/* Otherwise remove all the styling and classes */
				if(isStuck) {
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
					navbarHeader.removeAttr("style");
					isStuck = false;
				}
			}
		});
	} 

	//initialize stickyNavbar() function
	stickyNavbar();

});
