import Card from 'react-bootstrap/Card';
import image1 from '../assets/images/imgcomputer.png'
import image2 from '../assets/images/imgteam.png';
import image3 from '../assets/images/imgdata.png';
import icon1 from '../assets/images/icontec.png'
import icon2 from '../assets/images/iconteam.png';
import icon3 from '../assets/images/icondata.png';
import React from 'react'; 
import { Container, Row, Col, Image } from 'react-bootstrap';
function Welcome() {
  return (
    <Container className='mb-5'>
      <Row className="centered-heading">
        <h1 className='text-center my-5'>
          Adding Alpha through
          <span className="text-primary"> Estee's <br /> 3 fundamental advantages</span>
        </h1>
      </Row>
      <Row className='container'>
          <Col >
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={image1} />
                <Card.Body>
                    <div style={{ position: 'absolute', top: '72%', left: '50%', transform: 'translate(-50%, -50%)' }}>
                    <Image src={icon1} width={50}/>
                    </div>
                    <Card.Text className="text-center pt-3 fw-bold">Technology</Card.Text>
                </Card.Body>
            </Card>
          </Col>
          <Col >
          <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={image2} />
                <Card.Body>
                    <div style={{ position: 'absolute', top: '72%', left: '50%', transform: 'translate(-50%, -50%)' }}>
                    <Image src={icon2} width={50}/>
                    </div>
                    <Card.Text className="text-center pt-3 fw-bold">Team</Card.Text>
                </Card.Body>
            </Card>
          </Col>
          <Col >
          <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={image3} />
                <Card.Body>
                    <div style={{ position: 'absolute', top: '72%', left: '50%', transform: 'translate(-50%, -50%)' }}>
                    <Image src={icon3} width={50}/>
                    </div>
                    <Card.Text className="text-center pt-3 fw-bold">Technology</Card.Text>
                </Card.Body>
            </Card>
          </Col>
      </Row>



    </Container>
  );
}

export default Welcome;