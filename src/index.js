import React from "react";
import "./index.css";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Register from "./pages/Register"
import Users from "./pages/Users";
import NoPage from "./pages/NoPage";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
   
          <Route index element={<Users />}></Route>
          <Route path="/register" element = {<Register/>}></Route>
        <Route path="*" element={<NoPage />}></Route>
      </Routes>
    </BrowserRouter>
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
