$(function() {

  var pages = $('.pagination-wrapper .pagination li');
  var activePage;
  var prev = $('.pagination-wrapper #prev');
  var next = $('.pagination-wrapper #next');

  pages.click(function() {
    $(this).addClass('active').siblings().removeClass('active');
    activePage = $('.pagination-wrapper .pagination li.active');

    if (activePage.text() == pages.length) {
      next.attr('disabled', true);
      prev.removeAttr('disabled');
    }
    else if (activePage.text() == '1') {
      prev.attr('disabled', true);
      next.removeAttr('disabled');
    }
    else {
      remDisable();
    }
  });


  next.click(function() {
    activePage = $('.pagination-wrapper .pagination li.active');
    activePage.removeClass('active').next().addClass('active');

    if (activePage.next().text() == pages.length) {
      next.attr('disabled', true);
    }
    else{
      remDisable();
    }

  });

  prev.click(function() {
    activePage = $('.pagination-wrapper .pagination li.active');
    activePage.removeClass('active').prev().addClass('active');

    if (activePage.prev().text() == '1') {
      prev.attr('disabled', true);
    }
    else{
      remDisable();
    }

  });

  function remDisable() {
    next.removeAttr('disabled');
    prev.removeAttr('disabled');
  }

  console.log('product-pagination script loaded');

});
