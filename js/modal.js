const statusNome = document.querySelector('.status-playerinfo');
const modalConteiner = document.querySelector('.conteiner-modal');
const modalClose = document.querySelector('.close-modal');

statusNome.innerHTML = sessionStorage.getItem('player');
statusNome.style.textTransform = 'capitalize';

modalClose.addEventListener('click',()=>{
    modalConteiner.style.display = 'none'
})

modalConteiner.addEventListener('click',()=>{
    modalConteiner.style.display = 'none'
})


document.querySelector('.btn-foote-reload').addEventListener('click',()=>{
    location.reload()
})






