const navbar = document.querySelector(".header__navbar--img");
const navlist = document.querySelector(".header__navlist");


navbar.addEventListener("click",()=>{
    navlist.classList.toggle("header__navlist--active");
});