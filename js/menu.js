(function(){

    const openButton = document.querySelector('.nav__menu');
    const menu = document.querySelector('.nav__list');
    const closeMenu = document.querySelector('.nav__close');

    openButton.addEventListener('click', ()=>{
        menu.classList.add('nav__list--show')
    })

    closeMenu.addEventListener('click', ()=>{
        menu.classList.remove('nav__list--show');
    })
})();