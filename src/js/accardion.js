
let accardions = document.querySelectorAll('.accardion');

accardions.forEach(element => {
    element.addEventListener('click', (event) => {
        let target = event.target;
        if (target.closest('.accardion__button')) {
            let accardion = target.closest('.accardion');
            let contentHeight = getComputedStyle(accardion.querySelector('.accardion__content')).height;
            let footer = accardion.querySelector('.accardion__footer');

            if (element.classList.contains('active')) {
                element.classList.remove('active');
                footer.style.height = '0'
            } else {
                accardions.forEach(item => {
                    if (item.classList.contains('active')) {
                        let itemContent = getComputedStyle(item.querySelector('.accardion__content')).height;
                        item.querySelector('.accardion__footer').style.height = '0';
                        item.classList.remove('active');

                    }
                })


                accardion.classList.add('active')
                footer.style.height = contentHeight;
            }


        }
    })
})