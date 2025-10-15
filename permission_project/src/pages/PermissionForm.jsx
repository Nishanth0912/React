import { useState } from "react";
import { useNavigate } from "react-router-dom";

const PermissionForm = () => {
  const navigator = useNavigate();
  const [form, setForm] = useState({
    username: "",
    city: "",
    mobile: "",
    email: "",
    role: "",
    reason: "",
  });

  const getData = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const generateData = (e) => {
    e.preventDefault();
    localStorage.setItem("user", JSON.stringify(form));
    alert("Successfully saved to localStorage!");
    setForm({
      username: "",
      city: "",
      mobile: "",
      email: "",
      role: "",
      reason: "",
    });
    navigator("/letter");
  };

  return (
    <div>
      <form>
        <input
          type="text"
          name="username"
          placeholder="Enter Name"
          className="border"
          value={form.username}
          onChange={getData}
        />
        <input
          type="text"
          name="city"
          placeholder="Enter City"
          className="border"
          value={form.city}
          onChange={getData}
        />
        <input
          type="tel"
          name="mobile"
          placeholder="Enter Mobile Number"
          className="border"
          value={form.mobile}
          onChange={getData}
        />
        <input
          type="email"
          name="email"
          placeholder="Enter Email"
          className="border"
          value={form.email}
          onChange={getData}
        />
        <select
          name="role"
          className="border"
          value={form.role}
          onChange={getData}
        >
          <option value="">--Select Role--</option>
          <option value="TL">TL</option>
          <option value="MANAGER">MANAGER</option>
        </select>
        <textarea
          name="reason"
          cols="30"
          rows="3"
          placeholder="Reason"
          className="border"
          onChange={getData}
          value={form.reason}
        ></textarea>
        <button className="border p-2" onClick={generateData}>
          Generate
        </button>
      </form>
    </div>
  );
};

export default PermissionForm;
