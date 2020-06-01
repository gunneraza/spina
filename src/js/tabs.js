import AOS from "aos";

let tabs = document.querySelectorAll('.services-tab__item');
let contents = document.querySelectorAll('.services-content');

tabs.forEach(element => {
    element.addEventListener('click', (event) => {
        let target = event.target;
        let index = target.getAttribute('data-index');

        tabs.forEach(tab => {
            tab.classList.remove('active');
        })

        contents.forEach(content => {
            content.classList.remove('active')

            if (content.classList.contains('aos-animate')) {
                content.classList.remove('aos-animate');
            }

            if (content.hasAttribute('data-aos')) {
                content.setAttribute('data-aos', 'false');
            }
        })

        target.classList.add('active');

        contents.forEach(content => {
            if (content.id === index) {
                content.classList.add('active');
                content.setAttribute('data-aos', 'slide-right')
                AOS.refreshHard()
                AOS.refresh()
            }
        })
    })
})
