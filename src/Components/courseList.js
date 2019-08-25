import React from "react";
import Course from "./Course/course";

class CourseList extends React.Component {
    render() {
        return (
            <div>
                <h2>CourseList</h2>
                <Course />
                <Course />
                <Course />
                <Course />
                <Course />

            </div>
        )

    }

}
export default CourseList;