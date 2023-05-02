const header = document.querySelector("header")
window.addEventListener("scroll", function(){
    header.classList.toggle("sticky",window.scrollY > 0);
})

let menu = document.querySelector('Icones-domenu');
let navbar = document.querySelector('.navbar');
menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('active');

}