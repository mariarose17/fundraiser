import React, { Component } from 'react';
import axios from 'axios';
import TextField from 'material-ui/TextField';
import DatePicker from 'material-ui/DatePicker';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import { putCall } from '../services/api';
import { Grid, Row, Col } from 'react-bootstrap';


export default class UpdateForm extends Component {
    constructor(props) {
        super(props);
        this.items = JSON.parse(localStorage.getItem('UserData'));
        this.state = {
            first_name: this.items.first_name,
            last_name: this.items.last_name,
            email: this.items.email,
            street: this.items.street,
            city: this.items.city,
            state: this.items.state,
            country_code: this.items.country_code,
            zip: this.items.zip,
            phone: this.items.phone,
            profile_image_url: this.items.profile_image_url,
            fundraiser_type: this.items.fundraiser_type,
            dob: this.items.dob,
            facebook_link: this.items.facebook_link,
            twitter_link: this.items.twitter_link,
            google_link: this.items.google_link,
            organization_name: this.items.organization_name,
            fundraiser_logo_url: this.items.fundraiser_logo_url,
           // modal: false
        };
       // this.toggle = this.toggle.bind(this);

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
        var url = "fundraisers/" + this.items.id;
        putCall(url, this.state).then(function (response) {
            console.log(response);
            if (response.status == 200) {
                alert("Update Successful.....");
            }
            else {
                alert("UpdateFailure.....");
            }
        });
    }
    render() {
        return (
            <div>



                <Grid>

                    <Row className="show-grid">

                        <Col sm={6}>
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
                                    hintText="Enter Last Name"
                                    floatingLabelText="Last Name"

                                    fullWidth={true}
                                    id="lastName"
                                    onChange={this.handleLastNameChange}
                                    value={this.state.last_name}
                                />
                                <TextField
                                    hintText="Enter Phone Number"
                                    floatingLabelText="Phone"
                                    id="phone"
                                    fullWidth={true}
                                    onChange={this.handlePhoneChange}
                                    value={this.state.phone}

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
                                    hintText="Enter Street"
                                    floatingLabelText="Street"
                                    id="street"
                                    fullWidth={true}
                                    onChange={this.handleStreetChange}
                                    value={this.state.street}
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
                                    hintText="Enter State"
                                    floatingLabelText="State"
                                    id="state"
                                    fullWidth={true}
                                    onChange={this.handleStateChange}
                                    value={this.state.state}

                                />



                            </div>
                        </Col>

                        <Col sm={6}>
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
                                    hintText="Enter Facebook Link"
                                    floatingLabelText="Facebook Link"
                                    id="fb"
                                    fullWidth={true}
                                    onChange={this.handleFacebookChange}
                                    value={this.state.facebook_link}
                                />
                                <TextField
                                    hintText="Enter Twitter Link"
                                    floatingLabelText="Twitter Link"
                                    id="twitter"
                                    fullWidth={true}
                                    onChange={this.handleTwitterChange}
                                    value={this.state.twitter_link}
                                />
                                <TextField
                                    hintText="Enter Google Link"
                                    floatingLabelText="Google Link"
                                    id="google"
                                    fullWidth={true}
                                    onChange={this.handleGoogleChange}
                                    value={this.state.google_link}
                                />
                                {/* <TextField
                                    hintText="Choose File"
                                    //floatingLabelText="Choose File"
                                    id="profileimg"
                                    fullWidth={true}
                                    type="file"
                                
                                /> */}

                                <Row>
                                    <Col sm={6}>
                                        <Button type="button" color="success" onClick="">Upload Profile Image</Button>
                                    </Col>
                                    <Col sm={6}>
                                        <Button type="button" color="success" onClick="">Upload Fundraiser Logo</Button>
                                    </Col>
                                </Row>
                                <Row>
                                    <p> </p>
                                </Row>
                                <Row>
                                    <Col sm={6}>
                                    </Col>
                                    <Col sm={6}>
                                        <Button className="btnLogin" type="button" color="success" onClick={this.handleUpdate}>Update</Button>

                                    </Col>

                                </Row>
                            </div>
                        </Col>

                    </Row>



                </Grid>

            </div>

        );
    }
}