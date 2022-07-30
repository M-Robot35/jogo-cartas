const gridLayout = document.querySelector('.grid');
const player = document.querySelector('.player');
const limitTime = document.querySelector('.timer');

document.querySelector('.btn-foote-reload').addEventListener('click',()=>{
    location.reload()
})

const imgCards = [
    'beth',
    'jerry',
    'jessica',
    'morty',
    'pessoa-passaro',
    'pickle-rick',
    'rick',
    'summer',
    'meeseeks',
    'scroopy'
]

const cardElement = (tag, className)=>{
    const elemento = document.createElement(tag);
    elemento.className = className;
    return elemento
}

const checkedEndGame = ()=>{
    const allCards = document.querySelectorAll('.win-desable');

    if(allCards.length === 20){
        clearInterval(this.loop)
    }
};

let firstCard = '';
let secondCard = '';

const checkCard = ()=>{    
    
    const firstCharacter = firstCard.getAttribute('data-character');
    const secondCharacter = secondCard.getAttribute('data-character');

    if (firstCharacter == secondCharacter){

        firstCard.firstChild.classList.add('win-desable')
        secondCard.firstChild.classList.add('win-desable')
        
        firstCard = '';
        secondCard = '';

        checkedEndGame();
        
    }else{
        setTimeout(()=>{
            firstCard.classList.remove('revel-card')
            secondCard.classList.remove('revel-card')
            firstCard = '';
            secondCard = '';
            
        },700)
    }
}

const revelaCarta = ({ target })=>{
    if(target.parentNode.className.includes('revel-card')){
        // console.log('carta já revelada')
        return
    };
    
    if(firstCard === ''){
        target.parentNode.classList.add('revel-card');
        firstCard = target.parentNode

    }else if (secondCard === ''){
        target.parentNode.classList.add('revel-card');
        secondCard = target.parentNode        
        checkCard();
    };

}

const criarElemento = (character)=>{
    const card = cardElement('div', 'cards');
    const front = cardElement('div', 'face front');
    const back = cardElement('div', 'face back');
    
    card.appendChild(front);
    card.appendChild(back); 

    front.style.backgroundImage = `url(../img/${character}.png)`
    
    card.addEventListener('click', revelaCarta);
    card.setAttribute('data-character',character)
    return card
}


const loadGame = ()=>{
    const characterDuplicate = [...imgCards, ...imgCards];
    const embaralhadoCards = characterDuplicate.sort(()=>Math.random() - 0.5);
    embaralhadoCards.forEach(imgcard => {
        const card = criarElemento(imgcard)
        gridLayout.appendChild(card)
    });
    
}

const startTimer = ()=>{
    this.loop = setInterval(()=>{
        const currentTimer = +limitTime.innerHTML;
        if(currentTimer < 9){
            limitTime.innerHTML = `0${currentTimer + 1}`
        }else{
            limitTime.innerHTML = currentTimer + 1
        }
    },1000)
}

window.onload = ()=>{
    const gamePlayer = sessionStorage.getItem('player');
    if (gamePlayer === null){
        window.location = '../index.html';
        return
    }
    player.innerHTML = gamePlayer;
    startTimer()
    loadGame();
}



