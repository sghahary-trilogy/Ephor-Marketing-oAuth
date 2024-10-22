/*
------------------------------------------------------------------------
* Template Name    : Softie | SaaS & Software Html5 Landing Page      * 
* Author           : Webonzer                                         *
* Version          : 2.1                                              *
* Created          : March 2023                                       *
* File Description : Main Js file of the template                     *
*-----------------------------------------------------------------------
*/

!(function ($) {
    "use strict";

    var SoftieApp = function () {};

    //Navbar Stickey
    (SoftieApp.prototype.initNavbarStickey = function () {
        var navbar = document.querySelector("nav");
        window.onscroll = function () {
            // pageYOffset or scrollY
            if (window.pageYOffset > 60) {
                navbar.classList.add("stickyadd");
            } else {
                navbar.classList.remove("stickyadd");
            }
        };
    }),
        //Navbar Collapse Hide
        (SoftieApp.prototype.initNavbarCollapse = function () {
            $(document).on("click", ".navbar-collapse.show", function (e) {
                if ($(e.target).is("a")) {
                    $(this).collapse("hide");
                }
            });
        }),
        //MFP Images
        (SoftieApp.prototype.initMFPZoom = function () {
            $(".img-zoom").magnificPopup({
                type: "image",
                closeOnContentClick: true,
                mainClass: "mfp-fade",
                gallery: {
                    enabled: true,
                    navigateByImgClick: true,
                    preload: [0, 1],
                },
            });
        }),
        //Client Slider
        (SoftieApp.prototype.initClientSlider = function () {
            $("#owl-demo").owlCarousel({
                autoPlay: 10000,
                items: 3,
                itemsDesktop: [1199, 3],
                itemsDesktopSmall: [979, 3],
            });
        }),
        //Back To Top
        (SoftieApp.prototype.initBackToTop = function () {
            $(window).on("scroll", function () {
                if ($(this).scrollTop() > 100) {
                    $(".back_top").fadeIn();
                } else {
                    $(".back_top").fadeOut();
                }
            });
            $(".back_top").on("click", function () {
                $("html, body").animate(
                    {
                        scrollTop: 0,
                    },
                    1000
                );
                return false;
            });
        }),
        (SoftieApp.prototype.init = function () {
            this.initNavbarStickey();
            this.initNavbarCollapse();
            this.initMFPZoom();
            this.initClientSlider();
            this.initBackToTop();
        }),
        //init
        ($.SoftieApp = new SoftieApp()),
        ($.SoftieApp.Constructor = SoftieApp);
})(window.jQuery),
    //initializing
    (function ($) {
        "use strict";
        $.SoftieApp.init();
    })(window.jQuery);
