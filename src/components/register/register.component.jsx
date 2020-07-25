import React from 'react';
import logo from '../../logo512.png';
import teacherProfile  from '../../media/code.jpg';
import studentProfile  from '../../media/code.jpg';
import Progress  from '../progress/progress.component';
import { Container, Row, Col, Media, Card, Button, Badge, CardImg, CardTitle, CardText, CardBody, CardSubtitle, CardImgOverlay } from 'reactstrap';

export default (props) => {
    return (
        <Container>

             <br />

            <h4>In Progress</h4>

            <Row>
                <Col sm="6">
                    <Card body>
                        <CardImg width="100%" src={teacherProfile} alt="Teacher's Profile" />
                        <CardImgOverlay  className="card-text">
                            <br/>
                            <br/>
                            <CardTitle>Teaches's Name: Mrs B.Shezi - #21586</CardTitle>
                            <CardSubtitle>Geograhy</CardSubtitle>
                            {/* <CardText>Todays Objective is to open the task and start working on it. if you have any questions contact your Teacher during period time.</CardText> */}
                            <CardText><small className="text-muted white">Last Updated 3 Minutes ago</small></CardText>
                            <div>
                                <Button color="primary" outline>
                                   Submitions <Badge color="secondary">34</Badge>
                                </Button>
                            </div>
                        </CardImgOverlay>
                    </Card>
                </Col>
                <hr />
                <Col sm="6">
                    <Card body>
                    <CardImg width="100%" src={studentProfile} alt="Student's Profile" />
                        <CardImgOverlay className="card-text">
                            <br/>
                            <br/>
                            <CardTitle>Student Name: L.Mafanga - #3138295</CardTitle>
                            <CardSubtitle>Grade 12</CardSubtitle>
                            {/* <CardText>Todays Objective is to open the task and start working on it. if you have any questions contact your Teacher during period time.</CardText> */}
                            <CardText><small className="text-muted white">Last Updated 55 Minutes ago</small></CardText>
                            <div>
                                <Button color="primary" outline>
                                   Tasks <Badge color="secondary">5</Badge>
                                </Button>
                            </div>
                        </CardImgOverlay>
                    </Card>
                </Col>
            </Row>
            <hr />
            <Progress />
        </Container>
       
    )
}