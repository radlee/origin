import React, { useState } from 'react';
import {TabContent, TabPane, Nav, NavItem, NavLink, Card, Button, CardTitle, CardText, Row, Col, Table } from 'reactstrap';
import classnames from 'classnames';
import Profile from '../profile/profile.component';

export default (props) => {
    const [ activeTab, setActiveTab ] = useState('1');

    const toggle = tab => {
        if (activeTab !== tab) setActiveTab(tab);
    }

    return (
        <div className="container">
            <Nav tabs>
                <NavItem>
                    <NavLink
                        className={classnames({ active: activeTab === '1' })}
                        onClick={() => { toggle('1'); }}
                    >
                        Dashboard
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink
                        className={classnames({ activr: activeTab === '2' })}
                        onClick={() => { toggle('2'); }}
                    >
                        Timetable
                </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink
                        className={classnames({ activr: activeTab === '3' })}
                        onClick={() => { toggle('3'); }}
                    >
                        Tutorials
                </NavLink>
                </NavItem>
            </Nav>
            <TabContent activeTab={activeTab}>
                <TabPane tabId="1">
                    <Row>
                        <Col sm="12">
                            <h4>Dashboard Content</h4>
                            <Card body>
                                <CardTitle>Mathematics</CardTitle>
                                <CardText>Thoughrouly study the section 3 of the Study Notes</CardText>
                                <Button>Open Task</Button>
                            </Card>
                            <h4>Profile</h4>
                            <Profile />
                        </Col>
                    </Row>
                </TabPane>

                <TabPane tabId="2">
                    <br />
                    <h4>Timetable</h4>
                    <Row>
                        <Col sm="12">
                            <Table responsive>
                                <thead>
                                    <tr>
                                        <th>Period/Module</th>
                                        <th>Monday</th>
                                        <th>Tuesday</th>
                                        <th>Wednessday</th>
                                        <th>Thursdday</th>
                                        <th>Friday</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <th scope="row">10:00 - 10:45</th>
                                        <td>Mathematics</td>
                                        <td>English</td>
                                        <td>Life Orientation</td>
                                        <td>Physical Science</td>
                                        <td>Life Science</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">11:00 - 11:45</th>
                                        <td>Geography</td>
                                        <td>isiXhosa</td>
                                        <td>Programming</td>
                                        <td>English</td>
                                        <td>Computer Science</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">12:00 - 12:45</th>
                                        <td>Techmology</td>
                                        <td>History</td>
                                        <td>Philosophy</td>
                                        <td>Arts and Culture</td>
                                        <td>Human Science</td>
                                    </tr>
                                </tbody>
                            </Table>
                        </Col>
                    </Row>
                </TabPane>
                <TabPane tabId="3">
                    <br />
                    <h4>Tutorials Content</h4>
                    <Row>
                        <Col sm="6">
                            <Card body>
                                <CardTitle>Mathematics</CardTitle>
                                <CardText>Thoughrouly study the section 3 of the Study Notes</CardText>
                                <Button>Open Task</Button>
                            </Card>
                        </Col>
                        <Col sm="6">
                            <Card body>
                                <CardTitle>Physical Science</CardTitle>
                                <CardText>With a team of 4, go on a field and conduct an experiment of the avarage speed of the Rover2D2</CardText>
                                <Button>Open Task</Button>
                            </Card>
                        </Col>
                    </Row>
                </TabPane>

            </TabContent>
        </div>
    )
}