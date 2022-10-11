import Table from "../component/Table";
import { useState, useEffect } from "react";
import { remove, getAll } from "../api/course";
import Course from "../component/Course";
import Header from "../component/Header";
import { useNavigate } from "react-router-dom";
import Footer from "../component/Footer";
import QuizCreator from "../component/QuizCreator";



const Courses = () => {

  const navigate = useNavigate();
  const navigateToRegister = () => {
  
  navigate('/course/register');
}

  const [course, setCourse] = useState([]);
  function onDeleteRow(id) {
    return remove(id)
      .then((response) => {
        const newCourses = course.filter((course) => {
          return course._id != id;
        });
        setCourse(newCourses);
        return true;
      })
      .catch((err) => {
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
      <Header
        heading={"Welcome to Teachers panel"}
        tagline={
          "loremLorem ipsum is a placeholder text commonly used or a typeface without relying on meaningful content"
        }
      />
      <Table
        headings={headings}
        data={course}
        schema={schema}
        onDeleteRow={onDeleteRow}
        name={"Courses"}
        navigateToRegister={navigateToRegister}
      />
      
      <QuizCreator />  


      <Footer />
    </>
  );
};

export default Courses;
