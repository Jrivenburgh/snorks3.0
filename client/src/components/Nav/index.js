import React from "react";
import "./Nav.css";
const Nav = props => (
  <div className="header">
      <ul>
          <li><h2 className=" title animated swing">DondeDoggo</h2></li>
          {/* <GameMessage score={props.score} topScore={props.topScore} /> */}
          {/* <li id="score">Score: {props.score} | Top Score: {props.topScore}</li> */}
          <li className="log"><a href="https://github.com/Jrivenburgh/snorks3.0" target="blank"><span><img className='login' alt-text= "login button"/></span> Log In</a> | <a href="https://github.com/Jrivenburgh/snorks3.0" target="blank"><span><img className='signup' alt-text= "signup button"/></span> Sign Up</a></li>
      </ul>
      
  </div>
)

export default Nav;
