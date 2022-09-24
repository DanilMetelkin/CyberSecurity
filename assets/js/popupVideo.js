let video = document.querySelector('.rewiev__video_item')
let popup = document.querySelector('.popup')

video.addEventListener('click', () => {
popup.style.display = 'flex'
popup.innerHTML = `
<div></div>
<video controls autoplay muted src=${video.src}><video>
`
body.classList.toggle('active')

document.querySelector('.popup div').addEventListener('click', () => {

    popup.style.display = 'none'
    popup.innerHTML = ''
    body.classList.toggle('active')
})

})