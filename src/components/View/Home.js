import React, {Component} from "react";
import {
    MDBAlert,
    MDBBtn,
    MDBCard,
    MDBCardBody,
    MDBCardTitle,
    MDBCol, MDBContainer,
    MDBIcon,
    MDBRow,
    MDBTable, MDBTableBody,
    MDBTableHead
} from "mdbreact";
import axios from "axios";
import constants from "./Constants/constants";
// import { AddAnswers } from 'react-router-dom';
import {Redirect} from 'react-router-dom';
import AddAnswers from "../View/AddAnswers";

class Home extends Component{

    constructor(props) {
        super(props);


        this.state = {
            questions: [],
            referrer: null,
            referrer1: null

        }

        this.getAllQuestions = this.getAllQuestions.bind(this);
        this.getAllQuestions();

    }

    componentDidMount(){
        if(localStorage.getItem("UserLogged")!=="UserLogged"){
            this.props.history.push('/');
        }
    }

    clickHandle = () => {
        console.log('Button is clicked');
        this.setState({referrer: '/AddAnswers'});
    }

    clickHandle1 = () => {
        console.log('Button22 is clicked');
        this.setState({referrer1: '/ViewAnswers'});
    }


    getAllQuestions() {
        axios.get(constants.backend_url + 'api/question/getAllQuestions').then(response => {
            this.setState({questions: response.data});
            console.log("questions")
            console.log(response.data)
            console.log("questions")
        }).catch(function (error) {
            console.log(error);
        })
        console.log(this.state.questions);
    }

    render() {

        const availableQues  = this.state.questions;
        const {referrer} = this.state;
        if (referrer) return <Redirect to={referrer} />;

        const {referrer1} = this.state;
        if (referrer1) return <Redirect to={referrer1} />;


        return (
            <MDBContainer>
                <div>

                    <div align="center">
                        <MDBCol size="8"><br/>
                            <MDBCard className="card rainy-ashville-gradient color-block-5 mb-3 mx-auto z-depth-1-half" style={{marginTop: 50, marginBottom: 50}}>
                                <MDBCardBody>

                                    <MDBTable responsive>
                                        <MDBTableHead color="grey darken-3" textWhite>
                                            <tr>
                                                <th>QUESTIONS</th>
                                                <th> </th>
                                                <th> </th>

                                            </tr>

                                        </MDBTableHead>
                                        {
                                            availableQues.length === 0 ?
                                                <tr >
                                                    <td colSpan="12" style={{textAlign : "center", fontWeight: "bold"}}>
                                                        <MDBAlert color="danger" >
                                                            No any Questions
                                                        </MDBAlert>
                                                    </td>
                                                </tr> :
                                                availableQues.map(ques => {

                                                    return(
                                                        <MDBTableBody>
                                                            <tr>
                                                                <td><b><b>Question :</b> {ques.question}</b><br/>
                                                                    <b><b>Subject :</b> {ques.subject}</b><br/>
                                                                    <b><b>Grade :</b> {ques.grade}</b><br/>
                                                                    <b><b>Name :</b> {ques.name}</b><br/>
                                                                </td>
                                                                <td>
                                                                    <MDBBtn tag="a" size="" color="purple darken-3" onClick={this.clickHandle}>
                                                                        Give Answers
                                                                    </MDBBtn>
                                                                </td>
                                                                <td>
                                                                    <MDBBtn tag="a" size="12%" color="purple darken-3" onClick={this.clickHandle1}>
                                                                        Check Answers
                                                                    </MDBBtn>
                                                                </td>
                                                            </tr>
                                                        </MDBTableBody>
                                                    )
                                                })}
                                    </MDBTable>

                                </MDBCardBody>
                            </MDBCard>
                        </MDBCol>
                    </div>
                </div>
            </MDBContainer>
        );
    }

}

export default Home;