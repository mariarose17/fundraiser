import React, { Component } from 'react';
import { Container, Row, Col, Button } from 'reactstrap';
import { Image } from 'react-bootstrap';
import { getCall } from '../services/api';
import { Link } from 'react-router-dom';

export default class Profile extends Component {
    constructor(props) {
        super(props);
        this.userdata = JSON.parse(localStorage.getItem('UserData'));
        this.state = {
            items: []
        };
        this.updateProfile = this.updateProfile.bind(this);
    }


    componentDidMount() {

        var url = "fundraisers/" + this.userdata.id;
        getCall(url).then((response) => {
            console.log(response);
            if (response.status == 200) {

                this.setState({
                    items: response.data
                });


                this.itemsdata = this.state.items;

                localStorage.setItem('Items', JSON.stringify(this.itemsdata));
            }


        });

    }

    updateProfile(event) {
        this.props.history.push('/updateProfile');
    }

    render() {
        return (
            //  <div >

            <div className="profileDiv">

                <Col sm="12">

                    <Row>
                        <h2 className="nameEmail name">{this.state.items.first_name} {this.state.items.last_name}</h2>

                    </Row>
                    <Row>
                        <h5 className="nameEmail email">{this.state.items.email}</h5>
                        {/* {this.userdata.email} */}
                    </Row>
                    <hr />

                    {/* <Col sm="3">
                    </Col>

                    <Col sm="9"> */}
                    <Row>
                        <Col sm="2">

                            <span className="subHead"> Phone :</span>
                        </Col>

                        <Col sm="10">
                            <span className="pdata"> {this.state.items.country_code} </span>
                            <span className="pdata"> {this.state.items.phone} </span>
                        </Col>

                    </Row>

                    <Row>
                        <p>

                        </p>
                    </Row>

                    <Row>
                        <Col sm="2">

                            <span className="subHead"> DOB :</span>
                        </Col>

                        <Col sm="10">
                            <span className="pdata"> {this.state.items.dob} </span>

                        </Col>

                    </Row>

                    <Row>
                        <p>

                        </p>
                    </Row>
                    <Row>
                        <Col sm="2">

                            <span className="subHead"> Street :</span>
                        </Col>

                        <Col sm="10">
                            <span className="pdata"> {this.state.items.street} </span>

                        </Col>

                    </Row>
                    <Row>
                        <p>

                        </p>
                    </Row>
                    <Row>
                        <Col sm="2">

                            <span className="subHead"> City :</span>
                        </Col>

                        <Col sm="10">
                            <span className="pdata"> {this.state.items.city} </span>

                        </Col>

                    </Row>
                    <Row>
                        <p>

                        </p>
                    </Row>
                    <Row>
                        <Col sm="2">

                            <span className="subHead"> Zip :</span>
                        </Col>

                        <Col sm="10">
                            <span className="pdata"> {this.state.items.zip} </span>

                        </Col>

                    </Row>

                    {/* </Col> */}
                    {/* <Row>
                        <p>

                        </p>
                    </Row> */}
                    <hr />

                    <Row>

                        <Col sm="4">
                            <span className="fab fa-facebook-f"></span>
                            <span className="pdata1"><a href={this.state.items.facebook_link}>{this.state.items.facebook_link}</a></span>
                        </Col>
                        <Col sm="4">
                            <span className="fab fa-twitter"></span>
                            <span className="pdata1">
                                <a href={this.state.items.twitter_link}>{this.state.items.twitter_link}</a>
                                {/* <Link to='' >{this.state.items.twitter_link}</Link> */}
                            </span>
                        </Col>

                        <Col sm="4">
                            <span className="fab fa-google"></span>
                            <span className="pdata1">
                                <a href={this.state.items.google_link}>{this.state.items.google_link}</a>

                            </span>
                        </Col>
                    </Row>

                    {/* <Row>
                        <p>

                        </p>
                    </Row> */}

                    <hr />


                    {/* <hr />
                    <Row>


                        <span className="subHead"> DOB :</span>
                        <span className="pdata"> {this.state.items.dob} </span>

                    </Row>





                    <hr />
                    <Row>

                        <span className="subHead"> Street :</span>
                        <span className="pdata"> {this.state.items.street} </span>
                    </Row>
                    <hr />
                    <Row>
                        <span className="subHead"> City :</span>
                        <span className="pdata"> {this.state.items.city} </span>
                    </Row>
                    <hr />
                    <Row>
                        <span className="subHead"> Zip :</span>
                        <span className="pdata"> {this.state.items.zip} </span>
                    </Row>

                    <hr />

                    <Row>

                        <Col sm="4">
                            <span className="fab fa-facebook-f"></span>
                            <span className="pdata"><Link to=''>{this.state.items.facebook_link}</Link></span>
                        </Col>
                        <Col sm="4">
                            <span className="fab fab fa-twitter"></span>
                            <span className="pdata"><Link to='' >{this.state.items.twitter_link}</Link></span>
                        </Col>

                        <Col sm="4">
                            <span className="fab fab fa-google"></span>
                            <span className="pdata"><Link to=''>{this.state.items.google_link}</Link></span>
                        </Col>
                    </Row>

                    <hr /> */}

                    <Row>
                        <Col sm="6">
                        </Col>
                        <Col sm="6">
                            {/* <Button className="updateBtn" onClick={this.updateProfile}>Update Profile</Button> */}
                            <Link className="updateBtn" to="/updateProfile" >Update Profile</Link>

                        </Col>
                        {/* <Button className="updateBtn"> <Link to="/updateProfile" role="button">Update Profile</Link></Button> */}
                    </Row>

                </Col >
            </div>


        );
    }

}