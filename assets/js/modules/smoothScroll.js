function scrollTo(element) {
    window.scroll({
        left: 0,
        top: element.offsetTop,
        behavior: 'smooth'
    })
}

let btn = document.querySelector('.intro__smoothScroll')
let services = document.querySelector('.services')

btn.addEventListener('click', () => {
    scrollTo(services)
})