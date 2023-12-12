// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faTimes } from '@fortawesome/free-solid-svg-icons';
// import { faCircle } from '@fortawesome/free-regular-svg-icons';

function Square({ value, onClick }) {
    let icon;

    if (value === 'X') {
        icon = <img src="/x-removebg-preview.png" />;
    } else if (value === 'O') {
        icon = <img src = "/circle-removebg-preview.png" />;
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