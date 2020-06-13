import React, {Component} from 'react';
import Home from "./Home";
import {MDBBtn, MDBCard, MDBCardBody, MDBCol, MDBContainer, MDBInput, MDBRow} from "mdbreact";
import axios from "axios";
import constants from "./Constants/constants";
import * as Swal from "sweetalert2";
class Login extends Component{

    constructor(props){
        super(props)
        this.state = {
            userName: '',
            userNameValidation: false,
            password: '',
            passwordValidation: false

        }

        this.onChangeUserName = this.onChangeUserName.bind(this);
        this.onChangepassword = this.onChangepassword.bind(this);
        this.validateUser = this.validateUser.bind(this);
    }

    onChangeUserName(e) {
        this.setState({
            userName: e.target.value,
            [e.target.name]: e.target.value
        })
    }

    onChangepassword(e) {
        this.setState({
            password: e.target.value,
            [e.target.name]: e.target.value
        })
    }


    validateUser(e) {

        e.preventDefault();

        if (this.state.userName != '') {
            this.setState({
                userNameValidation: false
            })
            if (this.state.password != '') {
                this.setState({
                    passwordValidation: false
                })

                axios.get(constants.backend_url + 'api/user/validateUsers/' + this.state.userName + '/' + this.state.password)
                    .then(res => {
                            if (res.data.Message !== 'not found') {
                                localStorage.setItem("UserLogged", "UserLogged");
                                localStorage.setItem("UserId", res.data.Message._id);
                                this.props.history.push('/Home');
                                window.location.reload();
                                this.setState({
                                    userName: '',
                                    password: '',
                                    userNameValidation: false,
                                    passwordValidation: false
                                });

                            } else {
                                Swal.fire(
                                    '',
                                    'Login Fail',
                                    'error'
                                )
                            }
                        }
                    );
            }else {
                console.log('Password field empty');
                this.setState({
                    passwordValidation: true
                })
            }

        }else {
            console.log('User Name field empty');
            this.setState({
                userNameValidation: true
            })
        }
    }

    render() {
        return (
            <div align="center" >
                <div style={{width: "60%",
                    height: "60%"}}>
            <MDBContainer>
            <MDBCol md="6"><br/>
                <MDBCard className="card rainy-ashville-gradient color-block-5 mb-3 mx-auto z-depth-1-half">

                    <MDBCardBody>

                <MDBRow>
                    <MDBCol md="5">
                        <form onSubmit={this.validateUser}>
                            <p className="h5 text-center mb-4"><b>SIGN IN</b></p>
                            <div className="grey-text">
                                <div className="md-form" align="left">
                                <MDBInput
                                    label="Type your email"
                                    icon="envelope"
                                    group type="email"
                                    validate error="wrong"
                                    success="right" size="5"
                                value={this.state.userName}
                                    onChange={this. onChangeUserName}/></div>

                                <div className="md-form" align="left">
                                <MDBInput label="Type your password"
                                          icon="lock"
                                          group type="password" validate
                                          value={this.state.password}
                                          onChange={this.onChangepassword}/></div>
                            </div>
                            <div className="text-center">
                                <form onSubmit={this.onSubmit}>
                                <MDBBtn type="submit" color="secondary">Login</MDBBtn>
                                </form>



                            </div>
                        </form>
                    </MDBCol>
                </MDBRow>
                    </MDBCardBody>


                </MDBCard>
            </MDBCol>
            </MDBContainer>
                </div>
            </div>
        );
    }



}

export default Login;