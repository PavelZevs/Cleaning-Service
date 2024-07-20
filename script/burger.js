document.addEventListener('DOMContentLoaded', function () {
    var burgerButton = document.getElementById('burger');
    var navLinks = document.querySelector('.nav__link');

    burgerButton.addEventListener('click', function () {
        navLinks.classList.toggle('show');
    });
});
