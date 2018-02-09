$(function() {

  var mobileTabWrap = $('.category-content .sidebar-category .category-list li.category-item span');
  console.log('Mobile-Tabs script loaded.');

  mobileTabWrap.click(function() {
    var recActive = $('li.category-item.active span'); //recent active tab
    var nowActive = $(this); // now active tab

    nowActive.parent('li.category-item').next().slideDown(300);
    $(this).children('i').toggleClass('fa-plus fa-minus');

    if ($(this).parent('li.category-item').hasClass('active')) {

      nowActive.parent('li.category-item').removeClass('active').next().slideUp(300);
    }
    else {
      recActive.parent('li.category-item').next().slideUp(300);
      nowActive.parent('li.category-item').addClass('active').siblings().removeClass('active');
      recActive.children('i').toggleClass('fa-plus fa-minus');
    }

});

});
