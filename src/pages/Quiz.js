import Table from "../component/Table";
import { useState, useEffect } from "react";
import { remove, getAll } from "../api/course";
import { getImages } from "../api/unsplash";
import Header from "../component/Header";
import Footer from "../component/Footer";
import Card from "../component/Card";
import Navbar from "../component/Navbar";

const Quiz = () => {
  const [course, setCourse] = useState([]);
  const [images, setImages] = useState({});

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

  useEffect(() => {
    getImages()
      .then((response) => {
        console.log("response", response);
        setImages(response);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  //   const [course, setCourse] = useState([]);
  //   function onDeleteRow(id) {
  //    return remove(id).then((response) => {
  //       const newCourses = course.filter((course) => {
  //         return course._id != id;
  //       });
  //       setCourse(newCourses);
  //       return true
  //     }).catch((err) => {
  //         return false;
  //     });
  //   }

  //   useEffect(() => {
  //     getAll()
  //       .then((response) => {
  //         console.log(response);
  //         setCourse(response);
  //         //console.log(response);
  //       })
  //       .catch((error) => {
  //         console.error(error);
  //       });
  //   }, []);

  //   const headings = ["Course Name", "Course Code", "Course Type", "Action"];

  //const schema = ["courseName", "courseCode", "courseType"];
  const navigation = [
    { name: 'Login', href: '/', current: false },
    { name: 'Register', href: '/register', current: false },
    { name: 'Admin', href: '/admin', current: false },
    { name: 'Course', href: '/course', current: false },
    { name: 'Register Course', href: '/course/register', current: false },
    { name: 'Quiz', href: '/quiz', current: true },
  ]

  return (
    <>
    <Navbar navigation = {navigation}/>
      {/* <Table
        headings={headings}
        data={course}
        schema={schema}
        onDeleteRow={onDeleteRow}
        name={"Courses"}
      /> */}
      
      <Header
        heading={"Welcome to Student Panel"}
        tagline={
          "loremLorem ipsum is a placeholder text commonly used or a typeface without relying on meaningful content"
        }
      />

      <Card course={course} images={images.results} />

      <Footer />
    </>
  );
};

export default Quiz;
