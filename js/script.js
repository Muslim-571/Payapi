let openBtn = document.querySelector('.header__btn')
let closeBtn = document.querySelector('.menu__btn')
let menu = document.querySelector('.menu')
openBtn.addEventListener('click', function () {
    menu.classList.add('menu-open')
})
closeBtn.addEventListener('click', function () {
    menu.classList.remove('menu-open')
})