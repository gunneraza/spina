let menu = document.querySelector('.mobile-menu__wrapper');

menu.addEventListener('click', (event) => {
    let target = event.target;
    if (target.closest('.mobile-button')) {
        document.body.classList.toggle('mobile-menu__active')
    }

    if (target.tagName === 'A') {
        document.body.classList.toggle('mobile-menu__active')
    }
})
