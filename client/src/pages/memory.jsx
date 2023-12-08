import React, {useState, useEffect} from "react";
import './memory.css'

const MemoryGame = () => {
    const [cardArray, setCardArray] = useState([
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
    ]);
    useEffect(() => {
        createBoard();
      }, []);
    
      const [cardsChosen, setCardsChosen] = useState([]);
      const [cardsChosenId, setCardsChosenId] = useState([]);
      const [cardsWon, setCardsWon] = useState([]);
      const [resultDisplay, setResultDisplay] = useState(0);
    
      const createBoard = () => {
        const grid = document.querySelector('.grid');
        cardArray.sort(() => 0.5 - Math.random());
    
        for (let i = 0; i < cardArray.length; i++) {
          const card = document.createElement('img');
          card.setAttribute('src', 'images/Arcade machine-amico.png');
          card.setAttribute('data-id', i);
          card.addEventListener('click', flipCard);
          grid.appendChild(card);
        }
      };
    
      const checkForMatch = () => {
        const cards = document.querySelectorAll('img');
        const optionOneId = cardsChosenId[0];
        const optionTwoId = cardsChosenId[1];
    
        if (optionOneId == optionTwoId) {
          cards[optionOneId].setAttribute('src', 'images/Arcade machine-amico.png');
          cards[optionTwoId].setAttribute('src', 'images/Arcade machine-amico.png');
        } else if (cardsChosen[0] === cardsChosen[1]) {
          cards[optionOneId].setAttribute('src', 'images/white.png');
          cards[optionTwoId].setAttribute('src', 'images/white.png');
          cards[optionOneId].removeEventListener('click', flipCard);
          cards[optionTwoId].removeEventListener('click', flipCard);
          setCardsWon([...cardsWon, cardsChosen]);
        } else {
          cards[optionOneId].setAttribute('src', 'images/Arcade machine-amico.png');
          cards[optionTwoId].setAttribute('src', 'images/Arcade machine-amico.png');
        }
    
        setCardsChosen([]);
        setCardsChosenId([]);
        setResultDisplay(cardsWon.length);
    
        if (cardsWon.length === cardArray.length / 2) {
          setResultDisplay('Congratulations! You found them all!');
        }
      };
    
      const flipCard = function () {
        let cardId = this.getAttribute('data-id');
        setCardsChosen([...cardsChosen, cardArray[cardId].name]);
        setCardsChosenId([...cardsChosenId, cardId]);
        this.setAttribute('src', cardArray[cardId].img);
    
        if (cardsChosen.length === 2) {
          setTimeout(checkForMatch, 500);
        }
      };
    
      return <div className="grid"></div>;
    };
    
    export default MemoryGame;