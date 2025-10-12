import { useState } from "react";

import kohli from './images/cards/kohliipl.jpg'
import lighton from './images/light/lighton.png'
import lightoff from './images/light/lightoff.png'
function App() {
   
  const[value,setValue]=useState("");
  const[data,setData]=useState("");
  const[box,setBox]=useState(false);
  const[img,setImg]=useState("");
  const[age,setAge]=useState("");

  const collectData = (e)=>{
    const data =e.target.value;
    setValue(data)
  }
  
  const getValue = (e)=>{
     const val=e.target.value;
    if(val!=""){
      setData(kohli)
    }else{
      setData("")
    }
  }

  const getBox =(e)=>{
    const val =e.target.value.toLowerCase();
    if (val==="blue") {
      setBox(true)
    }else{
      setBox(false)
    }
  }

  const getImage = (e)=>{
    const val = e.target.value.replaceAll(" ", "").toLowerCase();
    if (val=="lightson") {
      setImg(lighton)
    }else if (val=="lightsoff") {
      setImg(lightoff)
    }else{
      setImg("")
    }
  }



  return (
    <>
    <div className="flex  justify-center items-center h-130 gap-4 mx-10">
      <div className="w-100 h-60 border flex flex-col justify-center items-center">
    <h1 className="text-2xl my-3 text-violet-950 font-bold">Form Handling</h1>
    <label className="">UserName: </label>
    <input type="text" onChange={collectData} className="border rounded inline"/>
    <p className="text-4xl text-blue-600">{value}</p>
    </div>

    <div className="w-100 h-60 border flex flex-col justify-center items-center">
    <h1 className="text-2xl my-3 text-orange-500 font-bold">Task 1</h1>
    <label>Enter the Value : </label>
    <input type="text"  onChange={getValue} className="border rounded inline"/>
    <img src={data}  className="w-30"/>
    </div>

    <div className="w-100 h-60 border flex flex-col justify-center items-center">
    <h1 className="text-2xl my-3 text-pink-800 font-bold">Task 2</h1>
    <label>Enter Blue : </label>
    <input type="text"  onChange={getBox} className="border rounded inline"/>
    {box&&<div className="bg-blue-950 h-20 w-20 my-4"></div>}
    </div>

    <div className="w-100 h-60 border flex flex-col justify-center items-center">
    <h1 className="text-2xl my-3 text-yellow-500 font-bold">Task 3</h1>
    <label>Switch for Light : (Lights on / Lights off) </label>
    <input type="text"  onChange={getImage} className="border rounded inline"/>
    <img src={img} className="w-30" />
    </div>
  
  

   
    
    </div>

  
   
    </>
  )
}

export default App
