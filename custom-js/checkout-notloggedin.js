$(function() {
  var input = $('.fieldset > .field .control input');
  var sel = $('.fieldset > .field .control select');

  input.focus(function() {
    $(this).parent('.control').addClass('active');
  }).blur(function() {
    if ($(this).val()) {
      $(this).parent('.control').removeClass('active').addClass('val');
    }
    else{
      $(this).parent('.control').removeClass('active val');
    }
  });

  sel.focus(function() {
    $(this).parent('.control').addClass('active');
  }).blur(function() {
    if ($(this).val()) {
      $(this).parent('.control').removeClass('active').addClass('val');
    }
    else{
      $(this).parent('.control').removeClass('active val');
    }
  });
  

  sel.change(function() {
    $(this).css({'color':'black'});
  });

  console.log('checkout: not logged in loaded');

});
