$(function() {


  var prodList = $('.category-products .products .products-lists');
  var gridViewBtn = $('.category-products .sort-and-view .view-btn #grid-view');
  var listViewBtn = $('.category-products .sort-and-view .view-btn #list-view');

  listViewBtn.click(function() {
    prodList.addClass('list');
  });

  gridViewBtn.click(function() {
    prodList.removeClass('list');
  });


  var win = $(window);
  var wWid;

  win.resize(function() {
    wWid = $(this).width();
    console.log(wWid);

    if (wWid <= 605) {
      prodList.removeClass('list');
      listViewBtn.attr('disabled', true);
    }
    else if (wWid <= 974) {
      prodList.addClass('list');
      listViewBtn.removeAttr('disabled');
    }
    else {
      prodList.removeClass('list');
      listViewBtn.removeAttr('disabled');
    }
  });


  console.log('product-views script loaded.');

  // Show and Hide Features
  var viewSpecsBtn = $('.category-products .products .products-lists li.product-item .price-cart button.btn-info');
  var filter = $('.category-products .products .products-lists li.product-item .filter');
  var specs = $('.category-products .products .products-lists li.product-item .product-specs');
  var xBtn = $('.category-products .products .products-lists li.product-item .product-specs button');
  var closeBtn;
  var closeFilter;
  var x;

  viewSpecsBtn.click(function() {
    x = $(this);
    x.parent().siblings('.product-specs').fadeIn(100).css({
      'transform': 'translateX(26%)'
    });
    x.parent().siblings('.filter').fadeIn(300);
  });

  filter.click(function() {
    closeBtn = $(this).siblings('.product-specs');
    closeFilter = $(this);
    close(closeBtn, closeFilter);
  });

  xBtn.click(function() {
    closeBtn = $(this).parent('.product-specs');
    closeFilter = $(this).parent().siblings('.filter');
    close(closeBtn, closeFilter);
  });

  function close() {
    closeBtn.fadeOut(100).css({'transform': 'translateX(120%)'});
    closeFilter.fadeOut(300);
  }
  // Show and Hide Features



  // Dropdown
  var dropBtn = $('.category-products .dropdown .btn-info');
  var dropMenu = $('.category-products .dropdown-menu > li');

  dropMenu.click(function() {
    $(this).parent().siblings('.btn-info').text($(this).text());
  });

});
