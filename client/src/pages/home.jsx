import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from "react-router-dom";
import './home.css'
import candyCrush from '../assets/images/candy-crush.png';
import machine from "../assets/images/Arcade machine-amico.png";
import memGame from '../assets/images/memGrid.png';
import { useAuthContext } from '../hooks/useAuthContext';

function home() {
  return (
    <div className="flex-container">
      <div>
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src={candyCrush} />
          <Card.Body>
            <Card.Title className="gameTitle">🍭Candy Crush</Card.Title>
            <Card.Text></Card.Text>
            <Link to="/candy">
              <Button variant="primary" className="gameBtn">
                Go To Game
              </Button>
            </Link>
          </Card.Body>
        </Card>
      </div>

      {/* second card  */}
      <div>
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src={memGame} />
          <Card.Body>
            <Card.Title className="gameTitle">🧠Memory Game</Card.Title>
            <Card.Text></Card.Text>
            <Link to="/memory">
              <Button variant="primary" className="gameBtn">
                Go To Game
              </Button>
            </Link>
          </Card.Body>
        </Card>
      </div>

      {/* third card  */}
      <div>
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src={machine} />
          <Card.Body>
            <Card.Title className="gameTitle">❌⭕Tic Tac Toe</Card.Title>
            <Card.Text></Card.Text>
            <Link to="/ticTacToe">
              <Button variant="primary" className="gameBtn">
                Go To Game
              </Button>
            </Link>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
}

export default home;