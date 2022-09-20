let position = 0;
let container = document.querySelector('.intro__slider')
let sliderToggleFirst = document.querySelector('.slider__button_first')
let sliderToggleSecond = document.querySelector('.slider__button_second')
let sliderToggleThird = document.querySelector('.slider__button_third')



let slidesToShow = 1
let slidesToScroll = 1
let tape = document.querySelector('.slider__tape')
let items = document.querySelectorAll('.slider__tape-item')
let itemsCount = items.length
let itemWidth = container.clientWidth / slidesToShow
let movePosition = itemWidth * slidesToShow

items.forEach((item) => {
item.style.minWidth = `${itemWidth}px`
})

function setPositionX() {
        tape.style.transform = `translateX(${position}px)`
    }

    sliderToggleFirst.addEventListener('click', () => {
        position = 0
        definiteBtn()
        setPositionX()
    })

    sliderToggleSecond.addEventListener('click', () => {
        position = -(itemWidth)
        definiteBtn()
        setPositionX()
        
    })

    sliderToggleThird.addEventListener('click', () => {
        position = -(itemWidth*2)
        definiteBtn()
        setPositionX()
    })

    function definiteBtn() {
        if (position === 0) {
            sliderToggleFirst.classList.add('active')
            sliderToggleSecond.classList.remove('active')
            sliderToggleThird.classList.remove('active')
        }
        else if (position === -(itemWidth)) {
            sliderToggleFirst.classList.remove('active')
            sliderToggleSecond.classList.add('active')
            sliderToggleThird.classList.remove('active')
        }
        else if (position === -(itemWidth*2)) {
            sliderToggleFirst.classList.remove('active')
            sliderToggleSecond.classList.remove('active')
            sliderToggleThird.classList.add('active')
        }
    }

function timeFunc() {
    const itemsLeft = itemsCount - (Math.abs(position) - slidesToShow * itemWidth) / itemWidth
    position -= itemsLeft >= slidesToShow ? movePosition : itemsLeft * itemWidth
    if (itemsLeft < itemsCount) {
        position=0
    }
    definiteBtn()
    setPositionX()
}

definiteBtn()
setInterval(timeFunc, 4000)