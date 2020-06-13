import React, {Component} from "react";
import Navigationbar from '../Navigationbar/Navigationbar';
import Auxi from '../Hoc/Auxi';
import RegisterForm from "../View/RegisterForm";
import QuestionForm from "../View/QuestionForm";
import Home from "../View/Home";
import Login from "../View/Login";
import Footer from "../Footer/Footer";


class Layout extends Component{
    render() {
        return (
            <Auxi>
                <Navigationbar/>
                {/*<RegisterForm/>*/}
                {/*<QuestionForm/>*/}
                {/*<Home/>*/}
                {/*<Login/>*/}

                {/*<div>*/}
                <Footer/>
                {/*</div>*/}
            </Auxi>
        );
    }
}

export default Layout;