$(document).ready(function() {
    $(window).scroll(function() {
        var scrollval = $(window).scrollTop();
        
        if (scrollval >= 50) {

            $(".navbar-menu").hide();

            $(".scroll-bar").show().animate({width: '50%'}, 'slow');
        } else {
            $(".navbar-menu").show();
            $(".scroll-bar").hide().css('width', '');
        }
    });
});
