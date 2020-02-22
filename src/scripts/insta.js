function insta() {
  const informations = [...document.querySelectorAll('.pic__info')];
  const slider = document.querySelector('.insta__gallery');

  informations.forEach((info) => {
    info.addEventListener('mouseover', () => {
      // eslint-disable-next-line no-param-reassign
      info.style.opacity = '1';
    });
    info.addEventListener('mouseout', () => {
      // eslint-disable-next-line no-param-reassign
      info.style.opacity = '0';
    });
  });

  let isDown = false;
  let startX;
  let scrollLeft;

  document.addEventListener('mousedown', (e) => {
    isDown = true;
    slider.classList.add('active');
    startX = e.pageX - slider.offsetLeft;
    scrollLeft = slider.scrollLeft;
  });
  document.addEventListener('mouseleave', () => {
    isDown = false;
    slider.classList.remove('active');
  });
  document.addEventListener('mouseup', () => {
    slider.classList.remove('active');
    isDown = false;
  });
  document.addEventListener('mousemove', (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - slider.scrollLeft;
    const walk = x - startX;
    slider.scrollLeft = (scrollLeft - walk) / 2;
  });
}

export default insta;
