$(function() {

  var switcher = $('.bg-toggle-wrap #check-toggle');
  var productBg = $('.product-image-wrapper');
  var wishCompare = $('.product-item-actions .actions-primary + .actions-secondary > .action');

  var switchTitle = $('.bg-toggle-wrap');
  var title = '';

  switcher.attr("checked", true);

  if (switcher.is(':checked')) {
    switcher.parent('.bg-toggle-wrap').addClass('blue');
    productBg.addClass('bg');
    swhTitle(title = "click to hide Product background");

  }

  switcher.change(function() {
    if (switcher.is(':checked')) {
      switcher.parent('.bg-toggle-wrap').addClass('blue');
      productBg.addClass('bg');
      wishCompare.removeClass('visible');
      swhTitle(title = "click to hide Product background");
    }else {
      switcher.parent('.bg-toggle-wrap').removeClass('blue');
      productBg.removeClass('bg');
      wishCompare.addClass('visible');
      swhTitle(title = "click to show Product background");
    }
  });


  function swhTitle() {
    switchTitle.attr('title', title);
  }

});
