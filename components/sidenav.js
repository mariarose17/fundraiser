import React from 'react';
import SideNav, { Nav, NavIcon, NavText } from 'react-sidenav';
import { Image } from 'react-bootstrap';
import { getCall } from '../services/api';
import { Link } from 'react-router-dom';

import { Dropdown, DropdownItem, DropdownToggle, DropdownMenu } from 'reactstrap';

export default class MySideNav extends React.Component {
    constructor(props) {
        super(props);
        this.userdata = JSON.parse(localStorage.getItem('UserData'));
        this.state = {
            items: [],
            dropdownOpen: false

        };

        this.toggle = this.toggle.bind(this);
        this.logout = this.logout.bind(this);
       

    }

    toggle() {
        this.setState({
            dropdownOpen: !this.state.dropdownOpen
        });
    }

    logout() {
        localStorage.clear();
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
            <div className="mySide">

                <SideNav highlightColor='#fff' highlightBgColor='#1b2229'>
                    <Nav id='list'>
                        {/* <NavIcon><SvgIcon size={20} icon={ic_aspect_ratio}/></NavIcon>     */}
                        <NavIcon> <Image className="proimage" src={this.state.items.profile_image_url} /></NavIcon>
                        <NavText>
                            {/* <h5 className="proname"> {this.state.items.first_name} {this.state.items.last_name}</h5> */}

                            <Dropdown className="myDrop" isOpen={this.state.dropdownOpen} toggle={this.toggle}>
                                <DropdownToggle caret>
                                    {this.state.items.first_name} {this.state.items.last_name}
                                    {/* <h5 className="proname"> {this.state.items.first_name} {this.state.items.last_name}</h5> */}
                                </DropdownToggle>
                                <DropdownMenu>
                                    <DropdownItem> <Link to="/viewProfile">View Profile</Link></DropdownItem>
                                    <DropdownItem divider />
                                    <DropdownItem ><Link to="/home" onClick={this.logout}>Logout</Link></DropdownItem>


                                </DropdownMenu>
                            </Dropdown>



                        </NavText>
                    </Nav>


                    <Nav>
                        <NavIcon> <span className="fas fa-columns"></span></NavIcon>
                        <NavText> Dashboard </NavText>

                    </Nav>
                    <Nav id='sales'>
                        <NavIcon> <span className="fas fa-cog"></span></NavIcon>
                        <NavText> Settings </NavText>
                    </Nav>
                </SideNav>
            </div>


        );
    }

}
