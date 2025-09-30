import { useState } from "react";

// const Hooks1 =()=>{

//     const [accept, setAccept] = useState(false);
//     return (
//         <>
//       <div>
//         <input type="checkbox" 
//         checked={accept} 
//         onChange={(e)=> setAccept(e.target.checked)} />
//       </div>
//       <p>{accept?"Accepted ✅":"Not Accepted ❌"}</p>
//       </>
//     );
// }

// export Hooks1;


// const Hooks =()=>{
//     const [count,setCount]=useState(0);
//     const increase =()=>{
//         setCount(1+count)
//     }

//     return(<>
//        <h1>count : {count}</h1>
//        <button className="p-1 border-2 rounded-xl bg-blue-500 text-white my-1" onClick={increase}>Increase</button>
//     </>)
// }



// const Hooks =()=>{
//     const[present,setPresent]=useState(false);
//     const status = ()=>{
//    if (present===false) {
//     setPresent(true)
//    }else{
//     setPresent(false)
//    }
// }
//     return(
//         <>
//          <p>Attendance Status :{present?"Present":"Absent"}</p>
//          <button className="p-2 bg-amber-500 text-black rounded-xl border-2" onClick={status}>Check Status</button>
//         </>
//     )
// }


const Hooks = ()=>{
    const [state,setState]=useState(true);

    const process = ()=>{
    setState(!state)
    }

    const[num,setNum]=useState(0);

    return(
    <>
    
       <div>
         <p>{state?<div className="flex flex-col justify-center items-center h-150 w-350">
        <div className="w-50 h-30 bg-amber-500  flex justify-center items-center border-2 my-2">Box</div><button className="p-2 border-2 rounded-xl bg-indigo-800 text-white" onClick={process}>Hide</button></div>:<div className="flex flex-col justify-center items-center h-150 w-350"><button className="p-2 border-2 rounded-xl bg-green-800 text-white" onClick={process}>show</button></div>}</p>
        </div>


    </>
    )
}

export default Hooks;