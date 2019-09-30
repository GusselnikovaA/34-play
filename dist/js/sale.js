$(document).ready(function(){
  let sale = $('.sale');
  let close = $('#close');

  close.on('click', function(){
    sale.removeClass('sale_active');
  });
});
