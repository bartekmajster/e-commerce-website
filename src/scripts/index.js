import 'styles/index.scss';

import navAnimation from './nav';
import insta from './insta';
import handleClick from './hamburger';
import App from './spa';
import footerResize from './footerResize';
import { debounce, checkSlide } from './animation';

const nav = document.querySelector('.navigation');
const links = nav.querySelectorAll('a');

links.forEach((link) => {
  link.addEventListener('click', handleClick);
  link.addEventListener('click', footerResize);
});

const hamburger = document.querySelector('.hamburger');
hamburger.addEventListener('click', handleClick);

window.onload = () => {
  insta();
  if (window.innerWidth < 970) {
    footerResize();
  }
};

window.addEventListener('scroll', debounce(navAnimation));

/*----------------
  SCROLL ANIMATION
  ----------------*/

document.addEventListener('DOMContentLoaded', () => {
  const app = new App();
  app.init();
});

window.addEventListener('scroll', debounce(checkSlide));
