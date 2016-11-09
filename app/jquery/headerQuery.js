// make search button appear when text entered in search field
$('#q').keyup(function () {
    if ($.trim($('#q').val()).length) {
        $('#searchGoLink').removeClass('disableGoButton');
    }
    else {
        $('#searchGoLink').addClass('disableGoButton');
    }
});

// make mobile search field 100% opaque when receives focus
$('.search-text-mobile').focusin(function () {
        $('.search-text-mobile').css('opacity', '1.0');
});
$('.search-text-mobile').focusout(function () {
        $('.search-text-mobile').css('opacity', '0.8');
});

// when desktop search icon clicked: open/close nav bar, change mobile search glyph and hamburger background colors
$('.glyphicon-search-mobile').click(function(){
   $('.search-input-mobile').slideToggle();
   $('#content-nav').removeClass('in');
   $('.fa-bars').css('background-color', 'transparent');
   $('.glyphicon-search-mobile').css('background-color', '#005fae');
});

// when hamburger clicked, hide search bar and change hamburger/search glyph background colors ***NEEDS FIXING SINCE ORIGINAL MOBILE DESIGN WAS MODIFIED***
$('.navbar-toggle').click(function(){
   $('.search-input-mobile').hide();
   $('.fa-bars').css('background-color', '#005fae');
   $('.glyphicon-search-mobile').css('background-color', 'transparent');
});

// when menu item clicked, open/close pushdown menu
$('.mobile-header').click(function(){
   $('.pushdown-menu').slideToggle();
});

// open/close content-nav bar when search/close glyphs clicked
$('.search-desktop').click(function(){
   $('#content-nav').css('max-height', '55px');
});
$('.glyphicon-remove').click(function(){
   $('#content-nav').css('max-height', '');
});
