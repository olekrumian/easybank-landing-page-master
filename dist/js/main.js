const btnHamburger = document.querySelector('#btnHamburger');
const body = document.querySelector('body');
const header = document.querySelector('.header');
const overlay = document.querySelector('.overlay');
const fadeElemes = document.querySelectorAll('.has-fade');

btnHamburger.addEventListener('click', function () {

    if (header.classList.contains('open')) { //Close Hamburger menu
        body.classList.remove('noscroll');
        header.classList.remove('open');
        fadeElemes.forEach(function (element) {
            element.classList.remove('fade-in');
            element.classList.add('fade-out');
        })

    } else { //Open Hamburger menu
        body.classList.add('noscroll');
        header.classList.add('open');
        fadeElemes.forEach(function (element) {
            element.classList.remove('fade-out');
            element.classList.add('fade-in');
        })

    }
});