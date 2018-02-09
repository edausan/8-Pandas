$(function() {


  var qtInput = $('.product-details .product-add-to-cart input');
  var addToCartBtn = $('.product-details .product-add-to-cart .add-to-cart-btn button');

  var minusBtn = $('.product-details .product-add-to-cart .quantity-btn button#minus');
  var plusBtn = $('.product-details .product-add-to-cart .quantity-btn button#plus');

  var qiVal;

  minusBtn.click(function() {
    qiVal = qtInput.val();
    qtInput.val(qiVal -= 1);
    disable();
    subtotal();
    maxQuantity();
  });

  plusBtn.click(function() {
    qiVal = qtInput.val();
    qtInput.val(+qiVal + 1);
    disable();
    subtotal();
    maxQuantity();
  });

  qtInput.on('keyup', function() {
    disable();
    subtotal();
    maxQuantity();
  });

  // disable add to cart button and minus button if the
  // value of input is equal to 0
  function disable() {
    if (qtInput.val() >= 1) {
      addToCartBtn.removeAttr('disabled');
      minusBtn.removeAttr('disabled');
    }
    else{
      addToCartBtn.attr('disabled', true);
      minusBtn.attr('disabled', true);
    }
  }


  var subTotal = $('.product-details .product-add-to-cart .sub-total-wrapper label span');
  var prodPrice = $('.product-details .product-add-to-cart h3 span');

  // calculate the subtotal
  function subtotal(){
    var sub = parseFloat(prodPrice.text()) * qtInput.val();
    var subT = numberWithCommas(sub);
    subTotal.text(subT);
    console.log(subT);
  }

  subtotal();

  function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(?:\d{3})+(?!\d))/g, ",");
  }


  var qParent = $('.product-details .product-add-to-cart .product-quantity');
  var availQ = parseInt($('.product-details .product-add-to-cart .price h5 span#available-quantity').text());
  var alert = '<div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 p-alert"><div class="alert alert-danger"><strong>Sorry!</strong> The selected quantity exceeds quantity available in stock.</div></div>';

  function maxQuantity() {
    if (qtInput.val() > availQ) {
      console.log('you exceeded the in stock');

      var x = 1;
      $('.p-alert').each(function() {
        x++;
      });

      if (x <= 2) {
        $('.p-alert').remove();
        qParent.prepend(alert);
        plusBtn.attr('disabled', true);
        addToCartBtn.attr('disabled', true);
      }
      else{
        qParent.prepend(alert);
        plusBtn.attr('disabled', true);
        addToCartBtn.removeAttr('disabled');
      }

      console.log('alert count: '+x);

    }
    else{
      $('.p-alert').remove();
      plusBtn.removeAttr('disabled');
      console.log('hindi sobra');
    }
  }

  maxQuantity();

  console.log('add-to-cart sript loaded.');

});
