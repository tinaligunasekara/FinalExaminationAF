import React, {Component} from "react";
import {MDBBtn, MDBCard, MDBCardBody, MDBCardTitle, MDBCol, MDBContainer, MDBInput, MDBRow} from "mdbreact";
import axios from "axios";
import constants from "./Constants/constants";
import * as Swal from "sweetalert2";

class AddAnswers extends Component{

    constructor(props) {
        super(props);

        this.state = {
            name: '',
            grade: '',
            answer: '',

        }

        this.onchangeName = this.onchangeName.bind(this);
        this.onchangeGrade = this.onchangeGrade.bind(this);
        this.onchangeAnswer = this.onchangeAnswer.bind(this);
        this.addAnswers = this.addAnswers.bind(this);

    }

    onchangeName(e){
        this.setState({
            name: e.target.value
        });

    }
    onchangeGrade(e){
        this.setState({
            grade: e.target.value
        });

    }
    onchangeAnswer(e){
        this.setState({
            answer: e.target.value
        });

    }

    addAnswers(e)
    {
        console.log("qqqqq");
        e.preventDefault();
        console.log("qqqqq");

        const ans = {
            name: this.state.name,
            grade: this.state.grade,
            answer: this.state.answer

        }
        console.log("gggg111");
        console.log("Before...");
        axios.post(constants.backend_url + 'api/answer/add', ans)
            .then(res => {
                    console.log(res)
                    console.log("ans:"+ans);
                    if (res.data.answer === 'successful') {
                        Swal.fire(
                            '',
                            'Answer Added Successfully.',
                            'success'
                        );
                        this.setState({
                            name: '',
                            grade: '',
                            answer: ''

                        })

                    } else {
                        Swal.fire(
                            '',
                            'Answer Added Fail',
                            'error'
                        )
                    }
                }
            );

    }


    render() {
        return (
            <MDBContainer>
            <div align="center">
                <MDBCol size="4"><br/>
                    <MDBCard className="card rainy-ashville-gradient color-block-5 mb-3 mx-auto z-depth-1-half" size="4">
                        <MDBCardBody>
                            <form onSubmit={this.addAnswers}>
                                <MDBRow>
                                    <MDBCol size="8">
                                        <MDBCardTitle className="text-center"><b>ANSWERS</b></MDBCardTitle>

                                        <div className="md-form">
                                            <label htmlFor="defaultFormCardNameEx1" className="grey-text font-weight-light "><b>Name</b></label><br/>
                                            <input type="text"
                                                   id="date-picker-example"
                                                   className="form-control datepicker"
                                                   value={this.state.name}
                                                   onChange={this.onchangeName}
                                            />

                                        </div>
                                        <div className="md-form">
                                            <label htmlFor="defaultFormCardNameEx1" className="grey-text font-weight-light "><b>Grade</b></label><br/>
                                            <input type="text"
                                                   id="date-picker-example"
                                                   className="form-control datepicker"
                                                   value={this.state.grade}
                                                   onChange={this.onchangeGrade}
                                            />

                                        </div>

                                        <div className="md-form" align="left">
                                            <MDBInput
                                                type="textarea"
                                                label="Answer"
                                                icon="pencil-alt right"
                                                value={this.state.answer}
                                                onChange={this.onchangeAnswer}
                                            />

                                        </div>

                                        <MDBBtn type="submit" color="secondary">Add</MDBBtn>
                                    </MDBCol>
                                </MDBRow>
                            </form>

                        </MDBCardBody>
                    </MDBCard>
                </MDBCol>
            </div>
            </MDBContainer>
        );
    }

}

export default AddAnswers;