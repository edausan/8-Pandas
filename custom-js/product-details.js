$(function() {

  var prdImgBig = $('.product-img #img-big');
  var src;
  var listImg = $('.product-img ul li');


  getFirstImg();

  listImg.click( function() {
    $(this).addClass('selected').siblings().removeClass('selected');
    src = $(this).children('img').attr('src');
    prdImgBig.attr('src', src);
  });


  function getFirstImg()
  {
    src = listImg.children('img').attr('src');
    prdImgBig.attr('src', src);
  }




});
