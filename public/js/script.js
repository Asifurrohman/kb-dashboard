let hamburgerMenu = document.getElementById('hamburgerMenu');
let closeHamburgerMenu = document.getElementById('closeHamburgerMenu');
let sidebar = document.getElementById('sidebar');

hamburgerMenu.addEventListener('click', () => {
    if(sidebar.classList.contains('sm:-translate-x-full')){
        sidebar.classList.remove('sm:-translate-x-full');
    } else {
        sidebar.classList.add('sm:-translate-x-full');
    }
});

closeHamburgerMenu.addEventListener('click', () => {
    sidebar.classList.add('sm:-translate-x-full');
});