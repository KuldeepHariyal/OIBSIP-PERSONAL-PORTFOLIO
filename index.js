window.addEventListener("scroll", function () {
    var header = document.querySelector(".header");
    header.classList.toggle('sticky', window.scrollY > 0);
});

const mobile_nav = document.querySelector(".menu_btn");
        const navbar = document.querySelector(".header");
        const toggleNavbar = () => {
            navbar.classList.toggle("active");
        };
        mobile_nav.addEventListener("click", () => toggleNavbar());