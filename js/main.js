const overlay = document.querySelector('.overlay');
const modal = document.querySelector('.modal');
const sideBar = document.querySelector('.sidebar-icon');
const iconClose = document.querySelector('.icon-menu-close');



sideBar.addEventListener('click', ()=>{
    overlay.style.display = 'block';
    modal.style.display = 'flex';
})

iconClose.addEventListener('click', ()=>{
    overlay.style.display = 'none';
    modal.style.display = 'none';
})

window.addEventListener('resize', ()=>{
    if(window.innerWidth > 750){
        overlay.style.display = 'none';
        modal.style.display = 'none';
    }
})