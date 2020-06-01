import '../scss/app.scss';
import 'swiper/css/swiper.min.css';
import 'animate.css'
import Swiper from 'swiper';
import SwiperAnimation from '@cycjimmy/swiper-animation';
import 'aos/dist/aos.css'
import AOS from 'aos'
import SmoothScroll from 'smooth-scroll'
import axios from 'axios'

import './accardion'
import './tabs';
import './mobile_menu'



let scroll = new SmoothScroll('a[href*="#"]', {
    speed: 500
});

AOS.init();

const swiperAnimation = new SwiperAnimation();

let home_slider = new Swiper('.home-slider', {
    autoplay: {
        delay: 5000,
    },
    loop: true,
    on: {
        init: function () {
            swiperAnimation.init(this).animate();
        },
        slideChange: function () {
            swiperAnimation.init(this).animate();
        }
    },
    pagination: {
        el: '.home-pagination',
        clickable: true,
    }
})

let doctors = new Swiper('.doctors', {
    slidesPerView: 3,
    spaceBetween: 20,
    slidesPerGroup: 3,

    navigation: {
        nextEl: '.doctors-slider__next',
        prevEl: '.doctors-slider__prev'
    },

    pagination: {
        el: '.swiper-pagination',
        clickable: true
    },

    breakpoints: {
        200: {
            slidesPerView: 1,
            spaceBetween: 50,
            slidesPerGroup: 1,
        },

        768: {
            slidesPerView: 2,
            spaceBetween: 50,
            slidesPerGroup: 2,
        },

        992: {
            slidesPerView: 3,
            spaceBetween: 20,
            slidesPerGroup: 3,
        }
    }
});


let submit = document.querySelector('.submit');
let feedbackForm = document.querySelector('.feedback-form');


submit.addEventListener('click', e => {
    let target = e.target;
    e.preventDefault();
    let name = feedbackForm.name.value.trim().length;
    let number = feedbackForm.number.value.trim().length;
    let complete = feedbackForm.querySelector('.complete');
    let error = feedbackForm.querySelector('.error');
    let flag = false;

    if(name === 0) {
        error.classList.add('active');
    } else if (number === 0) {
        error.classList.add('active');
    } else {
        flag = true;
    }

    if(flag) {
        let date = new FormData();
        date.append('name', feedbackForm.name.value);
        date.append('number', feedbackForm.number.value);

        axios.post('/mail.php', date, {
            'Content-Type': 'application/x-www-form-urlencoded'
        }).then(response => {
            if(response.status === 200) {
                feedbackForm.name.value = '';
                feedbackForm.number.value = '';
                complete.classList.add('active');
            }
        })
    }
});
