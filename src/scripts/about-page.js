import 'styles/pages/about-page.scss';

const links = document.querySelectorAll('.navBar__link');

function addClass(){
	this.classList.toggle('navBar__link--active');

	links.forEach(link =>{
		if(link === this) return;
		link.classList.remove('navBar__link--active');
	});
}

links.forEach(link => {
	link.addEventListener('click',addClass);
})
