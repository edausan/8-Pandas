$(function() {

  var prdTabs = $('.product-tabs .tabs ul li');

  prdTabs.on('click', function() {
    $(this).addClass('active').siblings().removeClass('active');
  });


});
