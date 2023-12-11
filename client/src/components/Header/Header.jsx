// import React from 'react'
// import './header.css'
// import { Link } from 'react-router-dom'
// import NavBar from '../Navigation/Navbar'
// const header = () => {
//   return (
//     <div>
//       <h1>Playful Pixels</h1>
//       <NavBar />
//     </div>

//   )
// }

// export default header

import React from 'react';
import { Link } from 'react-router-dom';
import NavBar from '../Navigation/Navbar';
import './header.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function header() {
  return (
    <>
      <Container>
        <Row className='mb-0' >
          <Col className="pb-0">
            <h1 className='PP' >
              <Link to="/">
              Playful Pixels
              </Link>
              </h1>
          </Col>
        </Row>
      </Container>
      <NavBar />
    </>
  );
}

export default header;