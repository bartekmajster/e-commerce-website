import 'styles/pages/main-page.scss';

import insta from './insta';
import { debounce, checkSlide } from './animation';

insta();

window.addEventListener('scroll', debounce(checkSlide));
