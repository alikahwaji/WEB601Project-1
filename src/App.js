import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import NavComp from './Components/NarBar/navBar';
import FooterComp from './Components/Footer/footer';
import LoginComp from './Components/LoginForm/loginForm';
import CourseListComp from './Components/courseList';
import HomeComp from './Components/Home/home';

import HamburgerComp from './Components/NavHamburger/navHamburger';
import BackdropComp from './Components/Backdrop/backdrop';
import CourseComp from './Components/Course/course';
import ContactComp from './Components/Contact/contact';

function Index() {
  return (
    <div style={{height: '100%'}}> 
      <NavComp />
      <br />
      <HomeComp />
        
     
      <FooterComp />
    </div>
  );
}

function About() {
  return (
    <div>
      <NavComp />
      <br /><br /><br />
      <p style={{'font-size': '50px','backgroundColor': 'pink'}}>And all of my "ABOUT"content</p>
      <h2>The BeeCourse</h2>
      <FooterComp />

    </div>
  );
}

function LoginForm() {
  return(
    <div>
      <NavComp />
      <br />
      <br />
      <br />
      <LoginComp />
      <FooterComp />

    </div>
  );
}

function Courses() {
  return(
    <div>
      <NavComp />
      <h2>Courses</h2>    
      <CourseListComp />
      <FooterComp />

    </div>
  );
}

function Contact() {
  return (
    <div>
      <NavComp />
      <h2>Contact</h2>
      <ContactComp />
      <FooterComp />

    </div>
  );
}

function AppRouter() {
  return (
    <Router>
      <div>       

        <Route path="/" exact component={Index} />
        <Route path="/about/" component={About} />      
        <Route path="/form/" component={LoginForm} />
        <Route path="/courselist/" component={Courses} />
        <Route path="/contact/" component={Contact} />
        
      </div>
    </Router>
  );
}
export default AppRouter;

