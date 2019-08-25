import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import NavComp from './Components/NarBar/navBar';
import FooterComp from './Components/footer';
import LoginComp from './Components/login';
import CourseListComp from './Components/courseList';
import CourseComp from './Components/Course/course';


function Index() {
  return (
    <div>
      <NavComp />
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

function Tours() {
  return (
    <div>
      <NavComp />
      <h2>Tours</h2>
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
function AppRouter() {
  return (
    <Router>
      <div>
        

        <Route path="/" exact component={Index} />
        <Route path="/about/" component={About} />
        <Route path="/tours/" component={Tours} />
        <Route path="/form/" component={LoginForm} />
        <Route path="/courselist/" component={Courses} />
        
      </div>
    </Router>
  );
}
export default AppRouter;

