import React from 'react'
import blank from '../assets/images/white.png'

const SingleCard = ({ card, handleChoice, flipped, disabled }) => {
    const handleClick = () => {
        if (!disabled) {
            handleChoice(card)
        }

    }
    return (
        <div>
            <div className='card'>
                <div className={flipped ? "flipped" : ""}>
                    <img className='front' src={card.src} />
                    <img
                        className='back'
                        src={blank}
                        onClick={handleClick} />
                </div>
            </div>
        </div>
    )
}
export default SingleCard

