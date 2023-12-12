import React from 'react';
import marble from '../assets/images/marble.png';

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
                        src={marble}
                        onClick={handleClick} />
                </div>
            </div>
        </div>
    )
}
export default SingleCard

