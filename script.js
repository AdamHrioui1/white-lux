const navbar = document.getElementById('navbar')
const burger = document.getElementById('burger')
const menu = document.getElementById('menu')
var burger_counter = 0

burger.addEventListener('click', () => {
    if(burger_counter === 0) {
        menu.style.left = '0%'
        burger.classList.add('on')
        burger_counter = 1
    }
    else {
        menu.style.left = '100%'
        burger.classList.remove('on')
        burger_counter = 0
    }
})

window.addEventListener('scroll', (e) => {
    console.log(window.scrollY);
    if(window.scrollY >= 635) {
        navbar.classList.add('fixed')
    } else {
        navbar.classList.remove('fixed')
    }

    if(window.innerWidth >= 1000 && window.scrollY >= 2000) {
        navbar.classList.remove('fixed')
    }
})
const left_arrow = document.getElementById('left_arrow')
const right_arrow = document.getElementById('right_arrow')
const some_elements = document.getElementById('some_elements')

var counter = 0

left_arrow.addEventListener('click', () => {
    if(counter < 0) {
        counter += 250
        some_elements.style.left = counter + "px"
        console.log(counter);
    } else {
        counter = 0
        console.log(counter);
    }
})

right_arrow.addEventListener('click', () => {
    if(counter > -2500) {
        counter -= 250
        some_elements.style.left = counter + "px"
        console.log(counter);
    } else {
        counter = -2500
        console.log(counter);
    }
})
