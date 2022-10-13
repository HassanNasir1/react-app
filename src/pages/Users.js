import Table from "../component/Table";
import User from "../component/User";
import QuestionAttempt from "../component/QuestionAttempt";
import { useState, useEffect } from "react";
import { deleteUser, getAllUsers, updateUser } from "../api/user";
import { remove, getAll, updateCourse } from "../api/course";
import Header from "../component/Header";
import Footer from "../component/Footer";
import Navbar from "../component/Navbar";

const Users = () => {
  const [user, setUser] = useState({});
  const [users, setUsers] = useState([]);
  const [course, setCourse] = useState([]);

  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [userType, setUserType] = useState("");

  const [courseName, setCourseName] = useState("");
  const [courseCode, setCourseCode] = useState("");
  const [courseType, setCourseType] = useState("");


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

  
  function onUpdateRow(id, userName, email, userType){
    return updateUser(id, userName, email, userType)
      .then((response) => {
        setUser(response);
        getAllUsers().then((response) => {
          setUsers(response);
        })
        console.log('i am  here ')
        //return user;
        window.location.reload();
        })
      .catch((err) => {

        return Promise.reject(err);
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

    function onDeleteCourseRow(id) {
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

    function onUpdateCourseRow(id, courseName, courseCode, courseType){
      return updateCourse(id, courseName, courseCode, courseType)
        .then((response) => {
          //setCourse(response);
          getAll().then((response) => {
            setCourse(response);
          });
          // console.log('i am  here ')
          //return user;
          //window.location.reload();
          })
        .catch((err) => {
          console.log('err',err)
;          return Promise.reject(err);
        });
    }

  const courseHeadings = ["Course Name", "Course Code", "Course Type", "Action"];

  const courseSchema = ["courseName", "courseCode", "courseType"];

  //ends here

  const headings = ["Name", "Email", "Type", "Action"];

  const schema = ["name", "email", "userType"];

  const userOptions = ["admin", "student", "teacher"];

  const courseOptions = ["programming", "sports", "science"];

  const navigation = [
    { name: 'Login', href: '/', current: false },
    { name: 'Register', href: '/register', current: false },
    { name: 'Admin', href: '/admin', current: true },
    { name: 'Course', href: '/course', current: false },
    { name: 'Register Course', href: '/course/register', current: false },
    { name: 'Quiz', href: '/quiz', current: false },
  ]

  

  return (
    <>
    <Navbar navigation = {navigation}/>
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
        onUpdateRow={onUpdateRow}
        name={userName}
        setName={setUserName}
        type={userType}
        setType={setUserType}
        arg={email}
        setArg={setEmail}
        options={userOptions}
        heading={"Users"}
        visibility="invisible"


      />
        <Table
        headings={courseHeadings}
        data={course}
        schema={courseSchema}
        onDeleteRow={onDeleteCourseRow}
        onUpdateRow={onUpdateCourseRow}
        name={courseName}
        setName={setCourseName}
        type={courseType}
        setType={setCourseType}
        arg={courseCode}
        setArg={setCourseCode}
        heading={"Courses"}
        visibility="invisible"
        options={courseOptions}
        
      />
      {/* <User />
      <QuestionAttempt /> */}
      <Footer/>
    </>
  );
};

export default Users;
