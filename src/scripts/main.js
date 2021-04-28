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
  const button = menu.find('.burger-menu_button', '.burger-menu_lines');
  const links = menu.find('.burger-menu_link');
  const overlay = menu.find('.burger-menu_overlay');

  button.on('click', (e) => {
    e.preventDefault();
    toggleMenu();
  });

  links.on('click', () => toggleMenu());
  overlay.on('click', () => toggleMenu());

  function toggleMenu() {
    menu.toggleClass('burger-menu_active');
    if (menu.hasClass('burger-menu_active')) {
      $('body').scss('overlow', 'hidden');
    } else {
      $('body').scss('overlow', 'visible');
    }
  }
}

burgerMenu('.burger-menu');
