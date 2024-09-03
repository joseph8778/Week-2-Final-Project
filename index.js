function openBurger() {
    document.body.classList += " burger--open"
}


function closeBurger() {
    document.body.classList.remove('burger--open')
}

function checkScreenWidth() {
    if (window.innerWidth > 1024) {
        closeBurger();
    }
}

window.addEventListener('resize', checkScreenWidth);