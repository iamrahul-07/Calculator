// src/components/Button.jsx
function Button({ label, onClick }) {
  const isOperator = ["+", "-", "*", "/"].includes(label);
  const specialKey=["AC", "DEL", "!"].includes(label);
  const isEqual=label==='=';


  const baseStyle = "h-18 font-semibold rounded-full shadow-2xl transition-colors duration-500 will-change-auto cursor-pointer dark:shadow-black";
  let bgColor="";

  if(isEqual){
    bgColor="bg-blue-500 col-span-2 text-4xl font-bold text-white hover:bg-blue-600 dark:bg-blue-600 dark:hover:bg-blue-700";
  }else if(specialKey){
    bgColor= "bg-white hover:bg-gray-200 text-blue-300 shadow-2xl text-2xl dark:bg-gray-700 dark:text-blue-300 dark:hover:bg-gray-800";
  }else if(isOperator){
    bgColor="bg-blue-200 hover:bg-blue-300 text-2xl  text-black dark:bg-blue-900 dark:text-gray-200 dark:hover:bg-[#1A2A80]";
  }else{
    bgColor= "bg-white hover:bg-gray-200 text-black shadow-2xl rounded-full text-2xl dark:bg-gray-700 dark:hover:bg-gray-800 dark:text-white";
  }
  

  return (
    <button
      className={`${baseStyle} ${bgColor}`}
      onClick={onClick}
    >
      {label}
    </button>
  );
}

export default Button;
