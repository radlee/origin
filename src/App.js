import React from 'react';
import logo from './logo512.png';
import originLogo from './media/coding2.jpg';
import bmmLogo from './media/phone.png';
import coding from './media/onepointone.jpg';
import './App.css';
import Jumbotron from './components/jumbotron/jumbotron.component';
import Form from './components/form/form.component';
import { Container, Row, Col, Card, Button, Badge, CardImg, CardTitle, CardText, CardBody, CardSubtitle, CardImgOverlay } from 'reactstrap';

function App() {
  return (
    <div className="App">

      <Jumbotron />
      
      <Container className="section2">

      <br />

      <h1 className="display-3">Portfolio-2020</h1>

      <br />
      
      <Row>

        <Col sm="4">
          <Card body>
            <CardImg className="CardImg" top width="100%" src={originLogo} alt="one" />      
            <CardBody>
            <br />
              <CardTitle>Programming Basics and Games</CardTitle>
              <CardText>Introduction to Programming Project for Primary and High School </CardText>
            </CardBody>   
          </Card>
        </Col>

          <Col sm="4">
            <Card body>
              <CardImg className="CardImg" top width="100%" src={bmmLogo} alt="one" />
              <CardBody>
                <br />
                <CardTitle >Mobile-1st is the top Priority</CardTitle>
                <CardText>Responsive web apps in the midst of 2020 </CardText>
            </CardBody>  
              </Card>
            </Col>

            <Col sm="4">
              <Card body>
                  <CardImg className="CardImg" top width="100%" src={coding} alt="one" />
                  <CardBody>
                  <br />
                    <CardTitle>Professional Photography</CardTitle>
                    <CardText>"Qaulity images makes your online precence have an impact. </CardText>
                  </CardBody>  
              </Card>
            </Col>

        </Row>
     
      </Container>

      <br/>

      <Form />

      <br />

      <img src={logo} className="App-logo-rotate" alt="logo" />
        
    </div>
  );
}

export default App;
