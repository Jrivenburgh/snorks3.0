import React from "react";
import "./Footer.css";

const Footer = () => (
    <footer className="footer">
        <div className="bottom">
            <ul id='footer-list'>
                <li><span><img className='logo' id="reactLogo" src="assets/images/react-logo.png"/></span></li>
                <li>© 2018</li>
                <li><a href="https://github.com/Jrivenburgh/snorks3.0" target="blank"><span><img className='logo' src="assets/images/github.png"/></span> Github</a></li>
            </ul>
        </div>
    </footer>
)

export default Footer;