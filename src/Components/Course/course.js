import React from "react";
import "./course.css";

class Course extends React.Component {
    render() {
        return (
            <div className='course'>
                <p>Practical beekeeping courses</p>
                <img alt= 'ManukaBees' src={require('../../Images/manuka-bees.jpg')}/>                

            </div>
        ) 
    }
}

export default Course;