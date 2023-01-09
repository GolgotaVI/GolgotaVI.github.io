"use strict";

(function () {
  var openButton = document.querySelector('.nav__menu');
  var menu = document.querySelector('.nav__list');
  var closeMenu = document.querySelector('.nav__close');
  openButton.addEventListener('click', function () {
    menu.classList.add('nav__list--show');
  });
  closeMenu.addEventListener('click', function () {
    menu.classList.remove('nav__list--show');
  });
})();