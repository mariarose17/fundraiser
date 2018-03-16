import React from 'react';
import axios from 'axios';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

import { Grid, Row, Col } from 'react-bootstrap';
import { postCall } from '../services/api';
import TextField from 'material-ui/TextField';
import { orange500, blue500 } from 'material-ui/styles/colors';

export default class Login extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''
        };

        this.handleEmailChange = this.handleEmailChange.bind(this);
        this.handlePasswordChange = this.handlePasswordChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

      // localStorage.clear();
    }

    handleEmailChange(event) {
        this.setState({ email: event.target.value });
    }
    handlePasswordChange(event) {
        this.setState({ password: event.target.value });
    }
    handleSubmit(event) {
        alert('A name was submitted: ' + this.state.email + this.state.password);
        // var object = {
        //     "email": this.state.email,
        //     "password": this.state.password

        // }
        postCall("fundraisers/login", this.state).then((response) => {


            if (response.status == 200) {
                alert("Login Successful....." + response.data.user_data.fundraiser_id);
                console.log(response);
                console.log(this.props.history);
                //this.props.history.push('/registeredUser');
                this.userdata = response.data.user_data;

                localStorage.setItem('UserData', JSON.stringify(this.userdata));

                this.auth = response.headers.auth;
                localStorage.setItem('authdata', JSON.stringify(this.auth));
                alert("to local..."+this.auth);

                var authValue = JSON.parse(localStorage.getItem('authdata'));
                alert("from local..."+authValue);

                
                this.props.history.push({
                    pathname: '/registeredUser',

                    state: { detail: response.data }
                })

                // this.userdata = response.data.user_data;

                // localStorage.setItem('UserData', JSON.stringify(this.userdata));

                // this.auth = response.headers.auth;
                // localStorage.setItem('authdata', JSON.stringify(this.auth));
                // alert("to local..."+this.auth);

                // var authValue = JSON.parse(localStorage.getItem('authdata'));
                // alert("from local..."+authValue);

            }
            else {
                alert("Login Failure.....");
            }


        });

        // alert('body' + object);
        // console.log(object);

        // axios.post("http://52.41.54.41:3001/fundraisers/login", object).then(function (response) {
        //     console.log(response);
        // });
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
                                {/* <div class="hddiv"> */}
                                <h1 className="loginHeading">Login</h1>
                                {/* </div> */}
                                {/* <Form>
                                    <FormGroup>
                                        <Label className="lbl" for="exampleEmail"> </Label>
                                        <Input type="email" name="email" id="email" placeholder="Enter Email" value={this.state.email} onChange={this.handleEmailChange} />
                                    </FormGroup>
                                    <FormGroup>
                                        <Label className="lbl" for="examplePassword"> </Label>
                                        <Input type="password" name="password" id="password" placeholder="Enter Password" value={this.state.password} onChange={this.handlePasswordChange} />
                                    </FormGroup>

                                </Form> */}


                                <TextField
                                    hintText="Enter Email"
                                    floatingLabelText="Email"
                                    type="email"
                                    id="email"
                                    onChange={this.handleEmailChange}
                                    fullWidth={true}
                                    floatingLabelStyle={styles.floatingLabelStyle}
                                    floatingLabelFocusStyle={styles.floatingLabelFocusStyle}

                                />
                                <TextField
                                    hintText="Enter Password"
                                    floatingLabelText="Password"
                                    type="password"
                                    id="password"
                                    onChange={this.handlePasswordChange}
                                    fullWidth={true}
                                    floatingLabelStyle={styles.floatingLabelStyle}
                                    floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
                                />
                                <Row>
                                    <Col sm={6}>
                                    </Col>
                                    <Col sm={6}>
                                        <Button className="btnLogin" type="button" color="success" onClick={this.handleSubmit}>Login</Button>
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

                            <Button type="submit" color="success" onClick={this.handleSubmit}>Login</Button>
                        </Col>
                        <Col sm={5}>
                        </Col>
                    </Row> */}

                </Grid>

            </div>

        );
    }

}


const styles = {
    errorStyle: {
        color: orange500,
    },
    underlineStyle: {
        borderColor: orange500,
    },
    floatingLabelStyle: {
        color: orange500,
    },
    floatingLabelFocusStyle: {
        color: blue500,
    },
};




