"use strict";

document.addEventListener("DOMContentLoaded", () => {
  const body = document.body;

  // inputmask

  let phone = document.querySelectorAll("input[type='tel']"),
    im = new Inputmask("+7 (999) 999-99-99");
  im.mask(phone);

  // isMobile
  const isMobile = {
    Android: function () {
      return navigator.userAgent.match(/Android/i);
    },
    BlackBerry: function () {
      return navigator.userAgent.match(/BlackBerry/i);
    },
    iOS: function () {
      return navigator.userAgent.match(/iPhone|iPad|iPod/i);
    },
    Opera: function () {
      return navigator.userAgent.match(/Opera Mini/i);
    },
    Windows: function () {
      return navigator.userAgent.match(/IEMobile/i);
    },
    any: function () {
      return (
        isMobile.Android() ||
        isMobile.BlackBerry() ||
        isMobile.iOS() ||
        isMobile.Opera() ||
        isMobile.Windows()
      );
    },
  };

  if (isMobile.any()) {
    body.classList.add("touch");
  } else {
    body.classList.add("mouse");
  }

  // mobile menu

  const menuBtn = document.querySelector(".menu-btn"),
    menuClose = document.querySelector(".menu__close"),
    menu = document.querySelector(".menu__inner");

  menuBtn.addEventListener("click", () => {
    menu.classList.toggle("active");
    body.classList.toggle("lock");
  });

  menuClose.addEventListener("click", () => {
    menu.classList.toggle("active");
    body.classList.remove("lock");
  });


});
