import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function home() {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="../assets/images/Arcade machine-amico.png" />
      <Card.Body>
        <Card.Title>Candy Crush</Card.Title>
        <Card.Text>
          
        </Card.Text>
        <Button variant="primary">Go To Game</Button>
      </Card.Body>
    </Card>
  );
}

export default home;