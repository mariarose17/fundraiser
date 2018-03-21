import React, { Component } from 'react';
import axios from 'axios';
import TextField from 'material-ui/TextField';
import DatePicker from 'material-ui/DatePicker';
import { Button, Form, FormGroup, Label, Input, FormText, Modal, ModalBody, ModalHeader, ModalFooter } from 'reactstrap';
import { putCall,getCall } from '../services/api';
import { Grid, Row, Col } from 'react-bootstrap';
import ImageUpload from '../components/imageUpload';
import { Image } from 'react-bootstrap';

export default class UpdateForm extends Component {
    constructor(props) {
        super(props);
        //this.items = JSON.parse(localStorage.getItem('Items'));


        this.state = {
            first_name: '',
            last_name: '',
            email: '',
            street: '',
            city: '',
            state: '',
            country_code: '',
            zip: '',
            phone: '',
            profile_image_url: '',
            fundraiser_type: '',
            dob: '',
            facebook_link: '',
            twitter_link: '',
            google_link: '',
            organization_name: '',
            fundraiser_logo_url: '',
            modal1: false,
            modal2: false
        };
        this.toggle1 = this.toggle1.bind(this);
        this.toggle2 = this.toggle2.bind(this);

        this.handleFirstNameChange = this.handleFirstNameChange.bind(this);

        this.handleLastNameChange = this.handleLastNameChange.bind(this);
        this.handlePhoneChange = this.handlePhoneChange.bind(this);
        this.handleStreetChange = this.handleStreetChange.bind(this);
        this.handleCityChange = this.handleCityChange.bind(this);
        this.handleStateChange = this.handleStateChange.bind(this);

        this.handleZipChange = this.handleZipChange.bind(this);
        this.handleCountryChange = this.handleCountryChange.bind(this);
        this.handleOrganizationChange = this.handleOrganizationChange.bind(this);
        this.handleFacebookChange = this.handleFacebookChange.bind(this);
        this.handleTwitterChange = this.handleTwitterChange.bind(this);
        this.handleGoogleChange = this.handleGoogleChange.bind(this);
        this.handleDobChange = this.handleDobChange.bind(this);


        this.handleUpdate = this.handleUpdate.bind(this);

        this.userdata = JSON.parse(localStorage.getItem('UserData'));
        var url = "fundraisers/" + this.userdata.id;
        getCall(url).then((response) => {
            console.log(response);
            if (response.status == 200) {

                this.setState({

                    first_name: response.data.first_name,
                    last_name: response.data.last_name,
                    email: response.data.email,
                    street: response.data.street,
                    city: response.data.city,
                    state: response.data.state,
                    country_code: response.data.country_code,
                    zip: response.data.zip,
                    phone: response.data.phone,
                    profile_image_url: response.data.profile_image_url,
                    fundraiser_type: response.data.fundraiser_type,
                    dob: response.data.dob,
                    facebook_link: response.data.facebook_link,
                    twitter_link: response.data.twitter_link,
                    google_link: response.data.google_link,
                    organization_name: response.data.organization_name,
                    fundraiser_logo_url: response.data.fundraiser_logo_url,
                });



            }


        });


    }

    toggle1() {

        this.profileimg = JSON.parse(localStorage.getItem('profileimg'));
        this.setState({

            modal1: !this.state.modal1,
            profile_image_url: this.profileimg

        });
    }
    toggle2() {
        this.logo = JSON.parse(localStorage.getItem('logo'));
        this.setState({
            modal2: !this.state.modal2,
            fundraiser_logo_url: this.logo
        });
    }
    handleFirstNameChange(event) {
        this.setState({ first_name: event.target.value });
    }
    handleLastNameChange(event) {
        this.setState({ last_name: event.target.value });
    }
    handlePhoneChange(event) {
        this.setState({ phone: event.target.value });
    }
    handleStreetChange(event) {
        this.setState({ street: event.target.value });
    }
    handleCityChange(event) {
        this.setState({ city: event.target.value });
    }
    handleStateChange(event) {
        this.setState({ state: event.target.value });
    }
    handleZipChange(event) {
        this.setState({ zip: event.target.value });
    }
    handleCountryChange(event) {
        this.setState({ country_code: event.target.value });
    }
    handleOrganizationChange(event) {
        this.setState({ organization_name: event.target.value });
    }
    handleFacebookChange(event) {
        this.setState({ facebook_link: event.target.value });
    }
    handleTwitterChange(event) {
        this.setState({ twitter_link: event.target.value });
    }
    handleGoogleChange(event) {
        this.setState({ google_link: event.target.value });
    }
    handleDobChange(event, date) {
        //this.setState({ dob: date });

        this.setState({ dob: (date.getMonth() + 1) + "-" + date.getDate() + "-" + date.getFullYear() });
    }


    handleUpdate(event) {
        var url = "fundraisers/" + this.userdata.id;
        putCall(url, this.state).then(function (response) {
            console.log(response);
            if (response.status == 200) {
                alert("Update Successful.....");
                // this.userdata = response.data;

                //localStorage.setItem('UserData', JSON.stringify(response.data));

            }
            else {
                alert("UpdateFailure.....");
            }
        });
    }
    render() {
        return (
            <div className="updateFormDiv">
                <center><h1>Edit Profile</h1></center>

                <Grid>
                    <Row>
                        <p></p>

                    </Row>
                    <Row>
                        <p></p>

                    </Row>
                    <Row className="show-grid">


                        <Col sm={3} className="myCol">
                            <div>

                                <TextField
                                    hintText="Enter First Name"
                                    floatingLabelText="First Name"

                                    fullWidth={true}
                                    onChange={this.handleFirstNameChange}
                                    id="firstName"
                                    value={this.state.first_name}
                                />

                                <TextField
                                    hintText="Enter Phone Number"
                                    floatingLabelText="Phone"
                                    id="phone"
                                    fullWidth={true}
                                    onChange={this.handlePhoneChange}
                                    value={this.state.phone}

                                />


                                <TextField
                                    hintText="Enter Street"
                                    floatingLabelText="Street"
                                    id="street"
                                    fullWidth={true}
                                    onChange={this.handleStreetChange}
                                    value={this.state.street}
                                />

                                {/* <TextField
                                    hintText="Enter State"
                                    floatingLabelText="State"
                                    id="state"
                                    fullWidth={true}
                                    onChange={this.handleStateChange}
                                    value={this.state.state}

                                /> */}

                                <TextField
                                    hintText="Enter Facebook Link"
                                    floatingLabelText="Facebook Link"
                                    id="fb"
                                    fullWidth={true}
                                    onChange={this.handleFacebookChange}
                                    value={this.state.facebook_link}
                                />
                                <Button className="upBtns btnColor1" onClick={this.toggle1}>Upload Profile Image</Button>
                            </div>
                        </Col>

                        <Col sm={3} className="myCol">
                            <div>


                                <TextField
                                    hintText="Enter Last Name"
                                    floatingLabelText="Last Name"

                                    fullWidth={true}
                                    id="lastName"
                                    onChange={this.handleLastNameChange}
                                    value={this.state.last_name}
                                />

                                <DatePicker
                                    hintText="Enter DOB"
                                    floatingLabelText="DOB"
                                    onChange={this.handleDobChange}
                                    // openToYearSelection={true}
                                    fullWidth={true}
                                    locale="en-US"
                                //value={this.state.dob}
                                />


                                <TextField
                                    hintText="Enter City"
                                    floatingLabelText="City"
                                    id="city"
                                    fullWidth={true}
                                    onChange={this.handleCityChange}
                                    value={this.state.city}

                                />

                                <TextField
                                    hintText="Enter Twitter Link"
                                    floatingLabelText="Twitter Link"
                                    id="twitter"
                                    fullWidth={true}
                                    onChange={this.handleTwitterChange}
                                    value={this.state.twitter_link}
                                />

                                <Button className="upBtns  btnColor1" type="button" onClick={this.toggle2}>Upload Fundraiser Logo</Button>
                            </div>
                        </Col>


                        <Col sm={3} className="myCol">
                            <div>
                                <TextField
                                    hintText="Enter Zip Code"
                                    floatingLabelText="Zip Code"
                                    id="state"
                                    fullWidth={true}
                                    onChange={this.handleZipChange}
                                    value={this.state.zip}
                                />

                                <TextField
                                    hintText="Enter Country Code"
                                    floatingLabelText="Country Code"

                                    fullWidth={true}
                                    onChange={this.handleCountryChange}
                                    id="countryCode"
                                    value={this.state.country_code}
                                />
                                <TextField
                                    hintText="Enter Organization"
                                    floatingLabelText="Orgaqnization"

                                    fullWidth={true}
                                    id="organization"
                                    onChange={this.handleOrganizationChange}
                                    value={this.state.organization_name}
                                />


                                <TextField
                                    hintText="Enter Google Link"
                                    floatingLabelText="Google Link"
                                    id="google"
                                    fullWidth={true}
                                    onChange={this.handleGoogleChange}
                                    value={this.state.google_link}
                                />
                                <Button className="upBtns  btnColor2" type="button" onClick={this.handleUpdate}>Update</Button>
                                {/* <TextField
                                    hintText="Choose File"
                                    //floatingLabelText="Choose File"
                                    id="profileimg"
                                    fullWidth={true}
                                    type="file"
                                
                                /> */}

                                {/* <Row> */}

                            </div>
                        </Col>






                    </Row>



                </Grid>

                <Modal isOpen={this.state.modal1} toggle={this.toggle1} className={this.props.className}>
                    <ModalHeader toggle={this.toggle1}>Upload Profile Image</ModalHeader>
                    <ModalBody>

                        <ImageUpload imgtype="fundraiserProfile" />
                    </ModalBody>
                    <ModalFooter>
                        {/* <Button color="primary" onClick={this.toggle1}>Upload</Button>{' '} */}
                        <Button color="secondary" onClick={this.toggle1}>Done</Button>
                    </ModalFooter>
                </Modal>

                <Modal isOpen={this.state.modal2} toggle={this.toggle2} className={this.props.className}>
                    <ModalHeader toggle={this.toggle2}>Upload Profile Image</ModalHeader>
                    <ModalBody>

                        <ImageUpload imgtype="fundraiserLogo" />
                    </ModalBody>
                    <ModalFooter>
                        {/* <Button color="primary" onClick={this.toggle2}>Upload</Button>{' '} */}
                        <Button color="secondary" onClick={this.toggle2}>Done</Button>
                    </ModalFooter>
                </Modal>


            </div>

        );
    }
}