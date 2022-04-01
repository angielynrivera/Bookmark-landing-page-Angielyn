
function showSubMenu(){
    
    var burger = document.querySelector("#hamburger");
    var subMenu = document.querySelector(".header-submenu");

    burger.addEventListener('click', () =>{
        subMenu.classList.toggle('active');
    });
}

function closeSubMenu(){
    var burger = document.querySelector("#close");
    var subMenu = document.querySelector(".header-submenu");

    burger.addEventListener('click', () =>{
        subMenu.classList.remove('active');
    });
}



function start(){
    showSubMenu();
    closeSubMenu();
}
start();

