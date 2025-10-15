import {  Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Contact from "./pages/Contact";
import Form from "./components/Form";
import PermissionForm from "./components/PermissionForm";
import PermissionLetter from "./components/PermissionLetter";

const App = ()=>{


  
  return(
    <>
   <Navbar/>
   <Routes>
     <Route path="/" element={<Form/>} />
     <Route path="/contact" element={<Contact />}/>
     <Route path="/permissionform" element={<PermissionForm/>}/>
     <Route path="/permissionletter" element={<PermissionLetter/>}/>
   </Routes>
    </>
  )
}

export default App;