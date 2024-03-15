let hamburgerMenu = document.getElementById('hamburgerMenu');
let closeHamburgerMenu = document.getElementById('closeHamburgerMenu');
let sidebar = document.getElementById('sidebar');

hamburgerMenu.addEventListener('click', () => {
    if(sidebar.classList.contains('-translate-x-full')){
        sidebar.classList.remove('-translate-x-full');
    } else {
        sidebar.classList.add('-translate-x-full');
    }
});

closeHamburgerMenu.addEventListener('click', () => {
    sidebar.classList.add('-translate-x-full');
});