document.addEventListener('DOMContentLoaded', () => {


    const cardArray = [
        {
            name: 'puppy-paw',
            img: 'images/Dog paw-pana.png',
        },
        {
            name: 'polarBear',
            img: 'images/Ice melting-bro.png',
        },
        {
            name: 'penguin',
            img: 'images/Penguin family-bro.png',
        },
        {
            name: 'cat',
            img: 'images/Playful cat-cuate.png',
        },
        {
            name: 'bat',
            img: 'images/Sleeping bat-rafiki.png',
        },
        {
            name: 'unicorn',
            img: 'images/Unicorn with rainbow-rafiki.png',
        },
        {
            name: 'puppy-paw',
            img: 'images/Dog paw-pana.png',
        },
        {
            name: 'polarBear',
            img: 'images/Ice melting-bro.png',
        },
        {
            name: 'penguin',
            img: 'images/Penguin family-bro.png',
        },
        {
            name: 'cat',
            img: 'images/Playful cat-cuate.png',
        },
        {
            name: 'bat',
            img: 'images/Sleeping bat-rafiki.png',
        },
        {
            name: 'unicorn',
            img: 'images/Unicorn with rainbow-rafiki.png',
        },
    ]
    
    cardArray.sort(() => 0.5 - Math.random());
    
    const grid = document.querySelector('.grid');
    const resultDisplay = document.querySelector('#result');
    let cardsChosen = []
    let cardsChosenId = []
    let cardsWon = []
    
    function createBoard() {
        for (let i = 0; i < cardArray.length; i++) {
            const card = document.createElement('img');
            card.setAttribute('src', 'images/Arcade machine-amico.png');
            card.setAttribute('data-id', i);
            card.addEventListener('click', flipCard);
            grid.appendChild(card);
    
        }
    };
    function checkForMatch() {
        const cards = document.querySelectorAll('img');
        const optionOneId = cardsChosenId[0]
        const optionTwoId = cardsChosenId[1]
    
        if (optionOneId == optionTwoId) {
            cards[optionOneId].setAttribute('src', 'images/Arcade machine-amico.png');
            cards[optionTwoId].setAttribute('src', 'images/Arcade machine-amico.png');
            
        }
        else if (cardsChosen[0] === cardsChosen[1]) {
            
            cards[optionOneId].setAttribute('src', 'images/white.png');
            cards[optionTwoId].setAttribute('src', 'images/white.png');
            cards[optionOneId].removeEventListener('click', flipCard);
            cards[optionTwoId].removeEventListener('click', flipCard);
            cardsWon.push(cardsChosen);
        } else {
            cards[optionOneId].setAttribute('src', 'images/Arcade machine-amico.png');
            cards[optionTwoId].setAttribute('src', 'images/Arcade machine-amico.png');
            
        }
        cardsChosen = []
        cardsChosenId = []
        resultDisplay.textContent = cardsWon.length
        if (cardsWon.length === cardArray.length / 2) {
            resultDisplay.textContent = 'Congratulations! You found them all!'
        }
    }
    
    function flipCard() {
        let cardId = this.getAttribute('data-id');
        cardsChosen.push(cardArray[cardId].name);
        cardsChosenId.push(cardId);
        this.setAttribute('src', cardArray[cardId].img);
        if (cardsChosen.length === 2) {
            setTimeout(checkForMatch, 500)
        }
    };
    
    
    createBoard();
    })