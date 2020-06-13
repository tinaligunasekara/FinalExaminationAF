import React, {Component} from 'react';

 class Logout extends Component {

    componentDidMount(){
        localStorage.removeItem('UserLogged');
        localStorage.removeItem('UserId');
        this.props.history.push('/Login');
        window.location.reload();
    }
    render() {

        return (
            <div>
            </div>
        );
    }

}
export default Logout;