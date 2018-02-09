$(function() {

  var thumbs = $('.product-img .thumbnails li');
  var prodImg = $('.prd-img-big');
  var bigImg = thumbs.children('img').attr('src');

  prodImg.mouseover(function() {
    $(this).children('#img-big').fadeOut(100);
  }).mouseleave(function() {
    $(this).children('#img-big').fadeIn(100);
  });

  thumbs.click(function() {
      bigImg = $(this).children('img').attr('src');
      zoomImg(bigImg);
      $('.zoomImg').remove();
  });

  function zoomImg() {
    $('.prd-img-big').zoom({
      on: 'mouseover',
      duration: 100,
      zoom: 0.5,
      url: bigImg
    });
  }

  zoomImg();


});
