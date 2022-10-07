import Table from "../component/Table";
import { useState, useEffect } from "react";
import { remove, getAll } from "../api/course";
import Course from '../component/Course';

const Courses = () => {
  const [course, setCourse] = useState([]);
  function onDeleteRow(id) {
   return remove(id).then((response) => {
      const newCourses = course.filter((course) => {
        return course._id != id;
      });
      setCourse(newCourses);
      return true
    }).catch((err) => {
        return false;
    });
  }

  useEffect(() => {
    getAll()
      .then((response) => {
        console.log(response);
        setCourse(response);
        //console.log(response);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const headings = ["Course Name", "Course Code", "Course Type", "Action"];

  const schema = ["courseName", "courseCode", "courseType"];

  return (
    <>

      <Table
        headings={headings}
        data={course}
        schema={schema}
        onDeleteRow={onDeleteRow}
        name={"Courses"}
      />

      <Course/>

    </>
  );
};

export default Courses;
