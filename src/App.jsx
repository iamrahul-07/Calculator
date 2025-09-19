import { useEffect, useState } from "react";
import Button from "./Button/Button";
import {evaluate} from "mathjs"

function App() {
  const [input, setInput] = useState("");
  const [darkMode, setDarkMode]=useState("");
  useEffect(()=>{
    console.log(darkMode);
    if(darkMode==="dark"){
      document.documentElement.classList.add("dark");
    }else{
      document.documentElement.classList.remove("dark");
    }
  },[darkMode])

  const handleClick = (value) => {
    if (value === "=") {
      try {
        setInput(evaluate(input).toString()); // In real apps, use a parser (not eval)
      } catch {
        setInput("Error");
      }
    } else if (value === "AC") {
      setInput("");
    } else if(value==="DEL"){
      setInput((prev) => prev.slice(0, -1));
    }
    else {
      setInput((prev) => {
        if(prev==="Error"){
          return value;
        }
        return prev+value;
      });
    }
  };

  const buttons = [
    "AC","DEL","%","/",
    "7", "8", "9","*",
    "4", "5", "6","-",
    "1", "2", "3","+",
    "0", ".", "="
  ];

  return (
    <>
      <div className="bg-gray-100 w-28 text-xl absolute top-24 left-[46%] flex justify-around items-center rounded-full h-8 text-blue-200 dark:bg-gray-800 transition-colors duration-500 will-change-auto"> <span className={`${darkMode==="dark"?"text-blue-700 transition-colors duration-500":""}`} onClick={()=>setDarkMode("dark")}><i className="fa-solid fa-moon"></i></span><span className={`${darkMode===""?"text-blue-600 transition-colors duration-500":""}`} onClick={()=>setDarkMode("")}><i className="fa-solid fa-sun"></i></span></div>
    <div className="min-h-screen bg-gradient-to-r from-blue-200 to-blue-300 dark:bg-gradient-to-r dark:from-gray-500 dark:to-gray-600 transition-colors duration-500 will-change-auto shadow-2xl flex items-center justify-center">
      <div className="bg-white p-6 rounded-2xl shadow-2xl w-md dark:bg-gray-900 transition-colors duration-500 will-change-auto">
        <div className="bg-gray-100 text-black text-right text-2xl font-mono font-bold rounded-full mb-4 mt-12 h-24 overflow-x-auto outline-none border-none p-8 shadow-2xl dark:bg-gray-600 dark:text-gray-200 transition-colors duration-500 will-change-auto dark:shadow-black">
          {input || "0"}
        </div>
        <div className="grid grid-cols-4 gap-3">
          {buttons.map((btn) => (
            <Button key={btn} label={btn} onClick={() => handleClick(btn)} />
          ))}
        </div>
      </div>
    </div>
    </>
  );
}

export default App;
