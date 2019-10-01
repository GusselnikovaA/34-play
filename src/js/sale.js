$(document).ready(function(){
  var sale = $('.sale');
  var close = $('#close');

  close.on('click', function(){
    sale.removeClass('sale_active');
  });
});
