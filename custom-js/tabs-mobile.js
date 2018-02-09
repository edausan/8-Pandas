$(function() {

  var mobileTabWrap = $('.product-tabs-mobile .tabs li.tab');
  console.log('Mobile-Tabs script loaded.');

  mobileTabWrap.click(function() {
    var recActive = $('li.tab.active'); //recent active tab
    var nowActive = $(this); // now active tab

    nowActive.next().slideDown(300);
    $(this).children('i#caret').toggleClass('fa-caret-down fa-caret-up');

    if ($(this).hasClass('active')) {

      nowActive.removeClass('active').next().slideUp(300);
    }
    else {
      recActive.next().slideUp(300);
      nowActive.addClass('active').siblings().removeClass('active');
      recActive.children('i#caret').toggleClass('fa-caret-down fa-caret-up');
    }

});

});
