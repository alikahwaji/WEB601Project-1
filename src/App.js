import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import NavComp from './Components/NarBar/navBar';
import FooterComp from './Components/Footer/footer';
import LoginComp from './Components/LoginForm/loginForm';
import CourseListComp from './Components/courseList';
import HamburgerComp from './Components/NavHamburger/navHamburger';
import BackdropComp from './Components/Backdrop/backdrop';
import CourseComp from './Components/Course/course';
import ContactComp from './Components/Contact/contact';

function Index() {
  return (
    <div style={{height: '100%'}}> /* gives hamburger full height */
      <NavComp />
      <HamburgerComp />
      <BackdropComp />
      <main style={{marginTop: '64px'}}>
      <h2>Home</h2>
      <p>Apiculture New Zealand</p>
      </main>     
      
      <img alt="Bee img" src=" "/>
      <FooterComp />
    </div>
  );
}

function About() {
  return (
    <div>
      <NavComp />
      <h2>About</h2>
      <FooterComp />

    </div>
  );
}

function LoginForm() {
  return(
    <div>
      <NavComp />
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

