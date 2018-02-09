$(function() {


  var prodList = $('.page-products .products-grid .product-items');
  var gridViewBtn = $('.sort-and-view .view-btn #grid-view');
  var listViewBtn = $('.sort-and-view .view-btn #list-view');

  listViewBtn.click(function() {
    prodList.addClass('listView');
  });

  gridViewBtn.click(function() {
    prodList.removeClass('listView');
  });


  var win = $(window);
  var wWid;

  win.resize(function() {
    wWid = $(this).width();
    console.log(wWid);

    if (wWid <= 605) {
      prodList.removeClass('listView');
      listViewBtn.attr('disabled', true);
    }
    else if (wWid <= 974) {
      prodList.addClass('listView');
      listViewBtn.removeAttr('disabled');
    }
    else {
      prodList.removeClass('listView');
      listViewBtn.removeAttr('disabled');
    }
  });


  console.log('product-views script loaded.');

  // Show and Hide Features
  var viewSpecsBtn = $('.item-product .actions-primary .view-feat');
  var $filter = $('.item-product .filter');
  var specs = $('.item-product .product-specs');
  var xBtn = $('.item-product .product-specs button');
  var closeBtn;
  var closeFilter;
  var x;

  viewSpecsBtn.click(function() {
    x = $(this);
    x.parents('.product-item-info').siblings(specs).fadeIn(100).css({
      'transform': 'translateX(26%)'
    });
    x.parents('.product-item-info').siblings('.filter').fadeIn(300);
  });

  $filter.click(function() {
    closeBtn = $(this).siblings('.product-specs');
    closeFilter = $(this);
    close(closeBtn, closeFilter);
  });

  xBtn.click(function() {
    closeBtn = $(this).parents('.product-specs');
    closeFilter = $(this).parents('.product-specs').siblings('.filter');
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
