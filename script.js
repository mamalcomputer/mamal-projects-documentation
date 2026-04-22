const header = document.querySelector(".header");

window.addEventListener("scroll", () => {
    const scrollY = window.scrollY;

    if (scrollY > 500) {
        header.classList.toggle("fixed")
    } 
});