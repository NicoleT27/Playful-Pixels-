import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './home.css'
import machine from '../assets/images/Arcade machine-amico.png';

function home() {
  return (
    <div className='d-inline-flex'>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src= {machine} />
      <Card.Body>
        <Card.Title>Candy Crush</Card.Title>
        <Card.Text>
          
        </Card.Text>
        <Button variant="primary">Go To Game</Button>
      </Card.Body>
    </Card>

{/* second card  */}
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src= {machine} />
      <Card.Body>
        <Card.Title>Memory Game</Card.Title>
        <Card.Text>
          
        </Card.Text>
        <Button variant="primary">Go To Game</Button>
      </Card.Body>
    </Card>

{/* third card  */}
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src= {machine} />
      <Card.Body>
        <Card.Title>Tic Tac Toe</Card.Title>
        <Card.Text>
          
        </Card.Text>
        <Button variant="primary">Go To Game</Button>
      </Card.Body>
    </Card>
    </div>
  );
}

export default home;