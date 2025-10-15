import { useState } from "react";
import { useNavigate } from "react-router-dom";

const PermissionForm = () => {
    const navigator = useNavigate();
    const[form,SetForm]=useState({username:"",city:"",number:"",useremail:"",role:"",reason:""});

    const[data,setData]=useState([]);

    const getData = (e)=>{
     SetForm({...form,[e.target.name]:e.target.value})
    }


    const handlesubmit = (e)=>{
       e.preventDefault();
       setData(form)
       const stringData = JSON.stringify(form)
       localStorage.setItem("user",stringData)
       alert("done")
       navigator("/permissionletter")
    }

    return (<>

<div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-amber-100 to-amber-300 p-4">
  <form 
    className="bg-white shadow-lg rounded-xl p-8 w-full max-w-md flex flex-col gap-4"
    onSubmit={handlesubmit}
  >
    <h1 className="text-2xl font-bold text-center text-amber-700 mb-4">
      Permission Form
    </h1>

    <input
      type="text"
      name="username"
      placeholder="Enter Your Name"
      onChange={getData}
      value={form.username}
      className="border rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-amber-500"
    />

    <input
      type="text"
      name="city"
      placeholder="Enter City Name"
      onChange={getData}
      value={form.city}
      className="border rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-amber-500"
    />

    <input
      type="text"
      name="number"
      placeholder="Enter Your Mobile Number"
      onChange={getData}
      value={form.number}
      className="border rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-amber-500"
    />

    <input
      type="email"
      name="useremail"
      placeholder="Enter Your Email"
      onChange={getData}
      value={form.useremail}
      className="border rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-amber-500"
    />

    <select
      name="role"
      className="border rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-amber-500"
      value={form.role}
      onChange={getData}
    >
      <option value="">Select Role</option>
      <option value="TL">TL</option>
      <option value="Manager">Manager</option>
      <option value="GM">GM</option>
    </select>

    <textarea
      name="reason"
      cols="20"
      rows="3"
      placeholder="Reason"
      className="border rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-amber-500"
      onChange={getData}
      value={form.reason}
    ></textarea>

    <button
      type="submit"
      className="bg-amber-500 hover:bg-amber-600 text-white font-semibold py-2 rounded-lg transition duration-200"
    >
      Generate
    </button>
  </form>
</div>

    </>)
}

export default PermissionForm;