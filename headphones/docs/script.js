const icons = document.querySelectorAll(".feature-icon");

/* Animation */
const observer = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("animate");
                observer.unobserve(entry.target);
            }
        });
    },
    {
        threshold: 0.5
    }
);

icons.forEach((icon) => observer.observe(icon));

/* Mobile Navigation Toggle */
function openNav() {
    const navWrapper = document.querySelector(".nav-wrapper");
    const navList = document.querySelector(".nav-list");
    const openMenu = document.querySelector(".menu-open");
    const closeMenu = document.querySelector(".menu-close");

    navWrapper.classList.toggle("open");

    if (navWrapper.classList.contains("open")) {
        openMenu.style.display = "none";
        closeMenu.style.display = "block";

        navList.style.display = "block";
    } else {
        openMenu.style.display = "block";
        closeMenu.style.display = "none";
        navList.style.display = "none";
    }
}

document.querySelectorAll(".nav-list .nav-link").forEach((link) => {
    link.addEventListener("click", () => {
        const navWrapper = document.querySelector(".nav-wrapper");
        const navList = document.querySelector(".nav-list");
        const menuOpen = document.querySelector(".menu-open");
        const menuClose = document.querySelector(".menu-close");

        navWrapper.classList.remove("open");
        navList.classList.remove("scrolled-open");
        navList.style.display = "none";
        menuClose.style.display = "none";
        menuOpen.style.display = "block";
    });
});

/* This is to dynamically add spacing to the top of header,
 * so as to allow room for mobile menu to display without
 * overlapping hero content.
 *
 * PS: navbar is fixed. */
window.addEventListener("DOMContentLoaded", () => {
    const navbarWrapper = document.querySelector(".navbar-wrapper");
    const hero = document.querySelector("header");
    const navHeight = navbarWrapper.offsetHeight;

    hero.style.paddingTop = `${navHeight}px`;
});

window.addEventListener("scroll", () => {
    const navWrapper = document.querySelector(".nav-wrapper");
    const navList = document.querySelector(".nav-list");

    const navbarWrapper = document.querySelector(".navbar-wrapper");
    const hero = document.querySelector("header");
    const navHeight = navbarWrapper.offsetHeight;

    const headerBottom = hero.offsetTop + hero.offsetHeight;
    const scrollPosition = window.scrollY;

    if (scrollPosition > 0) {
        navbarWrapper.classList.add("scrolled");
    } else {
        navbarWrapper.classList.remove("scrolled");
    }

    if (navWrapper.classList.contains("open")) {
        if (scrollPosition > 0) {
            navList.classList.add("scrolled-open");
        } else {
            navList.classList.remove("scrolled-open");
        }
    } else if (navWrapper.classList.contains("open") || scrollPosition > 0) {
        navList.classList.add("scrolled-open");
    }
});
