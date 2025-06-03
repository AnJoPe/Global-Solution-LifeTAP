const header_element = document.getElementById('header-global');
const navbar_element = document.getElementById('navbar-selector');
const menu_hamburguer_selector = document.getElementById('menu-hamburguer-selector');

const altura_janela = window.innerHeight;

let navbarAberta = 0;

window.addEventListener('scroll', () => {
    if (window.scrollY == 0){
        header_element.className = ""
    }
    else if (window.scrollY > altura_janela * .09){
        header_element.className = "header-transparente-baixo"
    }
});

menu_hamburguer_selector.addEventListener('click', () => {
    if(navbarAberta == 0) {
        navbarAberta = 1;
        navbar_element.className = "navbar-links navbar-links-open"
        menu_hamburguer_selector.src = "Assets/Icons/menu_fechar_branco.png"
    }
    else if(navbarAberta == 1) {
        navbarAberta = 0;
        navbar_element.className = "navbar-links"
        menu_hamburguer_selector.src = "Assets/Icons/menu_hamburguer_branco.png"
    }
});