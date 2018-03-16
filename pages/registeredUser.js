import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Button } from 'reactstrap';
import Navlogout from '../components/navLogout';
import Profile from '../components/profile';
// .user_data.email
export default class User extends Component {
    render() {
        return (
            <div>
                {/* <Navlogout useremail={this.props.location.state.detail.user_data.email}/> */}
                {/* <Navlogout userd={this.props.location.state.detail}/> */}
                <Navlogout />
               
                <Row>
                    <Col sm={{ size: 6, order: 2, offset: 1 }}>
                        {/* <h1 id="userD">Welcome......{this.props.location.state.detail.user_data.email}</h1>
                        {console.log(this.props.location.state.detail.user_data.fundraiser_id)}
                        {console.log(document)
                        } */}
                    </Col>

                </Row>
                <Row>
                    <Col sm={{ size: 4, offset: 1 }}>
                        <Card>
                            {/* <CardImg  src="" alt="Card image cap" /> */}
                            {/* <CardBody>
                                <CardTitle>{this.props.location.state.detail.user_data.email}</CardTitle>
                                <CardSubtitle>{this.props.location.state.detail.user_data.phone}</CardSubtitle>
                               
                            </CardBody> */}
                        </Card></Col>
                </Row>

               
            </div>


        );
    }

}