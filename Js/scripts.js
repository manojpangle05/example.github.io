$(document).ready(function () {
    new WOW().init();
});


// data-* attributes to scan when populating modal values
var ATTRIBUTES = ['title','des', 'img'];

$('[data-toggle="modaloo"]').on('click', function (e) {
  // convert target (e.g. the button) to jquery object
  var $target = $(e.target);
  // modal targeted by the button
  var modalSelector = $target.data('target');
  
  // iterate over each possible data-* attribute
  ATTRIBUTES.forEach(function (attributeName) {
    // retrieve the dom element corresponding to current attribute
    var $modalAttribute = $(modalSelector + ' #modal-' + attributeName);
    var dataValue = $target.data(attributeName);
    
    // if the attribute value is empty, $target.data() will return undefined.
    // In JS boolean expressions return operands and are not coerced into
    // booleans. That way is dataValue is undefined, the left part of the following
    // Boolean expression evaluate to false and the empty string will be returned
    $modalAttribute.text(dataValue || '');
    
        console.log( $target.data('img'));

	document.getElementById("myImg").src =  $target.data('img');
  });


});



// add padding top to show content behind navbar
// $('body').css('padding-top', $('.navbar').outerHeight() + 'px')

// detect scroll top or down
if ($('.smart-scroll').length > 0) { // check if element exists

    var last_scroll_top = 0;
    $(window).on('scroll', function() {
        scroll_top = $(this).scrollTop();
         if (scroll_top >= 250) {
	        if(scroll_top < last_scroll_top) {
	            $('.smart-scroll').removeClass('scrolled-down').addClass('scrolled-up');
	        }
	        else {
	            $('.smart-scroll').removeClass('scrolled-up').addClass('scrolled-down');
	        }
	    } else {

	    }
        
        last_scroll_top = scroll_top;
    });
}



    /* 
       Back Top Link
       ========================================================================== */
    var offset = 200;
    var duration = 500;
    $(window).scroll(function() {
        if ($(this).scrollTop() > offset) {
            $('.back-to-top').fadeIn(400);
        } else {
            $('.back-to-top').fadeOut(400);
        }
    });

    $('.back-to-top').on('click', function(event) {
        event.preventDefault();
        $('html, body').animate({
            scrollTop: 0
        }, 600);
        return false;
    })
        
        
        
        
$(window).on('ajaxInvalidField', function(event, fieldElement, fieldName, errorMsg, isFirst) {
    $(fieldElement).closest('.form-control').removeClass('is-valid').addClass('is-invalid');
});

$(document).on('ajaxPromise', '[data-request]', function() {
    $(this).closest('form').find('.form-control.is-invalid').removeClass('is-invalid').addClass('is-valid');
});
