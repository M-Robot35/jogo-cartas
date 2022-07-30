const input_login = document.querySelector('.input-login');
const form_login = document.querySelector('.login-form');
const btn_login = document.querySelector('.btn-login');


input_login.addEventListener('input', ({ target })=>{
    input_login.style.textTransform = 'capitalize';
        
    if(target.value.length > 3){
        btn_login.removeAttribute('disabled','');

        
        
        return
    }    
    btn_login.setAttribute('disabled','');    
})

// SALVA O NOME DO PLAYER
form_login.addEventListener('submit', (event)=>{
    event.preventDefault()

    sessionStorage.setItem('player', input_login.value)
    input_login.value = ''

    window.location='pages/game.html';
})