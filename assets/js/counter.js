let digitOne = document.querySelector('.digits__digit_one')
let digitTwo = document.querySelector('.digits__digit_two')
let digitThree = document.querySelector('.digits__digit_three')

let numOne = parseInt(digitOne.innerHTML.split(',').join(''))
let numTwo = parseInt(digitTwo.innerHTML.split('').slice(1,5).join('').split('').slice(0, 2).join(''))
let numThree = parseInt(digitThree.innerHTML.split(',').join(''))

let countOne= 0, countTwo= 0.1, countThree = 0

let funcCountingOne = () => {
    if(countOne < 126) {
        countOne += 2
        digitOne.innerHTML = `${countOne},300`
    }
}

let funcCountingTwo = () => {
    if(countTwo < 20.1) {
        countTwo += 2
        digitTwo.innerHTML = '$' + `${countTwo}bn`
    }
}

let funcCountingThree = () => {
    if(countThree < 45) {
        countThree += 1
        digitThree.innerHTML = `${countThree},511`
    }
}

let scrollEvent = new UIEvent('scroll');

window.addEventListener('scroll', () => {
    if (parseInt(window.pageYOffset) >= 110) {
        setInterval(funcCountingOne, 60)
        setInterval(funcCountingTwo, 180)
        setInterval(funcCountingThree, 60)
    }
    
}, false)

window.dispatchEvent('scroll')