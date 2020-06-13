import React, {Component} from "react";
import Layout from "../layout/Layout";
import {MDBBtn, MDBCard, MDBCardBody, MDBCardTitle, MDBCol, MDBContainer, MDBRow} from "mdbreact";
import axios from "axios";
import constants from "./Constants/constants";
import * as Swal from "sweetalert2";

class QuestionForm extends Component{

    constructor(props) {
        super(props);

        this.state = {
            name: '',
            nameValidation: false,
            subject: '',
            subjectValidation: false,
            grade: '',
            gradeValidation: false,
            question: '',
            questionValidation: false,

        }

        this.onchangeName = this.onchangeName.bind(this);
        this.onchangeSubject = this.onchangeSubject.bind(this);
        this.onchangeGradee = this.onchangeGradee.bind(this);
        this.onchangeQuestion = this.onchangeQuestion.bind(this);
        this.addQuestion = this.addQuestion.bind(this);
        this.addQuestion = this.addQuestion.bind(this);
    }

    componentDidMount(){
        if(localStorage.getItem("UserLogged")!=="UserLogged"){
            this.props.history.push('/');
        }
    }

    onchangeName(e){
        this.setState({
            name: e.target.value,
            // nameValidation: false
        });
    }

    onchangeSubject(e) {
        this.setState({
            subject: e.target.value,
            // subjectValidation: false
        });
    }

    onchangeGradee(e) {
        this.setState({
            grade: e.target.value,
            // gradeValidation: false
        });
    }

    onchangeQuestion(e) {
        this.setState({
            question: e.target.value,
            // questionValidation: false
        });
    }


    addQuestion(e)
    {
        console.log("qqqqq");
        e.preventDefault();
        console.log("qqqqq");
        const ques = {
            name: this.state.name,
            subject: this.state.subject,
            grade: this.state.grade,
            question: this.state.question

        }
        console.log("gggg111");
        console.log("Before...");
        axios.post(constants.backend_url + 'api/question/add', ques)
            .then(res => {
                    console.log(res)
                    console.log("ques:"+ques);
                    if (res.data.questions === 'successful') {
                        Swal.fire(
                            '',
                            'Question Added Successfully.',
                            'success'
                        );
                        this.setState({
                            name: '',
                            subject: '',
                            grade: '',
                            question: ''

                        })

                    } else {
                        Swal.fire(
                            '',
                            'Question Added Fail',
                            'error'
                        )
                    }
                }
            );

    }


    render() {
        return (
            <MDBContainer>
            <div >
                <MDBRow>
                <div align="center" style={{width: "150%", height: "60%"}}>
                <MDBCol size="4"><br/>
                    <MDBCard className="card rainy-ashville-gradient color-block-5 mb-3 mx-auto z-depth-1-half" style={{marginTop: 50, marginBottom: 50}}>
                        <MDBCardBody>
                            <form onSubmit={this.addQuestion}>
                                <MDBRow>
                                    <MDBCol size="6">
                                        <MDBCardTitle className="text-center"><b>QUESTION</b></MDBCardTitle>
                                        <div className="md-form">
                                            <label htmlFor="defaultFormCardNameEx1" className="grey-text font-weight-light "><b>Name</b></label><br/>
                                            <input type="text"
                                                   id="date-picker-example"
                                                   className="form-control datepicker"
                                                   value={this.state.name}
                                                   onChange={this.onchangeName}/>

                                        </div>
                                        {/*{*/}
                                        {/*this.state.selectedSupplierObjectValidation ?*/}
                                        {/*<MDBAlert color="danger">*/}
                                        {/*Supplier Field Is Empty*/}
                                        {/*</MDBAlert> : ''*/}
                                        {/*}*/}

                                        <div className="md-form">
                                            <label htmlFor="defaultFormCardNameEx1" className="grey-text font-weight-light"><b>Subject</b></label><br/>
                                            <input type="text"
                                                   id="date-picker-example"
                                                   className="form-control datepicker"
                                                   value={this.state.subject}
                                                   onChange={this.onchangeSubject}/>

                                        </div>
                                        {/*{*/}
                                        {/*this.state.startDateValidation ? <MDBAlert color="danger">*/}
                                        {/*Start Date Field Is Empty*/}
                                        {/*</MDBAlert> : ''*/}
                                        {/*}*/}

                                        <div className="md-form">
                                            <label htmlFor="defaultFormCardNameEx1" className="grey-text font-weight-light"><b>Grade</b></label><br/>
                                            <input type="text"
                                                   id="date-picker-example"
                                                   className="form-control datepicker"
                                                   value={this.state.grade}
                                                   onChange={this.onchangeGradee}/>

                                        </div>
                                        {/*{*/}
                                        {/*this.state.endDateValidation ? <MDBAlert color="danger">*/}
                                        {/*End Date Field Is Empty*/}
                                        {/*</MDBAlert> : ''*/}
                                        {/*}*/}
                                        <div className="md-form">
                                            <label htmlFor="defaultFormCardNameEx1" className="grey-text font-weight-light"><b>Question</b></label><br/><br/>
                                            <textarea className="form-control rounded-0" id="exampleFormControlTextarea2"
                                                      rows="3"

                                                      value={this.state.question}
                                                      onChange={this.onchangeQuestion}/>

                                        </div>
                                        {/*{*/}
                                        {/*this.state.startDateValidation ? <MDBAlert color="danger">*/}
                                        {/*Start Date Field Is Empty*/}
                                        {/*</MDBAlert> : ''*/}
                                        {/*}*/}

                                        <MDBBtn type="submit" color="secondary">Add</MDBBtn>
                                    </MDBCol>
                                </MDBRow>
                            </form>

                        </MDBCardBody>
                    </MDBCard>
                </MDBCol>
                </div>
                </MDBRow>
            </div>
            </MDBContainer>
        );
    }


}
export default QuestionForm;





