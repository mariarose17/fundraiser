import React from 'react';
import axios from 'axios';
import TextField from 'material-ui/TextField';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

import { Grid, Row, Col } from 'react-bootstrap';

import { postCall } from '../services/api';
import validator from 'validator';
import Navtop from '../components/navtop';

export default class SignUp extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            confirm_password: '',
            fundraiser_type: '',
            phone: '',
            organization_name: '',
            emailError: '',
            mismatchError: '',
            passwordError: '',
            phoneError: '',
            fundraiserTypeError: '',
            orgError: ''
        };

        this.handleEmailChange = this.handleEmailChange.bind(this);
        this.handlePasswordChange = this.handlePasswordChange.bind(this);
        this.handleReEnterChange = this.handleReEnterChange.bind(this);
        this.handleFundChange = this.handleFundChange.bind(this);
        this.handlePhoneChange = this.handlePhoneChange.bind(this);
        this.handleOrgChange = this.handleOrgChange.bind(this);

        this.handleSubmit = this.handleSubmit.bind(this);
        // this.handleValidations = this.handleValidations.bind(this);
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

    handleValidations() {
        var errorFlag = 0;
        if (!validator.isEmail(this.state.email)) {
            errorFlag = 1;
            this.setState({
                emailError: "Invalid email address"
            })

        }
        if (!validator.isLength(this.state.password, { min: 6, max: 10 })) {
            errorFlag = 1;
            this.setState({
                passwordError: "Min Length 6 and Max Length 10"
            })

        }
        if (!validator.equals(this.state.password, this.state.confirm_password)) {
            errorFlag = 1;
            this.setState({
                mismatchError: "Password Mismatch...Re enter password"
            })

        }
        if (!validator.isNumeric(this.state.phone)) {


            errorFlag = 1;
            this.setState({
                phoneError: "Invalid phone number"
            })

        }
        if (!validator.isLength(this.state.phone, { min: 10, max: 10 })) {


            errorFlag = 1;
            this.setState({
                phoneError: "Invalid phone number"
            })

        }
        if (validator.isEmpty(this.state.fundraiser_type)) {
            errorFlag = 1;
            this.setState({
                fundraiserTypeError: "Invalid Type"
            })

        }
        if (validator.isEmpty(this.state.organization_name)) {
            errorFlag = 1;
            this.setState({
                orgError: "Invalid Name"
            })

        }
        if (errorFlag == 1)
            return false;
        else
            return true;


    }

    clearErrorTexts() {

        this.setState({
            emailError: '',
            mismatchError: '',
            passwordError: '',
            phoneError: '',
            fundraiserTypeError: '',
            orgError: ''
        });

    }
    handleSubmit(event) {
        this.clearErrorTexts();
        //alert('A name was submitted: ' + this.state.email + this.state.password + this.state.confirm_password + this.state.fundraiser_type + this.state.phone + this.state.organization_name);
        if (this.handleValidations()) {
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



    }


    render() {
        return (
            <div>

                <Navtop />

                <Grid>

                    <Row className="show-grid">
                        <Col sm={3}>
                        </Col>
                        <Col sm={6}>
                            <div class="hddiv">
                                <h1 className="loginHeading">Sign Up</h1>

                                <TextField
                                    hintText="Enter Email"
                                    floatingLabelText="Email"
                                    type="email"
                                    fullWidth={true}
                                    onChange={this.handleEmailChange}
                                    errorText={this.state.emailError}
                                    id="email"
                                />
                                <TextField
                                    hintText="Enter Password"
                                    floatingLabelText="Password"
                                    type="password"
                                    fullWidth={true}
                                    id="password"
                                    onChange={this.handlePasswordChange}
                                    errorText={this.state.passwordError}

                                />
                                <TextField
                                    hintText="Re-Enter Password"
                                    floatingLabelText="Confirm Password"
                                    type="password"
                                    id="confirmPassword"
                                    fullWidth={true}
                                    onChange={this.handleReEnterChange}
                                    errorText={this.state.mismatchError}
                                />
                                <TextField
                                    hintText="Enter Fund Raiser Type"
                                    floatingLabelText="Fund Raiser Type"
                                    id="fundRaiserType"
                                    fullWidth={true}
                                    onChange={this.handleFundChange}
                                    errorText={this.state.fundraiserTypeError}
                                />
                                <TextField
                                    hintText="Enter Phone Number"
                                    floatingLabelText="Phone"
                                    id="phone"
                                    fullWidth={true}
                                    onChange={this.handlePhoneChange}
                                    errorText={this.state.phoneError}
                                />
                                <TextField
                                    hintText="Enter Organization Name"
                                    floatingLabelText="Organization"
                                    id="organization"
                                    fullWidth={true}
                                    onChange={this.handleOrgChange}
                                    errorText={this.state.orgError}
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
