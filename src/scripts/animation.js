export function debounce(func, wait = 20, immediate = true) {
  let timeout;
  // eslint-disable-next-line func-names
  return function () {
    const context = this;
    const
      // eslint-disable-next-line prefer-rest-params
      args = arguments;
    // eslint-disable-next-line func-names
    const later = function () {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    const callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
}

const sliderImages = document.querySelectorAll('.ease-in');

export function checkSlide() {
  sliderImages.forEach((sliderImage) => {
    const scroll = window.scrollY + window.innerHeight;
    const imageOffset = sliderImage.offsetTop + (sliderImage.clientHeight / 2);

    if (scroll > imageOffset) {
      sliderImage.classList.add('active');
    } else {
      sliderImage.classList.remove('active');
    }
  });
}
