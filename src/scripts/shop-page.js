import 'styles/pages/shop-page.scss';

const informations = [...document.querySelectorAll('.product__info')];

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
