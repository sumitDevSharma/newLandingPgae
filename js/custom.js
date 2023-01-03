jQuery( document ).ready(function() {

     // sticky Menu
     jQuery(window).scroll(function () {
        var sticky = $('header'),
                scroll = $(window).scrollTop();

        if (scroll >= 70)
            sticky.addClass('fixed');
        else
            sticky.removeClass('fixed');
    });
    // toogle menu
    jQuery('.toggle-menu').click(function (e) {
        e.stopPropagation();
        jQuery('body').toggleClass('open-nav');
        jQuery(this).toggleClass('open');
    });

    // search open
    jQuery('.search-icon').click(function (e) {
        e.stopPropagation();
        jQuery('.search-form').addClass('open-search');
        jQuery('body').removeClass('open-nav');
        jQuery('.toggle-menu').removeClass('open');
    });
    jQuery('.close-icon').click(function (e) {
        e.stopPropagation();
        jQuery('.search-form').removeClass('open-search');
    });

    jQuery('.down-arrow').click(function (e) {
        e.stopPropagation();
        jQuery('.sub-menu').toggleClass('open-submenu');
        jQuery(this).toggleClass('open');
    });

});