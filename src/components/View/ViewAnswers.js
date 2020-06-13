import React, {Component} from "react";
import axios from "axios";
import constants from "./Constants/constants";
import {
    MDBAlert,
    MDBBtn,
    MDBCard,
    MDBCardBody,
    MDBCol,
    MDBContainer,
    MDBTable,
    MDBTableBody,
    MDBTableHead
} from "mdbreact";

class ViewAnswers extends Component{


    constructor(props) {
        super(props);


        this.state = {
            answers: [],

        }

        this.getAllAnswer = this.getAllAnswer.bind(this);
        this.getAllAnswer();
        console.log("sssssssssssssssssssssssssssssssss");

    }

    componentDidMount(){
        if(localStorage.getItem("UserLogged")!=="UserLogged"){
            this.props.history.push('/');
        }
    }

    getAllAnswer() {
        axios.get(constants.backend_url + 'api/answer/getAllAnswer').then(response => {
            this.setState({answers: response.data});
            console.log("answers")
            console.log(response.data)
            console.log("answers")
        }).catch(function (error) {
            console.log(error);
        })
        console.log(this.state.answers);
    }

    render() {

        const availableAnswers  = this.state.answers;

        return (
            <div>
                <MDBContainer>
                    <div>

                        <div align="center">
                            <MDBCol size="8"><br/>
                                <MDBCard className="card rainy-ashville-gradient color-block-5 mb-3 mx-auto z-depth-1-half" style={{marginTop: 50, marginBottom: 50}}>
                                    <MDBCardBody>

                                        <MDBTable responsive>
                                            <MDBTableHead color="grey darken-3" textWhite>
                                                <tr>
                                                    <th>Answers</th>

                                                </tr>

                                            </MDBTableHead>
                                            {
                                                availableAnswers.length === 0 ?
                                                    <tr >
                                                        <td colSpan="12" style={{textAlign : "center", fontWeight: "bold"}}>
                                                            <MDBAlert color="danger" >
                                                                No any Answers
                                                            </MDBAlert>
                                                        </td>
                                                    </tr> :
                                                    availableAnswers.map(ques => {

                                                        return(
                                                            <MDBTableBody>
                                                                <tr>
                                                                    <td><b><b>Answer :</b> {ques.answer}</b><br/>
                                                                        <b><b>Name :</b> {ques.name}</b><br/>
                                                                        <b><b>Grade :</b> {ques.grade}</b>

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
            </div>
        );
    }
}

export default ViewAnswers;