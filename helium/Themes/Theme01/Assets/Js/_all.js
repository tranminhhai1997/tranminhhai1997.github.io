$(document).ready(function () {

    //isotope
    $('.box-img').isotope({
        itemSelector: '.item',
        layoutModel: 'fitRows'
    });

    //isotope
    $('ul.box-menu li a').click(function (event) {
        $('ul.box-menu li a').removeClass('active');
        $(this).addClass('active');

        var danhmuc = $(this).data('img');

        danhmuc = "." + danhmuc;
        if (danhmuc == ".all") {
            $('.box-img').isotope({ filter: '*' });
        }
        else {
            $('.box-img').isotope({ filter: danhmuc });
        }
        return false;
    });

    // scroll nav-menu
    $(document).scroll(function () {
        $('.navbar-menu').toggleClass('scrolled', $(this).scrollTop() > $('.navbar-menu').height());
    });

    //scroll up
    $(document).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.scrollup').fadeIn('slow');
            $('.scrollup').removeClass('hideScr');
        }
        else {
            $('.scrollup').fadeOut('slow');
        }
    });

    $('.scrollup').click(function () {
        $('html,body').animate({ scrollTop: 0 }, 1000);
    });

    //scrollspy
    (function ($) {
        "use strict";
        smartScroll.init({
            speed: 700,
            addActive: true,
            activeClass: "active",
            offset: 50
        }, function () {
            console.log("callback");
        });
    })(jQuery);

    //toggle-menu
    $(".menu-toggle").on('click', function () {
        $(this).toggleClass("on");
        $("ul.nav").toggleClass("active");
    });

});