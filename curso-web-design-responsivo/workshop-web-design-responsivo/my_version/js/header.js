document.querySelector('.btn-open-menu').onclick = function() {
    document.querySelector('.menu').classList.add('menu--visible')
    document.querySelector('.disable-background-page').classList.add('disable-background-page--activited')
}

document.querySelector('.btn-close-menu').onclick = function() {
    document.querySelector('.menu').classList.remove('menu--visible')
    document.querySelector('.disable-background-page').classList.remove('disable-background-page--activited')
}

document.querySelector('.disable-background-page').onclick = function(event) {
    document.querySelector('.menu').classList.remove('menu--visible')
    document.querySelector('.disable-background-page').classList.remove('disable-background-page--activited')
}



// document.querySelector('.menu-abrir').onclick = function() {
//     document.documentElement.classList.add('menu-ativo');
// };

// document.querySelector('.menu-fechar').onclick = function() {
//     document.documentElement.classList.remove('menu-ativo');
// };

// document.documentElement.onclick = function(event) {
//     if (event.target === document.documentElement) {
//         document.documentElement.classList.remove('menu-ativo');
//     }
// };