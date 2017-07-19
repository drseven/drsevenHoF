$(document).ready(function() {
  $(".fa-angle-down").click(function() {
    $('html, body').animate({
      scrollTop: $(".about").offset().top
    }, 2000)
  });

  $(".fa-angle-down").effect("bounce", {times: 5, distance: 50}, 2500);
})