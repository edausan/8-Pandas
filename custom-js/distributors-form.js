$(function() {
  var radInput = $('.fieldset .rad-container .rad-wrapper input');
  var radBtn = $('.fieldset .rad-container .rad-wrapper .rad-btn');

  radInput.on('change', function() {
    var radSame = $(this).parent('.rad-wrapper').siblings('.rad-wrapper').children('.rad-input');
    var radSibRadBtn = $(this).parent('.rad-wrapper').siblings('.rad-wrapper').children('.rad-btn');

    radSame.attr('checked', false);

    $(this).siblings('.rad-btn').addClass('active');
    radSibRadBtn.removeClass('active');
  });
});
