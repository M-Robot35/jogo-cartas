const statusNome = document.querySelector('.status-playerinfo');
const modalConteiner = document.querySelector('.conteiner-modal');
const modalClose = document.querySelector('.close-modal');

const btnVoltar = document.querySelector('.btn-foote-back');
const btnReload = document.querySelector('.btn-foote-reload');


statusNome.innerHTML = sessionStorage.getItem('player');
statusNome.style.textTransform = 'capitalize';

modalConteiner.addEventListener('click',({ target  })=>{
    const click = target.className  

    if (click === 'close-modal' || click === 'conteiner-modal'){
        modalConteiner.style.display = 'none'
    }
})

btnVoltar.addEventListener('click',(e)=>{
    modalConteiner.style.display = 'none'

})

btnReload.addEventListener('click',(event)=>{
    modalConteiner.style.display = 'none'
    location.reload()

})




