$(document).ready(function(){
  'use strict' ;

  var width_threshold = 900;


  // scrollTop function
  $(window).scroll(function(){
    var position = $(window).scrollTop();
    var width     =  $(window).width();
    $(".newsroom-navbar").removeClass("newsroom-navbar-change");
    $(".navbar-brand").removeClass("navbar-brand-change");


    if( position > 15 && width > width_threshold) {
      $(".newsroom-navbar").toggleClass("newsroom-navbar-change");
      $(".navbar-brand").toggleClass("navbar-brand-change");
    }

  });
});

function showAlert() {
    $("#subscribe").addClass("in");
}

window.setTimeout(function () {
    showAlert();
}, 3000);
