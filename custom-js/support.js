$(function() {

  var uploadBtn = $('.file-captcha-wrapper .file-upload-wrapper button.upload-btn');
  var chooseBtn = $('.file-captcha-wrapper .file-upload-wrapper button.choose-btn');
  var fileInp = $('.file-captcha-wrapper .file-upload-wrapper input#imgInp');
  var nameLabel = $('.file-captcha-wrapper .file-upload-wrapper .name-type-wrapper');
  var $fileName = nameLabel.children('#filename');
  var $fileType = nameLabel.children('#filetype');
  var imgWrap = $('.file-captcha-wrapper .file-upload-wrapper .upimg-wrapper');
  var upImgWrap = $('.file-captcha-wrapper .file-upload-wrapper .upimg-wrapper .upload-wrapper');
  var removeBtn = $('.file-captcha-wrapper .file-upload-wrapper .upimg-wrapper span');
  var upImgContainer = $('#upimg');
  var data = [];

  var fileTypes = [
    "application/pdf",
    "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
    "application/vnd.ms-excel",
    "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
    "text/plain",
    "text/html"
  ];

  chooseBtn.click(function() {
    fileInp.click();
  });

  fileInp.change(function() {
    if (fileInp[0].files[0]['name']) {
      imgWrap.show(150);
      uploadBtn.addClass('shown').siblings(chooseBtn).removeClass('shown');
    }
    else {
      imgWrap.hide(150);
      uploadBtn.removeClass('shown').siblings(chooseBtn).addClass('shown');
    }

    $fileName.text($(this)[0].files[0]['name']);
    $fileType.text($(this)[0].files[0]['type']);

    function uploadImg(data){
      upImgContainer.attr('src', data[0]);
      upImgContainer.css({'padding': data[1]});
      nameLabel.css({ 'background': data[2] });
      uploadBtn.css({ 'background': data[2] });
    }

    if ($(this)[0].files[0]['type'] == fileTypes[0]) {
      data = ["img/pdf_icon.png", "'20px'", "#E2574C"];
      uploadImg(data);
    }
    else if ($(this)[0].files[0]['type'] == fileTypes[1]) {
      data = ["img/spreadsheet_icon.png", "'20px'", "#43A047"];
      uploadImg(data);
    }
    else if ($(this)[0].files[0]['type'] == fileTypes[2]) {
      data = ["img/spreadsheet_icon.png", "'20px'", "#43A047"];
      uploadImg(data);
    }
    else if ($(this)[0].files[0]['type'] == fileTypes[3]) {
      data = ["img/document_icon.png", "'20px'", "#0788FF"];
      uploadImg(data);
    }
    else if ($(this)[0].files[0]['type'] == fileTypes[4]) {
      data = ["img/txt_icon.png", "'20px'", "#F47765"];
      uploadImg(data);
    }
    else if ($(this)[0].files[0]['type'] == fileTypes[5]) {
      data = ["img/html.png", "'20px'", "#E44D26"];
      uploadImg(data);
    }
    else {
      upImgContainer.css({'padding': '0px'});
      readURL(this);
      nameLabel.css({ 'background': 'var(--accent)' });
      uploadBtn.css({ 'background': 'var(--accent)' });
    }
  });

  removeBtn.click(function() {
    upImgContainer.attr('src', '');
    $fileName.text('');
    $(this).parent().parent().hide(150);
    uploadBtn.removeClass('shown pressed').siblings(chooseBtn).addClass('shown');
  });


  function readURL(input) {
      if (input.files && input.files[0]) {
          var reader = new FileReader();

          reader.onload = function (e) {
              upImgContainer.attr('src', e.target.result);
          }

          reader.readAsDataURL(input.files[0]);
      }
  }

  uploadBtn.click(function() {
    $(this).addClass('pressed');
  });




});
