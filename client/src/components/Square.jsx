import "../components/Square.css"
import xImg from '../assets/images/tictactoex-removebg-preview_360.png' 
import oImg from '../assets/images/tictactoeo-removebg-preview_360.png' 

function Square({ value, onClick }) {
    let icon;

    if (value === 'X') {
        icon = <img className = 'xAndO' src = {xImg} />;
    } else if (value === 'O') {
        icon = <img className = 'xAndO' src = {oImg} />;
    } else {
        icon = value;
    }

    return (
        <button className="square" onClick={onClick}>
            {icon}
        </button>
    )
}

export default Square;