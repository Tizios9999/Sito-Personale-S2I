const hamBtn = document.getElementById("ham-btn");
const sideNav = document.querySelector(".side-nav");
const mainContent = document.querySelector(".main-content");
const navTop = document.querySelector(".nav-top");

hamBtn.addEventListener("click", function () {
    sideNav.classList.remove("d-none");
    mainContent.classList.add("shadowed");
    navTop.classList.add("shadowed");
})

