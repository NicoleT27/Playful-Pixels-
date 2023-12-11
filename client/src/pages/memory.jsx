import React, { useEffect, useState } from 'react'
import './memory.css';
import SingleCard from './SingleCard';
import puppyPaw from '../assets/images/Dog paw-pana.png';
import polarBear from '../assets/images/Ice melting-bro.png';
import penguin from '../assets/images/Penguin family-bro.png';
import cat from '../assets/images/Playful cat-cuate.png';
import bat from '../assets/images/Sleeping bat-rafiki.png';
import unicorn from '../assets/images/Unicorn with rainbow-rafiki.png';


const cardImages = [
    { 'src': puppyPaw, matched: false },
    { 'src': polarBear, matched: false },
    { 'src': penguin, matched: false },
    { 'src': cat, matched: false },
    { 'src': bat, matched: false },
    { 'src': unicorn, matched: false },
]
const memory = () => {
    const [cards, setCards] = useState([])
    const [turns, setTurns] = useState(0)
    const [choiceOne, setChoiceOne] = useState(null)
    const [choiceTwo, setChoiceTwo] = useState(null)
    const [disabled, setDisabled] = useState(false)


    //shuffle cards
    const cardShuffle = () => {
        const shuffledCards = [...cardImages, ...cardImages]
            .sort(() => Math.random() - 0.5)
            .map((card) => ({ ...card, id: Math.random() }))

        setCards(shuffledCards)
        setTurns(0)
    }

    // handle choice
    const handleChoice = (card) => {
        choiceOne ? setChoiceTwo(card) : setChoiceOne(card)
    }

    // matching cards 
    useEffect(() => {
        if (choiceOne && choiceTwo) {
            setDisabled(true)
            if (choiceOne.src === choiceTwo.src) {
                setCards(prevCards => {
                    return prevCards.map(card => {
                        if (card.src === choiceOne.src) {
                            return { ...card, matched: true }
                        } else {
                            return card
                        }
                    })
                })
                resetTurn()
            } else {

                setTimeout(() => resetTurn(), 1000)
            }
        }
    }, [choiceOne, choiceTwo])

    // console.log(cards);

    //reset choices and increase turn
    const resetTurn = () => {
        setChoiceOne(null);
        setChoiceTwo(null);
        setTurns(prevTurns => prevTurns = 1);
        setDisabled(false);
    }


    return (
        <div className='game'>
            <h1 className='memory' >Memory Game</h1>
            <button className='mem-button' onClick={cardShuffle}>New Game</button>

            <div className='grid'>
                {cards.map(card => (
                    <SingleCard
                        key={card.id}
                        card={card}
                        handleChoice={handleChoice}
                        flipped={card === choiceOne || card === choiceTwo || card.matched}
                        disabled={disabled}
                    />
                ))}
            </div>
        </div>
    )
}

export default memory