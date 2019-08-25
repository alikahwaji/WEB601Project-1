import React from "react";
import './navBar.css';
import { Link } from "react-router-dom";

const navbar = props => (
    <header className="navBar">
        <nav className="navBar_navigation">
            <div></div>
            <div className="navBar_logo">The logo</div>
            <div className="spacer"/>
            <div className="navBar_nav-items">
       
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about/">About</Link>
            </li>            
            <li>
              <Link to="/courselist/">Courses</Link>
            </li>
            <li>
              <Link to="/form/">Login</Link>
            </li>
            <li>
              <Link to="/contact/">Contact</Link>
            </li>            
          </ul>
    
            </div>
        </nav>
    </header>
);
export default navbar;