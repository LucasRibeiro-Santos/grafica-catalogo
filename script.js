const btnMobile = document.getElementById("header__btn-mobile")

function toggleMenu() {
    const nav = document.getElementsByClassName("header__child-navbar");
    nav.classList.toggle("active");
}

btnMobile.addEventListener("click", toggleMenu);
btnMobile.onclick