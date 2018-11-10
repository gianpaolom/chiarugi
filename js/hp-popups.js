(function ($) {
  Drupal.behaviors.hpPopups = {
    attach: function (context) {

   // function to show our popups
    function showPopup(whichpopup){
        var docHeight = $('#hp-top').height();
        $('.overlay-popup').css({'height' : docHeight});
        $('.overlay-bg').show().css({'height' : docHeight});
        $('.popup'+whichpopup).removeClass('popup-hidden').css("display","block");
        setTimeout(function () { $('.popup'+whichpopup).addClass('popup-visible'); }, 0);
    }

    // function to close our popups
    function closePopup(){
        $('.overlay-bg').hide(); //hide the overlay
        $('.overlay-popup').removeClass('popup-visible').addClass('popup-hidden');
        $('#hp-middle').children().removeClass('btn-active');
    }

    // show popup when you click on the link
    $('.show-popup').click(function(event){
        event.preventDefault();
        if ($(this).hasClass('btn-active')) {
            closePopup();
            $(this).removeClass('btn-active');
            return;
        }
        else {
            closePopup();
            var selectedPopup = $(this).data('showpopup');
            showPopup(selectedPopup);
            $(this).addClass('btn-active');
        }
    });

    // hide popup when user clicks on close button or if user clicks anywhere outside the container
    $('.close-btn, .overlay-bg').click(function(){
        closePopup();
    });

    // hide the popup when user presses the esc key
    $(document).keyup(function(e) {
        if (e.keyCode == 27) { // if user presses esc key
            closePopup();
            $('#hp-middle').children().removeClass('btn-active');
        }
    });
    },
    detach: function (context) {}
  };
}(jQuery));
