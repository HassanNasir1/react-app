import React, { useState, useEffect } from "react";
import "./index.css";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Register from "./pages/Register";
import Users from "./pages/Users";
import NoPage from "./pages/NoPage";
import Courses from "./pages/Course";
import Quiz from "./pages/Quiz";
import Login from "./pages/Login";
import Logout from "./pages/Logout";
import RegisterCourse from "./pages/RegisterCourse";
import { User } from "./context/";
import ProtectedRoute from "./component/ProtectedRoutes";
import { getToken } from "./Cache/User";
import Navbar from "./component/Navbar";
import jwtDecode from "jwt-decode";

export default function App() {
  const [user, setUser] = useState();
  const location = window.location.href;
  const [navigation, setNavigation] = useState([
    { name: "Login", href: "/" },
    { name: "Register", href: "/register" },
    { name: "Admin", href: "/admin" },
    { name: "Course", href: "/course" },
    { name: "Register Course", href: "/course/register" },
    { name: "Quiz", href: "/quiz" },
  ]);

  useEffect(() => {
    let pathName = location.split("/");
    let currentRoute = "";
    pathName.map((item, index) => {
      if (index > 2) {
        currentRoute = `${currentRoute}/${item}`;
      }
    });

    let nav = navigation.map((item) =>
      item.href == currentRoute
        ? { ...item, current: true }
        : { ...item, current: false }
    );
    setNavigation(nav);
  }, [location]);

  useEffect(() => {
    console.log('userrrr',user)
    if (user) {
      let nav = navigation.filter(
        (item) => !["Login", "Register"].includes(item.name)
      );
      nav[nav.length] = { name: "Logout", href: "/logout" };
      setNavigation([...nav]);
    }
  }, [user]);

  const extractUser = async () => {
    const token = await getToken();
    console.log(token)
    if (!token) {
      return;
    }
    let decode = jwtDecode(token);
    console.log(decode)
    setUser(decode);
  };
  useEffect(() => {
    console.log("user",user);
    console.log("in extract user")
    if (!user) {
      extractUser();
    }
  }, []);
  return (
    <User.Provider value={{ user, setUser }}>
      <BrowserRouter>
        <Navbar navigation={navigation} />
        <Routes>
          <Route index element={<Login />}></Route>
          <Route path="/register" element={<Register />}></Route>
          <Route
            path="/admin"
            element={
              <ProtectedRoute>
                <Users />
              </ProtectedRoute>
            }
          ></Route>
          <Route
            path="/course"
            element={
              <ProtectedRoute>
                <Courses />
              </ProtectedRoute>
            }
          ></Route>
          <Route
            path="/quiz"
            element={
              <ProtectedRoute>
                <Quiz />
              </ProtectedRoute>
            }
          ></Route>
          <Route
            path="/course/register"
            element={
              <ProtectedRoute>
                <RegisterCourse />
              </ProtectedRoute>
            }
          ></Route>
          <Route
            path="/logout"
            element={
              <ProtectedRoute>
                <Logout />
              </ProtectedRoute>
            }
          ></Route>
          <Route path="*" element={<NoPage />}></Route>
        </Routes>
      </BrowserRouter>
    </User.Provider>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);

// function Car(){

//   const [car, setCar] = useState({
//     brand: 'Ford',
//     color: 'red',
//     type: 'mustang',
//     year: '1964'
//   })
//   const updateColor = () => {
//     setCar((prevState) =>{
//       return {...prevState, color:'blue'}
//     })
//   }
//   return (
//     <>
//     <h1>I am {car.brand}</h1>
//     <p>My color is {car.color}</p>
//     <button onClick={updateColor}>Blue</button>
//     </>

//   )
// }

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<Car />);

// function Timer() {
//   const [count, setCount] = useState(0);

//   useEffect(() => {
//     let timer = setTimeout(() => {
//       setCount((count) => count + 1 )
//     },1000)
//     return () => clearTimeout(timer)
//   }, [])
//   return <h1>I am renderd {count} times</h1>
// }

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<Timer />);

// function Counter() {
//   const [count, setCount] = useState(0);
//   const [calculation, setCalculation] = useState(0);

//   useEffect(() => {
//     setCalculation(()=> count * 2);
//   },[count]);

//   return(
//     <>
//     <p>Count: {count}</p>
//     <button onClick={() => setCount((c)=> c + 1)}>+</button>
//     <p>Calculation: {calculation}</p>
//     </>
//   )
// }

// function App(){
//   const [inputValue, setInputValue] = useState("");
//   const prevInputValue = useRef("");

//   useEffect(()=>{
//     prevInputValue.current = inputValue;
//   },[inputValue])

//   return (
//     <>
//     <input type="text" value={inputValue} onChange={(e) => setInputValue(e.target.value)}/>
//     <h1>Current Value: {inputValue}</h1>
//     <h1>previous Value: {prevInputValue.current}</h1>
//     </>
//   )
// }
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<App />);
