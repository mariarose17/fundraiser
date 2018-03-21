import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Button } from 'reactstrap';
import UpdateForm from '../components/updateform';
import MySideNav from '../components/sidenav';

// .user_data.email
export default class UpdateProfile extends Component {
    render() {
        return (
            <div>
                {/* <Navlogout /> */}
                <MySideNav />
               
               <UpdateForm />

               
            </div>


        );
    }

}