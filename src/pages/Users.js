import Table from "../component/Table";
import User from "../component/User";
import QuestionAttempt from "../component/QuestionAttempt";
import { useState, useEffect } from "react";
import { deleteUser, getAllUsers } from "../api/user";
import { remove, getAll } from "../api/course";
import Header from "../component/Header";
import Footer from "../component/Footer";

const Users = () => {
  const [users, setUsers] = useState([]);
  const [course, setCourse] = useState([]);



  function onDeleteRow(id) {
    return deleteUser(id)
      .then((response) => {
        const newUsers = users.filter((user) => {
          return user._id != id;
        });
        setUsers(newUsers);
        return true;
      })
      .catch((err) => {
        return false;
      });
  }

  useEffect(() => {
    getAllUsers()
      .then((response) => {
        setUsers(response);
        //console.log(response);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  //Code taken from course file to show Courses Table

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

  const courseHeadings = ["Course Name", "Course Code", "Course Type", "Action"];

  const courseSchema = ["courseName", "courseCode", "courseType"];

  //ends here

  const headings = ["Name", "Email", "Type", "Action"];

  const schema = ["name", "email", "userType"];

  

  return (
    <>
      <Header
        heading={"Welcome to Administrator Panel"}
        tagline={
          "loremLorem ipsum is a placeholder text commonly used or a typeface without relying on meaningful content"
        }
      />
      <Table
        headings={headings}
        data={users}
        schema={schema}
        onDeleteRow={onDeleteRow}
        name={"Users"}
        visibility="invisible"
      />
        <Table
        headings={courseHeadings}
        data={course}
        schema={courseSchema}
        onDeleteRow={onDeleteRow}
        name={"Courses"}
        visibility="invisible"
        
      />
      <User />
      <QuestionAttempt />
      <Footer/>
    </>
  );
};

export default Users;
