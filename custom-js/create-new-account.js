$(function() {

  var checkbox = $('.fieldset > .field > #is_subscribed');
  var checkbtn = $('.fieldset > .field .checkbox-btn');

  checkbox.change(function() {
    if ($(this).is(':checked')) {
      checkbtn.addClass('checked');
      checkbtn.css({
        'border-color':'var(--accent)'
      });
    }
    else{
      checkbtn.removeClass('checked');
      checkbtn.css({
        'border-color':'#ccc'
      });
    }
  }).mouseover(function() {
    checkbtn.css({
      'border-color':'var(--accent)'
    });
  }).mouseleave(function() {
    if (checkbtn.hasClass('checked')) {
      checkbtn.css({
        'border-color':'var(--accent)'
      });
      checkbtn.addClass('checked');
    }
    else {
      checkbtn.css({
        'border-color':'#ccc'
      });
    }

  });

  console.log('loaded');

});
