
import React from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem
} from 'reactstrap';

import { Link } from 'react-router-dom';

export default class Navlogout extends React.Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            isOpen: false
        };

        this.userdata = JSON.parse(localStorage.getItem('UserData'));
        console.log( this.userdata );
    }
    // newMethod() {
    //     return 'UserData';
    // }

    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }
    render() {
        return (
            <div>
                <Navbar light expand="md">
                    <NavbarBrand className="navbrand" href="/">Welcome {this.userdata.email}</NavbarBrand>
                    {/* <NavItem>
                        <NavLink tag={Link} to="">Profile</NavLink>
                    </NavItem> */}



                    <NavbarToggler onClick={this.toggle} />
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav className="ml-auto" navbar>
                            <UncontrolledDropdown nav inNavbar>
                                <DropdownToggle nav caret>
                                    Profile
                </DropdownToggle>
                                <DropdownMenu >
                                    <DropdownItem>
                                        <Link to={{
                                            pathname: '/viewProfile',
                                            state: { udata: this.props.userd }
                                        }}>View</Link>
                                    </DropdownItem>
                                    <DropdownItem divider />
                                    <DropdownItem>
                                    <Link to="/updateProfile">Update</Link>
                                   </DropdownItem>
                                    <DropdownItem divider />
                                    <DropdownItem>
                                        Reset
                                    </DropdownItem>
                                </DropdownMenu>
                            </UncontrolledDropdown>
                            <NavItem>
                                <NavLink className="loginlink" tag={Link} to="/home">Logout</NavLink>

                            </NavItem>

                        </Nav>
                    </Collapse>
                </Navbar>
            </div>
        );
    }
}


