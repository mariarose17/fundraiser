import React, { Component } from 'react';
import axios from 'axios';
import TextField from 'material-ui/TextField';
import DatePicker from 'material-ui/DatePicker';
import { Button, Form, FormGroup, Label, Input, FormText, Modal, ModalBody, ModalHeader, ModalFooter } from 'reactstrap';
import { postCall } from '../services/api';
import { Image } from 'react-bootstrap';

const data = new FormData();

export default class ImageUpload extends Component {
    constructor(props) {
        super(props);
        this.userdata = JSON.parse(localStorage.getItem('UserData'));
        this.state = {
            file: '',
            type: this.props.imgtype,
            user_id: this.userdata.id,
            imageurl: ''
        }

        this.handleUploadFile = this.handleUploadFile.bind(this);
        this.handleUpload = this.handleUpload.bind(this);
    }





    handleUploadFile(event) {
        // const data = new FormData();

        let reader = new FileReader();
        let imgfile = event.target.files[0];

        reader.onloadend = () => {
            this.setState({

                imageurl: reader.result
            });
        }

        reader.readAsDataURL(imgfile)

        data.delete('file');
        data.delete('type');
        data.delete('user_id');
        data.append('file', event.target.files[0]);
        data.append('type', this.props.imgtype);
        data.append('user_id', this.userdata.id);
        // this.setState={
        //     type:this.props.imgtype
        // }



    }


    handleUpload() {

        var url = "common/imageUpload";
        postCall(url, data)
            .then((response) => {
                console.log(response);
                if (response.status == 200) {
                    alert("Upload Successful.....");
                    console.log("......", this);
                    if (this.state.type == "fundraiserProfile") {
                        alert("profile image");
                        this.profile = response.data.image_url;
                        localStorage.setItem('profileimg', JSON.stringify(this.profile));
                    }
                    else {
                        alert("logo");
                        this.logo = response.data.image_url;
                        localStorage.setItem('logo', JSON.stringify(this.logo));
                    }


                }
                else {
                    alert("Upload Failure.....");
                }
            });

    }





    render() {
        return (
            <div>

                <TextField
                    hintText="Choose File"
                    //floatingLabelText="Choose File"
                    id="profileimg"
                    fullWidth={true}
                    type="file"
                    onChange={this.handleUploadFile}

                />


                <div >
                    <Image className="imgPreview" src={this.state.imageurl} />
                </div>

                <Button color="primary" onClick={this.handleUpload}>Upload</Button>{' '}
            </div>
        );
    }

}