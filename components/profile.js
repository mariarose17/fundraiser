import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
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

    }


    componentDidMount() {
        // alert(this.userdata.id);
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
            // if (response.status == 200) {
            // }

        });

    }

    render() {
        return (
            //  <div>
            <Container>

                <div className="profileDiv">
                    <Row>

                        <Col sm="2">
                            <div>
                                <Image src="../images/thumbnail.png" thumbnail />
                                {/* <Image src="/thumbnail.png" rounded />
                            {this.props.userdata.user_data.id} */}
                            </div>
                        </Col>
                        <Col sm="10">
                            <Row>
                                <h2 className="nameEmail name">{this.state.items.first_name}</h2>

                            </Row>
                            <Row>
                                <h5 className="nameEmail email">{this.state.items.email}</h5>
                                {/* {this.userdata.email} */}
                            </Row>
                            <hr />


                            <Row>

                                <Col sm="4">
                                    <span className="subHead"> Organization :</span>
                                    <span className="pdata"> {this.state.items.organization_name} </span>
                                </Col>
                                <Col sm="4">
                                    <span className="subHead"> Phone :</span>
                                    <span className="pdata"> {this.state.items.country_code} </span>
                                    <span className="pdata"> {this.state.items.phone} </span>
                                </Col>

                                <Col sm="4">
                                    <span className="subHead"> DOB :</span>
                                    <span className="pdata"> {this.state.items.dob} </span>
                                </Col>
                            </Row>
                            <Row>
                                <p> </p>
                            </Row>

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




                            {/* <Row>
                                <Col sm="6">
                                    <Row>
                                        <Col sm="5"><span className="subHead"> Organization :</span></Col>

                                        <Col sm="7"><span className="pdata"> {this.state.items.organization_name} </span></Col>

                                    </Row>
                                    <Row>
                                        <Col sm="5"><span className="subHead"> Phone :</span></Col>
                                        <Col sm="7"><span className="pdata"> {this.state.items.country_code} </span>
                                            <span className="pdata"> {this.state.items.phone} </span></Col>
                                    </Row>
                                    <Row>
                                        <Col sm="5"><span className="subHead"> DOB :</span></Col>
                                        <Col sm="7"><span className="pdata"> {this.state.items.dob} </span></Col>
                                    </Row>


                                </Col>
                                <Col sm="6">

                                    <Row>
                                        <Col sm="5" className="rtAlign"><span className="fab fa-facebook-f"></span>

                                        </Col>
                                        <Col sm="7">
                                            <span><Link to='' activeClassName="active">{this.state.items.facebook_link}</Link></span>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col sm="5" className="rtAlign"><span className="fab fab fa-twitter"></span></Col>
                                        <Col sm="7">
                                            <span><Link to='' activeClassName="active">{this.state.items.facebook_link}</Link></span>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col sm="5" className="rtAlign"><span className="fab fab fa-google"></span></Col>
                                        <Col sm="7">
                                            <span><Link to='' activeClassName="active">{this.state.items.facebook_link}</Link></span>
                                        </Col>
                                    </Row>


                                </Col>

                            </Row> */}
                            <hr />
                            <Row>

                                <Col sm="4">
                                    <span className="subHead"> Street :</span>
                                    <span className="pdata"> {this.state.items.street} </span>
                                </Col>
                                <Col sm="4">
                                    <span className="subHead"> City :</span>
                                    <span className="pdata"> {this.state.items.city} </span>
                                </Col>
                                {/* <Col sm="3">
                                    <span className="subHead"> State :{this.state.items.state}</span>
                                    <span className="pdata"> {this.state.items.street} </span>
                                </Col> */}
                                <Col sm="4">
                                    <span className="subHead"> Zip :</span>
                                    <span className="pdata"> {this.state.items.zip} </span>
                                </Col>
                            </Row>


                        </Col>


                    </Row>

                </div>




                {/* <Row>
                    <Col sm="6">
                        <Row>
                            <span className="subHead">Address  </span>
                        </Row>
                        <Row>

                            <span className="pdata"> Street</span>
                        </Row>
                        <Row>

                            <span className="pdata"> City</span>
                        </Row>
                        <Row>

                            <span className="pdata"> State</span>
                        </Row>
                        <Row>

                            <span className="pdata"> Zip</span>
                        </Row>

                       
                    </Col>
                    <Col sm="6">
                        <Row>
                            <span className="subHead">Zip : </span>
                            <span className="pdata"> gfdghhgfh</span>
                        </Row>
                    </Col>

                </Row> */}
            </Container>
        );
    }

}