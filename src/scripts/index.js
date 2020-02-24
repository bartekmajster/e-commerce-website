import { debounce} from './animation';
import navAnimation from './nav';
import footerResize from './footerResize';
import handleClick from './hamburger';

const nav = document.querySelector('.navigation');
const links = nav.querySelectorAll('a');

links.forEach((link) => {
  link.addEventListener('click', handleClick);
  link.addEventListener('click', footerResize);
});

const hamburger = document.querySelector('.hamburger');
hamburger.addEventListener('click', handleClick);

window.onload = () => {

  if (window.innerWidth < 970) {
    footerResize();
  }
};

window.addEventListener('scroll', debounce(navAnimation));
