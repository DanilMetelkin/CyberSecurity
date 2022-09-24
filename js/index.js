//burger
const burger = document.querySelector('.header__burger')
const body = document.querySelector('.page-body')
const nav = document.querySelector('.header__nav')

burger.addEventListener('click', () => {
    body.classList.toggle('active')
    burger.classList.toggle('active')
    nav.classList.toggle('active')
})