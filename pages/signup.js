import React from 'react';
import axios from 'axios';
import TextField from 'material-ui/TextField';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

import { Grid, Row, Col } from 'react-bootstrap';

import { postCall } from '../services/api';

export default class SignUp extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            confirm_password: '',
            fundraiser_type: '',
            phone: '',
            organization_name: ''
        };

        this.handleEmailChange = this.handleEmailChange.bind(this);
        this.handlePasswordChange = this.handlePasswordChange.bind(this);
        this.handleReEnterChange = this.handleReEnterChange.bind(this);
        this.handleFundChange = this.handleFundChange.bind(this);
        this.handlePhoneChange = this.handlePhoneChange.bind(this);
        this.handleOrgChange = this.handleOrgChange.bind(this);

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleEmailChange(event) {
        this.setState({ email: event.target.value });
    }
    handlePasswordChange(event) {
        this.setState({ password: event.target.value });
    }
    handleReEnterChange(event) {
        this.setState({ confirm_password: event.target.value });
    }
    handleFundChange(event) {
        this.setState({ fundraiser_type: event.target.value });
    }
    handlePhoneChange(event) {
        this.setState({ phone: event.target.value });
    }
    handleOrgChange(event) {
        this.setState({ organization_name: event.target.value });
    }

    handleSubmit(event) {
        alert('A name was submitted: ' + this.state.email + this.state.password + this.state.confirm_password + this.state.fundraiser_type + this.state.phone + this.state.organization_name);
        // var object = {
        //     "email": this.state.email,
        //     "password": this.state.password,
        //     "confirm_password": this.state.confirm_password,
        //     "fundraiser_type": this.state.fundraiser_type,
        //     "phone": this.state.phone,
        //     "organization_name": this.state.organization_name
        // }

        // alert('body' + object);
        // console.log(object);

        // axios.post("http://52.41.54.41:3001/fundraisers/", object).then(function (response) {
        //     console.log(response);
        // });

        postCall("fundraisers/", this.state).then(function (response) {
            console.log(response);
            if (response.status == 200) {
                alert("Sign Up Successful.....");
            }
            else {
                alert("Sign Up Failure.....");
            }
        });
    }


    render() {
        return (
            <div>



                <Grid>

                    <Row className="show-grid">
                        <Col sm={3}>
                        </Col>
                        <Col sm={6}>
                            <div class="hddiv">
                                <h1 className="loginHeading">Sign Up</h1>
                                {/* <Form>
                                    <FormGroup>
                                        <Label className="lbl" for="exampleEmail">  </Label>
                                        <Input type="email" name="email" id="email" placeholder="Enter Email" value={this.state.email} onChange={this.handleEmailChange} />
                                    </FormGroup>
                                    <FormGroup>
                                        <Label className="lbl" for="examplePassword"> </Label>
                                        <Input type="password" name="password" id="password" placeholder="Enter Password" value={this.state.password} onChange={this.handlePasswordChange} />
                                    </FormGroup>
                                    <FormGroup>
                                        <Label className="lbl" for="confirmPassword"> </Label>
                                        <Input type="password" name="confirmPassword" id="confirmPassword" placeholder="Re-Enter Password" value={this.state.confirmPassword} onChange={this.handleReEnterChange} />
                                    </FormGroup>
                                    <FormGroup>
                                        <Label className="lbl" for="fundRaiserType"> </Label>
                                        <Input type="text" name="fundRaiserType" id="fundRaiserType" placeholder="Enter Fund Raiser Type" value={this.state.fundRaiserType} onChange={this.handleFundChange} />
                                    </FormGroup><FormGroup>
                                        <Label className="lbl" for="phone"> </Label>
                                        <Input type="number" name="phone" id="phone" placeholder="Enter Phone Number" value={this.state.phone} onChange={this.handlePhoneChange} />
                                    </FormGroup><FormGroup>
                                        <Label className="lbl" for="organization"> </Label>
                                        <Input type="text" name="organization" id="organization" placeholder="Enter Organization" value={this.state.organization} onChange={this.handleOrgChange} />
                                    </FormGroup>



                                </Form> */}

                                <TextField
                                    hintText="Enter Email"
                                    floatingLabelText="Email"
                                    type="email"
                                    fullWidth={true}
                                    onChange={this.handleEmailChange}
                                    id="email"
                                />
                                <TextField
                                    hintText="Enter Password"
                                    floatingLabelText="Password"
                                    type="password"
                                    fullWidth={true}
                                    id="password"
                                    onChange={this.handlePasswordChange}

                                />
                                <TextField
                                    hintText="Re-Enter Password"
                                    floatingLabelText="Confirm Password"
                                    id="confirmPassword"
                                    fullWidth={true}
                                    onChange={this.handleReEnterChange}
                                />
                                <TextField
                                    hintText="Enter Fund Raiser Type"
                                    floatingLabelText="Fund Raiser Type"
                                    id="fundRaiserType"
                                    fullWidth={true}
                                    onChange={this.handleFundChange}
                                />
                                <TextField
                                    hintText="Enter Phone Number"
                                    floatingLabelText="Phone"
                                    id="phone"
                                    fullWidth={true}
                                    onChange={this.handlePhoneChange}
                                />
                                <TextField
                                    hintText="Enter Organization Name"
                                    floatingLabelText="Organization"
                                    id="organization"
                                    fullWidth={true}
                                    onChange={this.handleOrgChange}

                                />

                                <Row>
                                    <Col sm={6}>
                                    </Col>
                                    <Col sm={6}>
                                        <Button className="btnLogin" type="button" color="success" onClick={this.handleSubmit}>Register</Button>

                                    </Col>

                                </Row>
                            </div>
                        </Col>
                        <Col sm={3}>
                        </Col>
                    </Row>


                    {/* <Row className="show-grid">
                        <Col sm={5}>
                        </Col>
                        <Col sm={2}>
                            <Button type="submit" color="success" onClick={this.handleSubmit}>Register</Button>
                        </Col>
                        <Col sm={5}>
                        </Col>
                    </Row> */}
                </Grid>

            </div>

        );
    }

}
