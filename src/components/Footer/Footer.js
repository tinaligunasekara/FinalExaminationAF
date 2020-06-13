import React from 'react';
import {MDBFooter, MDBBtn, MDBIcon, MDBRow} from 'mdbreact';

const Footer = () => {
    return (

        <MDBFooter color="grey darken-3" className="text-center font-small darken-2">

            <p className="footer-copyright mb-0 py-3 text-center">
                &copy; {new Date().getFullYear()} Copyright: JavaTech Technologies
            </p>
        </MDBFooter>
    );
}

export default Footer;
