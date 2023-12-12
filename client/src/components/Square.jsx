// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faTimes } from '@fortawesome/free-solid-svg-icons';
// import { faCircle } from '@fortawesome/free-regular-svg-icons';
import "../components/Square.css"
import xImg from '../assets/images/x-removebg-preview.png'
import oImg from '../assets/images/circle-removebg-preview.png' ///client/src/assets/images/

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