var menuOpen = document.querySelector(".header__burger");
var menu = document.querySelector(".main-navigation");
var nojs = document.querySelector(".header");

nojs.classList.remove("header__no-js");

menuOpen.addEventListener("click", function(evt) {
    if (menu.classList.contains("main-navigation__close")) {
        menu.classList.remove("main-navigation__close");
        menu.classList.add("main-navigation__open");
    } else {
        menu.classList.add("main-navigation__close");
        menu.classList.remove("main-navigation__open");
    }
});