import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { faCircle } from '@fortawesome/free-regular-svg-icons';

function Square({ value, onClick }) {
    let icon;

    if (value === 'X') {
        icon = <FontAwesomeIcon icon={faTimes} size="2xl"style={{ color: "#ffc17a" }} />;
    } else if (value === 'O') {
        icon = <FontAwesomeIcon icon={faCircle} size="2xl" style={{ color: "#bc70d2" }} />;
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