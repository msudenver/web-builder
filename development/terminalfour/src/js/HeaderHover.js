$(function(){
    if ($(window).width() > 992) {
      $(".dropdown").hover(
              function() {
                  $('.dropdown-menu', this).stop( true, true ).fadeIn("fast");
                  $(this).toggleClass('open');
                  $('b', this).toggleClass("caret caret-up");
              },
              function() {
                  $('.dropdown-menu', this).stop( true, true ).fadeOut("fast");
                  $(this).toggleClass('open');
                  $('b', this).toggleClass("caret caret-up");
              });
    }
    else {
      $(".dropdown").click(
              function() {
                  $('.dropdown-menu', this).stop( true, true );
                  $(this).toggleClass('open');
                  $('b', this).toggleClass("caret caret-up");
              },
              function() {
                  $('.dropdown-menu', this).stop( true, true );
                  $(this).toggleClass('open');
                  $('b', this).toggleClass("caret caret-up");
              });
    }
});
