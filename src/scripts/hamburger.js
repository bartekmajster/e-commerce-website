const hamburger = document.querySelector('.hamburger');
const nav = document.querySelector('.navigation');
const body = document.querySelector('body');
const overlap = document.querySelector('.overlap');

let flag = false;

const handleClick = () => {
  flag = !flag;
  hamburger.classList.toggle('hamburger--active');
  nav.classList.toggle('navigation--active');
  overlap.classList.toggle('overlap--active');
  body.style.overflow = 'hidden';

  if (flag) {
    body.style.overflowY = 'hidden';
  } else {
    body.style.overflowY = 'scroll';
  }
};


export default handleClick;
