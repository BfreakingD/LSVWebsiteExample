let menuButton = document.getElementById("menuIcon");
let menu = document.getElementById("menu");
let menuItems = document.getElementsByClassName("menuItem");


menuButton.onmousedown = () => {
    if(!menu.classList.contains("menuActive")) {
        menu.classList.add("menuActive");
    } else {
        menu.classList.remove("menuActive");
    }
}

function menuDisappearOnClick() {
    menu.classList.remove("menuActive");
}

for (let i = 0; i < menuItems.length; i++) {

    menuItems[i].addEventListener("click", menuDisappearOnClick);
}


