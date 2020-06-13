import React, {Component} from "react";
import Layout from "../layout/Layout";
import {MDBAlert, MDBBtn, MDBCard, MDBCardBody, MDBCardTitle, MDBCol, MDBContainer, MDBInput, MDBRow} from "mdbreact";
// import {AxiosInstance as axios} from "axios";
import constants from "./Constants/constants";
import * as Swal from "sweetalert2";
import axios from "axios";
import background from "../../Images/backgpic.jpg";
class RegisterForm extends Component{


    constructor(props) {
        super(props);

        this.state = {
            firstName: '',
            firstNameValidation: false,
            lastName: '',
            lastNameValidation: false,
            userName: '',
            userNameValidation: false,
            grade: '',
            gradeValidation: false,
            password: '',
            passwordValidation: false,
            confirmPassword: '',
            confirmPasswordValidation: false,

        }


        this.onchangeFirstName = this.onchangeFirstName.bind(this);
        this.onchangeLastName = this.onchangeLastName.bind(this);
        this.onchangeUserNamee = this.onchangeUserNamee.bind(this);
        this.onchangeGrade = this.onchangeGrade.bind(this);
        this.onchangePassword1 = this.onchangePassword1.bind(this);
        this.onchangeConfirmPassword= this.onchangeConfirmPassword.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    // componentDidMount(){
    //     if(localStorage.getItem("UserLogged")!=="UserLogged"){
    //         this.props.history.push('/');
    //     }
    // }

    onchangeFirstName(e) {
        this.setState({
            firstName: e.target.value,
            firstNameValidation: false
        });
    }

    onchangeGrade(e) {
        this.setState({
            grade: e.target.value,
            companyNameValidation: false
        });
    }

    onchangeLastName(e) {
        this.setState({
            lastName: e.target.value,
            lastNameValidation: false
        });
    }

    onchangeUserNamee(e) {
        this.setState({
            userName: e.target.value,
            userNameValidation: false
        });
    }

    onchangePassword1(e) {
        this.setState({
            password: e.target.value,
            passwordValidation: false
        });
    }

    onchangeConfirmPassword(e) {
        this.setState({
            confirmPassword: e.target.value,
            confirmPasswordValidation: false
        });
    }

    onSubmit(e) {
        e.preventDefault();

        if (this.state.firstName !== '') {
            console.log("firstName");
            if (this.state.lastName !== '') {
                console.log("lastName");
                if (this.state.userName !== '') {
                    console.log("userName");
                    if (this.state.grade !== '') {
                        console.log("grade");
                        if (this.state.password !== '') {
                            console.log("password");
                            if (this.state.confirmPassword !== '') {
                                console.log("confirmPassword");
                                const user = {
                                    firstName: this.state.firstName,
                                    lastName: this.state.lastName,
                                    userName: this.state.userName,
                                    grade: this.state.grade,
                                    password: this.state.password,
                                    confirmPassword: this.state.confirmPassword
                                }
                                console.log("Before...");
                                axios.post(constants.backend_url + 'api/user/add', user)
                                    .then(res => {
                                            console.log(res)
                                            console.log("user:"+user);
                                            if (res.data.user === 'successful') {
                                                Swal.fire(
                                                    '',
                                                    'User Added Successfully.',
                                                    'success'
                                                );
                                                this.setState({
                                                    firstName: '',
                                                    lastName: '',
                                                    userName: '',
                                                    grade: '',
                                                    password: '',
                                                    confirmPassword: '',

                                                })

                                            } else {
                                                Swal.fire(
                                                    '',
                                                    'User Added Fail',
                                                    'error'
                                                )
                                            }
                                        }
                                    );

                            }else{
                                this.setState({
                                    confirmPasswordValidation: true
                                })
                            }
                        }else{
                            this.setState({
                                passwordValidation: true
                            })
                        }
                    }else{
                        this.setState({
                            gradeValidation: true
                        })
                    }
                }else{
                    this.setState({
                        userNameValidation: true
                    })
                }
            }else{
                this.setState({
                    lastNameValidation: true
                })
            }
        }else{
            this.setState({
                firstNameValidation: true
            })
        }


    }

    render() {
        return (
    <MDBContainer>
            <div align="center">
                <div style={{width: "150%", height: "60%"}}>
                    <MDBCol size="4"><br/>
                        <MDBCard className="card rainy-ashville-gradient color-block-5 mb-3 mx-auto z-depth-1-half" >
                            <MDBCardBody>
                                <form onSubmit={this.onSubmit}>
                                    <MDBRow>
                                        <MDBCol size="6">
                                            <div className="w-responsive text-center mx-auto">
                                                <MDBCardTitle ><b>REGISTRATION</b></MDBCardTitle></div>
                                            <div className="md-form">
                                                <label htmlFor="defaultFormCardNameEx1" className="grey-text font-weight-dark "><b>First Name</b></label><br/>
                                                <input type="text"
                                                       id="date-picker-example"
                                                       className="form-control datepicker"
                                                       value={this.state.firstName}
                                                       onChange={this.onchangeFirstName}/>

                                            </div>
                                            {
                                                this.state.firstNameValidation ? <MDBAlert color="danger">
                                                    First Name Field Is Empty
                                                </MDBAlert> : ''
                                            }

                                            <div className="md-form">
                                                <label htmlFor="defaultFormCardNameEx1" className="grey-text font-weight-light"><b>Last Name</b></label><br/>
                                                <input type="text"
                                                       id="date-picker-example"
                                                       className="form-control datepicker"
                                                       value={this.state.lastName}
                                                       onChange={this.onchangeLastName}/>

                                            </div>
                                            {
                                                this.state.lastNameValidation ? <MDBAlert color="danger">
                                                    Last Name Field Is Empty
                                                </MDBAlert> : ''
                                            }

                                            <div className="md-form">
                                                <label htmlFor="defaultFormCardNameEx1" className="grey-text font-weight-light"><b>User Name</b></label><br/>
                                                <input type="text"
                                                       id="date-picker-example"
                                                       className="form-control datepicker"
                                                       value={this.state.userName}
                                                       onChange={this.onchangeUserNamee}/>

                                            </div>
                                            {
                                                this.state.userNameValidation ? <MDBAlert color="danger">
                                                    User Name Field Is Empty
                                                </MDBAlert> : ''
                                            }

                                            <div className="md-form">
                                                <label htmlFor="defaultFormCardNameEx1" className="grey-text font-weight-light"><b>Grade</b></label><br/>
                                                <input type="text"
                                                       id="date-picker-example"
                                                       className="form-control datepicker"
                                                       value={this.state.grade}
                                                       onChange={this.onchangeGrade}/>

                                            </div>
                                            {
                                                this.state.gradeValidation ? <MDBAlert color="danger">
                                                    Grade Name Field Is Empty
                                                </MDBAlert> : ''
                                            }
                                            <div className="md-form">
                                                <label htmlFor="defaultFormCardNameEx1" className="grey-text font-weight-light"><b>Password</b></label><br/>
                                                <input type="text"
                                                       id="date-picker-example"
                                                       className="form-control datepicker"
                                                       value={this.state.password}
                                                       onChange={this.onchangePassword1}/>

                                            </div>
                                            {
                                                this.state.passwordValidation ? <MDBAlert color="danger">
                                                    Password Field Is Empty
                                                </MDBAlert> : ''
                                            }

                                            <div className="md-form">
                                                <label htmlFor="defaultFormCardNameEx1" className="grey-text font-weight-light"><b>Confirm Password</b></label><br/>
                                                <input type="text"
                                                       id="date-picker-example"
                                                       className="form-control datepicker"
                                                       value={this.state.confirmPassword}
                                                       onChange={this.onchangeConfirmPassword}/>

                                            </div>
                                            {
                                                this.state.confirmPasswordValidation ? <MDBAlert color="danger">
                                                    Confirm Password Field Is Empty
                                                </MDBAlert> : ''
                                            }

                                            <MDBBtn type="submit" color="secondary" >Submit</MDBBtn>
                                        </MDBCol>
                                    </MDBRow>
                                </form>

                            </MDBCardBody>
                        </MDBCard>
                    </MDBCol>
                </div>
            </div>
    </MDBContainer>
        );
    }


}
export default RegisterForm;