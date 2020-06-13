import React, {Component} from "react";

import {
    MDBBtn,
    MDBCollapse,
    MDBDropdown, MDBDropdownItem, MDBDropdownMenu, MDBDropdownToggle, MDBFormInline,
    MDBNavbar,
    MDBNavbarBrand,
    MDBNavbarNav,
    MDBNavbarToggler,
    MDBNavItem,
    MDBNavLink
} from "mdbreact";
import {Redirect, Route} from "react-router";
import AddAnswers from "../View/AddAnswers";
import QuestionForm from "../View/QuestionForm";
import RegisterForm from "../View/RegisterForm";
import Home from "../View/Home";
import Login from "../View/Login";
import Logout from "../Logout/Logout";


class Navigationbar extends Component{


    state = {
        isOpen: false
    };

    toggleCollapse = () => {
        this.setState({ isOpen: !this.state.isOpen });
    }

    render() {
        return (
            <div>
                <header>
                    <MDBNavbar color="grey darken-3" dark expand="md">
                        <MDBNavbarBrand>
                            <strong className="white-text"><p>Q&A</p></strong>
                        </MDBNavbarBrand>
                        <MDBNavbarToggler onClick={this.toggleCollapse} />
                        <MDBCollapse id="navbarCollapse3" isOpen={this.state.isOpen} navbar>
                            <MDBNavbarNav left>
                                <MDBNavItem active>
                                    <MDBNavLink to="/home">Home</MDBNavLink>
                                </MDBNavItem>
                                <MDBNavItem>
                                    <MDBNavLink to="/questionform">Add Questions</MDBNavLink>
                                </MDBNavItem>
                                <MDBNavItem>
                                    <MDBNavLink to="/login">Login</MDBNavLink>
                                </MDBNavItem>
                                <MDBNavItem>
                                    <MDBNavLink to="/regform">SignIn</MDBNavLink>
                                </MDBNavItem>
                                <MDBNavItem>
                                    <MDBNavLink to="/logout">Logout</MDBNavLink>
                                </MDBNavItem>

                                <MDBNavItem>

                                </MDBNavItem>
                            </MDBNavbarNav>
                            <MDBNavbarNav right>
                                <MDBNavItem>
                                    <MDBFormInline waves>
                                        <div className="md-form my-0">
                                            <input className="form-control mr-sm-2" type="text" placeholder="Search" aria-label="Search" />
                                        </div>
                                    </MDBFormInline>
                                </MDBNavItem>
                                {/*<MDBNavItem>*/}
                                    {/*<MDBBtn tag="a" size="medium" gradient="purple" onclick={<Redirect to={'/Logout'} />}>Logout</MDBBtn>*/}
                                {/*</MDBNavItem>*/}
                            </MDBNavbarNav>
                        </MDBCollapse>
                    </MDBNavbar>

                </header>
                <main className="container-fluid">

                    <switch>
                        <Route exact path='/addanswers' component={AddAnswers}/>
                        <Route exact path='/login' component={Login}/>
                        <Route exact path='/questionform' component={QuestionForm}/>
                        <Route exact path='/regform' component={RegisterForm}/>
                        <Route exact path='/home' component={Home}/>
                        <Route exact path='/logout' component={Logout}/>

                    </switch>
                </main>

            </div>
        );
    }


}

export default Navigationbar;