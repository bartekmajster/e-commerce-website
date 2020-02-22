const nav = document.querySelector('.nav');
const hamburger = document.querySelector('.hamburger');

export default function navAnimation() {
  if (window.innerWidth > 840) {
    if (window.scrollY > nav.offsetTop) {
      nav.style.transform = 'translateY(-40px)';
      nav.style.height = '60px';
      hamburger.style.transform = 'translateY(-50px)';
    } else {
      nav.style.transform = 'translateY(0px)';
      nav.style.height = '80px';
      hamburger.style.transform = 'translateY(0px)';
    }
  } else {
    hamburger.style.transform = 'translateY(0px)';
    if (window.scrollY > 40) {
      nav.style.height = '60px';
      hamburger.style.top = '20px';
    } else {
      nav.style.height = '80px';
      hamburger.style.top = '30px';
    }
  }
}
