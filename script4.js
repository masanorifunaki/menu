$(function ($) {
  'use strict';
  let menu = $('.menu');

  menu.click(function () {
    $('#menu').toggle(1000);
    $('#cover').toggle();
  });

});