import { useState } from "react";
import "./App.css";
import GrantAccess from "./components/GrantAccess";
import Search from "./components/Search";

// function App() {
//   const [count , setCount] = useState(0);
//   return (
//     <>
//       <div className="  h-screen w-full flex justify-center items-center  flex-col bg-green-500">

//         <div className=" flex flex-row gap-4">
//           <div className=" text-lg w-6 border rounded-md ">
//             <button onClick={() => setCount(count-1)}
//             className="w-full"
//             >
//             - </button>
//           </div>

//           <div>
//             {count}
//           </div>
            
//           <div className=" text-lg w-6 border rounded-md">
//             <button onClick={() => setCount(count+1)}
//             className="w-full"
//             > + </button>
//           </div>
//         </div>

//         <div className=" border-2 border-black rounded-md p-1 bg-blue-700">
//           <button onClick={() => setCount(0)}
//           className="w-full"
//           >Reset Counter</button>
//         </div>
//       </div>
      
//     </>
//   )
// }

function App() {

  const [tab, setTab] = useState(true);

  const tabHandler =(param) => {
    setTab(param);
  }
  return (
    <div className=" w-full h-full flex justify-center items-center text-white">
      <div className=" w-2/4 flex flex-col items-center gap-8">
        <div className="mt-2">
          <h1 className=" font-bold text-4xl text-center">WEATHER APP</h1>
        </div>
        <div className="flex w-full justify-between items-center text-md mt-10 tracking-widest">
          <div 
          onClick={()=> tabHandler(true)}
          className={`cursor-pointer ${tab ? " rounded flex bg-gray-400 items-center justify-center px-2 py-1 transition-all text-center" : " flex items-center justify-center text-center"}`}
          >Your Weather</div>
          <div 
          onClick={()=> tabHandler(false)}
          className={`cursor-pointer ${!tab ? " rounded flex bg-gray-400 items-center justify-center px-2 py-1 transition-all text-center" : " flex items-center justify-center text-center"}`}
          >Search Weather</div>
        </div>

        <div className="mt-8 w-full">
          {
            tab ? <GrantAccess/> : <Search/>
          }
        </div>
      </div>
    </div>
  )
}
export default App;
