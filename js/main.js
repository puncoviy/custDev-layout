const burgerBtn = document.querySelector('.burger-box');
const burgerIcon = document.querySelector('.burger-menu');
const menuList = document.querySelector('.header__menu-list');

const cityBtn = document.querySelector('.header__city-icon');
const cityList = document.querySelector('.header__city-list');
const cityLink = document.querySelectorAll('.header__city-link');

const meetup = document.querySelector('.promo__subtitle');

const videoBox = document.querySelector('.features__video-container');
const video = document.querySelector('.features__video-container video');

burgerBtn.addEventListener('click', function(){
    cityList.classList.remove('active');
    burgerIcon.classList.toggle('active');
    menuList.classList.toggle('active');
    window.addEventListener('scroll', function() {
        if (window.scrollY > 100 && window.scrollY < 150) {
            burgerIcon.classList.remove('active');
            menuList.classList.remove('active');
        }
    })
})

cityBtn.addEventListener('click', function(){
    burgerIcon.classList.remove('active');
    menuList.classList.remove('active');
    cityList.classList.toggle('active');
    window.addEventListener('scroll', function() {
        if (window.scrollY > 100 && window.scrollY < 150) {
            cityList.classList.remove('active');
        }
    })
})

cityLink.forEach(function(link){
	link.addEventListener('click', function(e) {
        e.preventDefault();
		cityLink.forEach(function(link) {
			link.classList.remove('main')
		});
		link.classList.add('main');
        meetup.textContent = link.textContent + ' 10-21 мая';
        document.title = 'CustDev | ' + link.textContent;
	})
})

videoBox.addEventListener('click', function(){
    video.style.zIndex = 2;
    video.play();
    video.controls = true;
})

console.log(`Выполнено:
адаптивное меню, закрытие при скролле;
список городов, закрытие при скролле;
смена активного города в списке и в тайтле;

Дополнить:
закрытие меню при клике за его пределами без создания дополнительной оболочки;
смена текста отзывов;`)