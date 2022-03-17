const openMenuBtn = document.querySelector('.toggle-menu');
const seasonsMenu = document.querySelector('.seasons');


openMenuBtn.addEventListener('click', () => {
    seasonsMenu.classList.toggle('open');
    openMenuBtn.classList.toggle('rotate');
})