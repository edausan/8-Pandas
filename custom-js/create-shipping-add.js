$(function() {
  var inputs = $('.fieldset > .field > .control.address-f input.add-f');
  var sel = $('.fieldset > .field .control select');

  inputs.focus(function() {
    $(this).parent('.control').addClass('active');
  }).blur(function() {
    if ($(this).val()) {
      $(this).parent('.control').removeClass('active').addClass('val');
    }
    else{
      $(this).parent('.control').removeClass('active val');
    }
  });

});
