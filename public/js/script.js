let hamburgerMenu = document.getElementById('hamburgerMenu');
let closeHamburgerMenu = document.getElementById('closeHamburgerMenu');
let sidebar = document.getElementById('sidebar');
let avatarButton = document.getElementById('avatarButton');
let avatarMenu = document.getElementById('avatarMenu');
let main = document.getElementById('main');

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

avatarButton.addEventListener('click', (e) => {
    if(avatarMenu.classList.contains('hidden')){
        avatarMenu.classList.remove('hidden');
        avatarMenu.classList.add('block');
    } else {
        avatarMenu.classList.remove('block');
        avatarMenu.classList.add('hidden');
    }
});

main.onclick = (e) => {
    if(!avatarMenu.classList.contains('hidden') && !avatarMenu.contains(e.target)){
        avatarMenu.classList.remove('block');
        avatarMenu.classList.add('hidden');
        console.log('gak iso wleeek!');
    }

    if(!sidebar.classList.contains('-translate-x-full') && !sidebar.contains(e.target)){
        sidebar.classList.remove('translate-x-full');
        sidebar.classList.add('-translate-x-full');
    }
}