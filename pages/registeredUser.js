import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Button } from 'reactstrap';
import Navlogout from '../components/navLogout';
import Profile from '../components/profile';
import MySideNav from '../components/sidenav';
// .user_data.email
export default class User extends Component {
    render() {
        return (
            <div>
                {/* <Navlogout useremail={this.props.location.state.detail.user_data.email}/> */}
                {/* <Navlogout userd={this.props.location.state.detail}/> */}
          <MySideNav />
               
             
               
            </div>


        );
    }

}