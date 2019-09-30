$(document).ready( function() {
  /* Check width on page load*/
  if ( $(window).width() <= 1350) {
   $('#edge').addClass('edge-slider');
  }
  else {}
});

$(window).resize(function() {
  /*If browser resized, check width again */
  if ($(window).width() < 1350) {
    $('#edge').addClass('edge-slider');
  }
  else {$('#edge').removeClass('edge-slider');}
});

// $(window).on('resize', function(){
//   var win = $(this);
//   if (win.width() < 1350) { 

//   $('#edge').addClass('edge-slider');

//   }
// else
// {
//     $('#edge').removeClass('edge-slider');
// }
// });