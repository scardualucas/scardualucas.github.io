var btnMenu = document.querySelector(".btn-menu");
var btnClose = document.querySelector(".btn-close");
var menu = document.querySelector(".menu");

var abreMenu = function() {    

    if (menu.classList.contains("closed")) {

        if (window.innerWidth > 1200) {

            menu.style.height = "60px";
            menu.classList.remove("closed");
            menu.classList.add("opened");

        } else if (window.innerWidth > 750) {
            
            menu.style.height = "75px";
            menu.classList.remove("closed");
            menu.classList.add("opened");

        } else {

            menu.style.height = "50px";
            menu.classList.remove("closed");
            menu.classList.add("opened");

        }
    }

    btnClose.style.display = "flex";
}

var fechaMenu = function() {

    if (menu.classList.contains("opened")) {

        menu.style.height = "0px";
        menu.classList.remove("opened");
        menu.classList.add("closed");
        
    }

    btnClose.style.display = "none";

}

btnMenu.addEventListener("click", abreMenu);
btnClose.addEventListener("click", fechaMenu);