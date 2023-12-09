import React from 'react'
import arcadeMachine from '../assets/images/Arcade machine-amico.png'

const SingleCard = ({ card, handleChoice, flipped }) => {
    const handleClick = () => {
        handleChoice(card)
    }
    return (
        <div>
            <div className='card'>
                <div className={flipped ? "flipped" : ""}>
                    <img className='front' src={card.src} />
                    <img
                        className='back'
                        src={arcadeMachine}
                        onClick={handleClick} />
                </div>
            </div>
        </div>
    )
}
export default SingleCard

