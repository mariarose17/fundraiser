import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import Profile from '../components/profile';
// import Navlogout from '../components/navLogout';
import MySideNav from '../components/sidenav';


export default class ViewProfile extends Component {
    render() {
        return (
            <div>
           <MySideNav />
            {/* <Profile userdata={this.props.location.state.udata} /> */}
            <Profile />
            </div>
        );
    }

}