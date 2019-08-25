import React from 'react';
import './navHamburger.css';
import { Link } from "react-router-dom";

const navHamburger = props => (
    <nav className="navHamburger">
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
    </nav>
);

export default navHamburger;