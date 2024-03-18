let hamburgerMenu = document.getElementById('hamburgerMenu');
let closeHamburgerMenu = document.getElementById('closeHamburgerMenu');
let sidebar = document.getElementById('sidebar');
let avatarButton = document.getElementById('avatarButton');
let avatarMenu = document.getElementById('avatarMenu');
let main = document.getElementById('main');
let langButton = document.getElementById('langButton');
let langMenu = document.getElementById('langMenu');

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
    } else {
        avatarMenu.classList.add('hidden');
    }
});

langButton.addEventListener('click', () =>{
    if(langMenu.classList.contains('hidden')){
        langMenu.classList.remove('hidden');
    } else {
        langMenu.classList.add('hidden');
    }
});

main.onclick = (e) => {
    if(!avatarMenu.classList.contains('hidden') && !avatarMenu.contains(e.target)){
        avatarMenu.classList.add('hidden');
        console.log('gak iso wleeek!');
    }

    if(!langMenu.classList.contains('hidden') && !langMenu.contains(e.target)){
        langMenu.classList.add('hidden');
    }

    if(!sidebar.classList.contains('-translate-x-full') && !sidebar.contains(e.target)){
        sidebar.classList.remove('translate-x-full');
        sidebar.classList.add('-translate-x-full');
    }
}