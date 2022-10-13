import Table from "../component/Table";
import { useState, useEffect } from "react";
import { remove, getAll, updateCourse, createQuiz } from "../api/course";
import Course from "../component/Course";
import Header from "../component/Header";
import { useNavigate } from "react-router-dom";
import Footer from "../component/Footer";
import QuizCreator from "../component/QuizCreator";
import Navbar from "../component/Navbar";



const Courses = () => {

const [courseName, setCourseName] = useState("");
const [courseCode, setCourseCode] = useState("");
const [courseType, setCourseType] = useState("");

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

  function onUpdateRow(id, courseName, courseCode, courseType){
    return updateCourse(id, courseName, courseCode, courseType)
      .then((response) => {
        getAll().then((response) => {
          setCourse(response);
        });
        //setCourse(response);
        //getAllUsers()
        // console.log('i am  here ')
        //return user;
        //window.location.reload();
        })
      .catch((err) => {

        return Promise.reject(err);
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

  const courseOptions = ["programming", "sports", "science"];



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
        onUpdateRow={onUpdateRow}
        name={courseName}
        setName={setCourseName}
        type={courseType}
        setType={setCourseType}
        arg={courseCode}
        setArg={setCourseCode}
        heading={"Courses"}
        navigateToRegister={navigateToRegister}
        options={courseOptions}
      />
      
      <QuizCreator />  


      <Footer />
    </>
  );
};

export default Courses;
