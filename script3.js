$(function ($) {
    'use strict';
    const show = $('#show');
    const main = $('#main');

    show.click(function () {
        if (main.hasClass('menu-open')) {
            main.removeClass('menu-open');
        } else {
            main.addClass('menu-open');
        }
    });

});