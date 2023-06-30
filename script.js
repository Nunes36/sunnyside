const btnMobile = document.querySelector('.btn-mobile')

function toggleMenu(event) {
    if(event.type === 'touchstart') event.preventDefault();
    const menu = document.querySelector('.menu')
    menu.classList.toggle('active')
}

btnMobile.addEventListener('click', toggleMenu);
btnMobile.addEventListener('touchstart', toggleMenu);