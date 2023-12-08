import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from "react-router-dom";
import './home.css'
import machine from '../assets/images/Arcade machine-amico.png';

function home() {
  return (
    <div className='flex-container'>
      <div>
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src={machine} />
          <Card.Body>
            <Card.Title>Candy Crush</Card.Title>
            <Card.Text>

            </Card.Text>
            <Link to="/candy">
              <Button variant="primary">Go To Game</Button>
            </Link>
          </Card.Body>
        </Card>
      </div>

      {/* second card  */}
      <div>
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src={machine} />
          <Card.Body>
            <Card.Title>Memory Game</Card.Title>
            <Card.Text>
            </Card.Text>
            <Link to="/memory">
              <Button variant="primary">Go To Game</Button>
            </Link>
          </Card.Body>
        </Card>
      </div>

      {/* third card  */}
      <div>
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src={machine} />
          <Card.Body>
            <Link to="/">
              <Card.Title>Tic Tac Toe</Card.Title>
            </Link>
            <Card.Text>
            </Card.Text>
            <Button variant="primary">Go To Game</Button>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
}

export default home;