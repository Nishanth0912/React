// import { useState } from "react";

// const Register = () => {
//     const[form,setForm]=useState({username:"",email:"",age:""});

//     const change = (e)=>{
//       setForm({...form,[e.target.name]:e.target.value})
//     }
//     const handleclick = (e)=>{
//           e.preventDefault();
//           localStorage.setItem("users",JSON.stringify(form))
//           alert("successfully Done")
//           setForm({username:"",email:"",age:""})
//     }

//     return (
//         <>
//             <form onSubmit={handleclick} className="flex flex-col w-70 gap-2">
//                 <input type="text" name="username" placeholder="Enter Your Name" value={form.username} onChange={change} className="border " />
//                 <input type="email" name="email" placeholder="Enter Your Email" value={form.email} onChange={change} className="border" />
//                 <input type="number" name="age" placeholder="Enter Your Age"  value={form.age} onChange={change} className="border" />
//                 <input type="submit" value="submit" className="border w-20" />
//             </form>
//             <div>
//                 <p>{form.username}</p>
//                 <p>{form.email}</p>
//                 <p>{form.age}</p>
//             </div>
//         </>
//     )
// }

// export default Register;





import { useState, useEffect } from "react";

const Register = () => {
  const [form, setForm] = useState({ username: "", email: "", age: "" });
  const [users, setUsers] = useState([]);

  // Load stored users from localStorage on first render
  useEffect(() => {
    const storedUsers = JSON.parse(localStorage.getItem("users")) || [];
    setUsers(storedUsers);
  }, []);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validation (Optional)
    if (!form.username || !form.email || !form.age) {
      alert("Please fill all fields");
      return;
    }

    const newUsers = [...users, form]; // add new form data to existing array
    setUsers(newUsers);
    localStorage.setItem("users", JSON.stringify(newUsers)); // store array in localStorage
    alert("Successfully Added ✅");

    // Clear the form
    setForm({ username: "", email: "", age: "" });
  };

  return (
    <div className="p-4 max-w-lg mx-auto">
      <h2 className="text-2xl font-bold mb-4 text-center">Registration Form</h2>

      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-3 border p-4 rounded-lg shadow-md"
      >
        <input
          type="text"
          name="username"
          placeholder="Enter Your Name"
          value={form.username}
          onChange={handleChange}
          className="border p-2 rounded"
        />
        <input
          type="email"
          name="email"
          placeholder="Enter Your Email"
          value={form.email}
          onChange={handleChange}
          className="border p-2 rounded"
        />
        <input
          type="number"
          name="age"
          placeholder="Enter Your Age"
          value={form.age}
          onChange={handleChange}
          className="border p-2 rounded"
        />
        <button
          type="submit"
          className="bg-blue-600 text-white p-2 rounded hover:bg-blue-700"
        >
          Submit
        </button>
      </form>

      {/* 🧾 Table Section */}
      {users.length > 0 && (
        <div className="mt-6">
          <h3 className="text-xl font-semibold mb-2">Users List</h3>
          <table className="w-full border-collapse border border-gray-400">
            <thead className="bg-gray-200">
              <tr>
                <th className="border p-2">#</th>
                <th className="border p-2">Name</th>
                <th className="border p-2">Email</th>
                <th className="border p-2">Age</th>
              </tr>
            </thead>
            <tbody>
              {users.map((u, index) => (
                <tr key={index} className="text-center">
                  <td className="border p-2">{index + 1}</td>
                  <td className="border p-2">{u.username}</td>
                  <td className="border p-2">{u.email}</td>
                  <td className="border p-2">{u.age}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default Register;
