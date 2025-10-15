import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Form = ()=>{
   
   const navigator = useNavigate();
   const[form,setFormData] =useState({username:"",city:"",number:"",useremail:"",role:"",reason:""});
   const[datas,setDatas]=useState([])

   const handleChange = (e)=>{
    setFormData({...form,[e.target.name]:e.target.value})
   }

  

   const handlesubmit = (e)=>{
     e.preventDefault();
     setDatas(form);
     const stringData= JSON.stringify(datas);
     localStorage.setItem("users",stringData)
     alert("successfully saved")
     navigator("/contact")
   }

   
    return(<>
      <div className="h-165 flex bg-amber-200 justify-around items-center">
        <form className="flex flex-col gap-2">
           <input type="text" name="username" placeholder="Enter Your Name" onChange={handleChange} className="border"/>
           
           <input type="text" name="city" placeholder="Enter City Name" onChange={handleChange} className="border" />

           <input type="text" name="number" placeholder="Enter Your Mobile Number" onChange={handleChange} className="border" />

           <input type="email" name="useremail" placeholder="Enter Your Email" onChange={handleChange} className="border"/>

           <select name="role" className="border" onChange={handleChange}>
           <option value="">Select Role</option>
            <option value="TL">TL</option>
            <option value="Manager">Manager</option>
            <option value="GM">GM</option>
           </select>

           <textarea name="reason"  cols="20" rows="2" className="border" onChange={handleChange} placeholder="Reason"></textarea>

           <button onClick={handlesubmit}>Submit</button>



        </form>
        <div>
        <h1>Result Data</h1>
        <p>{form.username}</p>
        <p>{form.city}</p>
        <p>{form.useremail}</p>
        <p>{form.number}</p>
        <p>{form.role}</p>
        <p>{form.reason}</p>
      </div>
      </div>

     
    </>)
}

export default Form;