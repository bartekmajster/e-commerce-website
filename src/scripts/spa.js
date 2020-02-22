export default class App {
  constructor() {
    this.pages = [...document.querySelectorAll('.page')];
    this.show = new Event('show');
    this.lastPage = localStorage.getItem('page') || 'home';
  }

  init() {
    this.pages.forEach((page) => {
      if (page.classList.contains('active')) {
        page.classList.remove('active');
      }
    });

    this.pages.forEach((page) => {
      if (page.id === `${this.lastPage}`) {
        page.classList.add('active');
      }
    });

    document.querySelectorAll('.nav__link')
      .forEach((link) => {
        link.addEventListener('click', this.nav);
      });
    history.replaceState({}, `${this.lastPage}`, `#${this.lastPage}`);
    window.addEventListener('popstate', this.poppin);
  }

  // eslint-disable-next-line class-methods-use-this
  nav(e) {
    e.preventDefault();
    const currentPage = e.target.getAttribute('data-target');
    document.querySelector('.active').classList.remove('active');
    document.getElementById(currentPage).classList.add('active');
    history.pushState({}, currentPage, `#${currentPage}`);
    localStorage.setItem('page', currentPage);
  }

  // eslint-disable-next-line class-methods-use-this
  poppin() {
    const hash = location.hash.replace('#', '');
    document.querySelector('.active').classList.remove('active');
    document.getElementById(hash).classList.add('active');
  }
}
