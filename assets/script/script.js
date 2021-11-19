const burger = document.getElementById("burgerIcon");
const navbar = document.getElementById("mainNavbar");

burger.addEventListener('click', function() {
    const check = burger.classList.contains('active');
    if(!check) {
        burger.classList.add('active')
        navbar.classList.remove('hidden-navbar')
    }else{
        burger.classList.remove('active')
        navbar.classList.add('hidden-navbar')
    }
});
