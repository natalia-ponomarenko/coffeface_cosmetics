import Swiper from 'swiper';
import 'swiper/swiper-bundle.css';
import SwiperCore, { Navigation, Pagination } from 'swiper/core';

SwiperCore.use([Navigation, Pagination]);

const swiper = new Swiper('.swiper-container', {
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

function burgerMenu(selector) {
  const menu = $(selector);
  const button = menu.find('.burger-menu__button', '.burger-menu__lines');
  const links = menu.find('.burger-menu__link');
  const overlay = menu.find('.burger-menu__overlay');

  button.on('click', (e) => {
    e.preventDefault();
    toggleMenu();
  });

  links.on('click', () => toggleMenu());
  overlay.on('click', () => toggleMenu());

  function toggleMenu() {
    menu.toggleClass('burger-menu__active');
    if (menu.hasClass('burger-menu__active')) {
      $('body').scss('overlow', 'hidden');
    } else {
      $('body').scss('overlow', 'visible');
    }
  }
}

burgerMenu('.burger-menu');
