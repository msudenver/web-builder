// // Toggles a fixed height to the dropdown nav on mobile view to allow scrolling
// $('.navbar-toggle').click(function () {
//   if (document.querySelector('#bs-example-navbar-collapse-1').querySelector('.navbar-collapse')
//     .getAttribute("aria-expanded") != 'true') {
//     $('#bs-example-navbar-collapse-1').css('height', '80vh');
//   } else {
//     $('#bs-example-navbar-collapse-1').css('height', 'auto');
//   }
// });


// // Used to ensure the height of bs-example-navbar returns to auto when the viewport width expands to the desktop view
// // Also resets the expansion of the navbar when going back into mobile view if it was active when viewport switched to desktop view
// $(window).resize(function () {
//   if (window.innerWidth > 991) {
//     document.querySelector('#bs-example-navbar-collapse-1').querySelector('.navbar-collapse')
//       .setAttribute("aria-expanded", false);
//     $('#bs-example-navbar-collapse-1').css('height', 'auto');
//   } else if (window.innerWidth <= 991 && document.querySelector('#bs-example-navbar-collapse-1').querySelector(
//       '.navbar-collapse').classList
//     .contains('in') && document.querySelector('#bs-example-navbar-collapse-1').querySelector('.navbar-collapse')
//     .getAttribute("aria-expanded") != 'true') {
//     document.querySelector('#bs-example-navbar-collapse-1').querySelector('.navbar-collapse')
//       .setAttribute("aria-expanded", true);
//     $('#bs-example-navbar-collapse-1').css('height', '80vh');
//   }
// })
