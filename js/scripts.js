/*!
 * Theme JS for Christopher Cox's site.
 * Based on the Start Bootstrap "Resume" template (MIT License).
 */

(function ($) {
    "use strict";

    // Smooth scrolling on nav-link clicks
    $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function () {
        if (location.pathname.replace(/^\//, "") === this.pathname.replace(/^\//, "") &&
            location.hostname === this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $("[name=" + this.hash.slice(1) + "]");
            if (target.length) {
                $("html, body").animate({ scrollTop: target.offset().top }, 1000, "easeInOutExpo");
                return false;
            }
        }
    });

    // Auto-collapse the navbar on link click (mobile)
    $(".js-scroll-trigger").click(function () {
        $(".navbar-collapse").collapse("hide");
    });

    // Activate Bootstrap scrollspy on the side nav
    $("body").scrollspy({
        target: "#sideNav"
    });
})(jQuery);
