$(function() {
  console.log('distributors.js loaded');
  var continentList = $('.dist-list-wrapper ul.dist-list li');
  var fixedList = $('.fixed-dist-list');
  var win = $(window);
  var winTop;
  var north;
  var continentTitle = $('.distributors-list h3.continent');
  var footer = $('.footer-block');

  win.scroll(function() {
    winTop = win.scrollTop();
    north = $('.distributors-list h3#north-america').offset().top;



    if (winTop >= north - 10) {
      fixedList.addClass('show');
    }
    else if (winTop <= north - 10 ) {
      fixedList.removeClass('show');
    }
    else if (wintop >= footer.offset().top) {
      fixedList.removeClass('show');
    }


    continentTitle.each(function(i) {
      var conID = $(this).attr('id');
      var conTop = $(this).offset().top;

      if (winTop >= conTop - 40) {

        if (conID == continentTitle.eq(0).attr('id')) {
          $('li#north-america').addClass('active').siblings().removeClass('active');
        }
        else if (conID == continentTitle.eq(1).attr('id')) {
          $('li#south-america').addClass('active').siblings().removeClass('active');
        }
        else if (conID == continentTitle.eq(2).attr('id')) {
          $('li#europe').addClass('active').siblings().removeClass('active');
        }
        else if (conID == continentTitle.eq(3).attr('id')) {
          $('li#africa').addClass('active').siblings().removeClass('active');
        }
        else if (conID == continentTitle.eq(4).attr('id')) {
          $('li#asia').addClass('active').siblings().removeClass('active');
        }
      }
    });



  });


  continentList.click(function() {
    var cListId = $(this).attr('id');

    // $('[id='+ cListId +' ]').addClass('active').siblings().removeClass('active');

    var h3Top = $('h3#'+ cListId +'').offset().top;

    $('html, body').animate({
        scrollTop: h3Top
    }, 700);

  });







});
