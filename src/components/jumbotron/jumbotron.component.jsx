import  React from 'react';
import { Jumbotron, Button, Container } from 'reactstrap';
// import 'styles.component.css';

export default (props) => {
    return (
       
        <Jumbotron fluid className="jumbotron">
            <Container fluid>
                <h1 className="display-3">ORIGIN<span className="span">2020</span></h1>
                <h2>CONTEMPORAY WEB DEVELOPMENT</h2>
                <p className="lead">From simple Portfolio-Profile pages to fully intercactive web services.</p>
                <hr className="my-2" />
                <br />
                <p className="paragraph"><span className="span-tag">Rad Responsive Web Applications. Built for Web and Mobile.</span></p>
                <p className="lead">
                    <Button color="dark">Get Started</Button>
                </p>
            </Container>
        </Jumbotron>
    
    )
}