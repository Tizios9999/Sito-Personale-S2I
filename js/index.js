const hamBtn = document.querySelector(".hamburger-button");
const sideNav = document.querySelector(".side-nav");
const mainContent = document.querySelector(".main-content");
const navTop = document.querySelector(".nav-top");
const sideNavList = document.getElementById("side-nav-list");

hamBtn.addEventListener("click", function () {
    sideNav.classList.remove("d-none");
    sideNav.classList.add("temporary-menu");
    mainContent.classList.add("shadowed");
    navTop.classList.add("shadowed");
})

sideNavList.addEventListener("click", function (e) {
    if (sideNav.classList.contains("temporary-menu")) {
        if (e.target.tagName="li") {
            sideNav.classList.remove("temporary-menu");
            sideNav.classList.add("d-none");
            mainContent.classList.remove("shadowed");
            navTop.classList.remove("shadowed");
        }
    } 
    
})