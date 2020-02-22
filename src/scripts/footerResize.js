export default function footerResize() {
  const footer = document.querySelector('.footer__top');
  footer.style.gridTemplateColumns = '1fr 1fr 1fr';

  if (window.innerWidth < 550) {
    footer.style.gridTemplateColumns = '1fr';
    footer.style.gridTemplateRows = '1fr 1fr 1fr 1fr 1fr';
  }
}
