import './styles.scss'
import Swiper, { Navigation, Pagination, Autoplay } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';

Swiper.use([Navigation, Pagination, Autoplay]);

// init Swiper:
//const swiper = new Swiper(...);


var hamburgerBtn = document.querySelector('.navicon');
var hamburgerMenu = document.querySelector('.menu__hamburger');


hamburgerBtn.addEventListener('click', function() {

    var hamDisplay = hamburgerMenu.style.display;

    if (hamDisplay !== 'flex') {

        hamburgerMenu.style.display = 'flex';
        hamburgerMenu.style.height = '100vh';
    }

    else {

        hamburgerMenu.style.display = 'none';
        hamburgerMenu.style.height = '';
    }
    
})

const swiperHeros = new Swiper('.acc__heros', {
  direction: 'horizontal',
  loop: true,
  speed: 600,

  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },

  pagination: {
    el: '.swiper-pagination',
  },

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

 
});

const swiperFooter = new Swiper('.pied-page__swiper', {
  direction: 'horizontal',
  loop: true,
  speed: 600,

  autoplay: {
    delay: 4000,
    disableOnInteraction: false,
  },

  pagination: {
    el: '.swiper-pagination',
  },

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  scrollbar: {
    el: '.swiper-scrollbar',
  },
});