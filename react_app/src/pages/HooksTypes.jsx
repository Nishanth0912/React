import { useState } from "react";

const HooksTypes = ()=>{
       const[fstate,setFstate]=useState(()=>{
        return 18
       })

    const result = ()=>{
        
            return setFstate(17)

    }

    return(
        <>
          <h1 className="text-4xl text-center font-bold py-2 text-amber-600">Use State</h1>
          <p className="text-2xl text-center">const[state,setState]=useState()</p>
          <p className="text-2xl text-center">const[state,setState]=useState(18)</p>
          <p className="text-2xl text-center">const[state,setState]=useState(true)</p>
          <p className="font-mono text-2xl text-center">const[state,setState]=useState("Nishanth")</p>
          <p className="font-mono text-2xl text-center">const[state,setState]=useState([1,2,3,4,5])</p>
          <p className="font-mono text-2xl text-center">const[state,setState]=useState("{" sname : 'nishanth',id:18 "}")</p>
          <p className="font-mono text-2xl text-center">const[state,setState]=useState(function)</p>
          <div className="flex flex-col justify-center items-center gap-2">
          <p className="text-5xl text-blue-700">{fstate}</p>
          <button  className="p-2 border-2 rounded " onClick={result}>Trigger</button>
          </div>
          

          <h1 className="text-4xl text-center font-bold py-2 text-amber-600">Use Effect</h1>
          <p className="text-2xl text-center">useEffect(function res() {
            console.log("Hello from use effect")
            },[])</p>
        </>
    )
}

export default HooksTypes;