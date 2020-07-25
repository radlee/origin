import  React from 'react';
import {  Form, FormGroup, Label, Input, Button } from 'reactstrap';
// import 'styles.component.css';

export default (props) => {
    return (

        <div className="container">
            <br />
            <h1 className="display-3">Contact Us</h1>
            <br />
            <Form>
                <FormGroup>
                <Label for="ëxampleName">Name</Label>
                <Input 
                        type="text"
                        name="name"
                        id="exampleName"
                />
                </FormGroup>
                <FormGroup>
                <Label for="ëxampleSurname">Subject</Label>
                <Input 
                        type="text"
                        name="subject"
                        id="exampleSubject"
                />
                </FormGroup>
                <FormGroup>
                <Label for="ëxampleEmail">Email</Label>
                <Input 
                        type="email"
                        name="email"
                        id="exampleEmail"
                />
                </FormGroup>
                <FormGroup>
                <Label for="ëxampleEmail">Message</Label>
                <Input 
                        type="textarea"
                        name="email"
                        id="exampleEmail"
                />
                </FormGroup>
                <Button color="dark">Submit</Button>
            </Form>

        </div>
    )
}


