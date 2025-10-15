import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import PermissionForm from "./pages/PermissionForm";
import PermissionLetter from "./pages/PermissionLetter";
import Product from "./components/Product";

const App = ()=>{
  return(<>
  <Navbar/>
  <Routes>
    <Route path="/" element={<PermissionForm/>} />
    <Route path="letter" element={<PermissionLetter/>} />
    <Route path="/product" element={<Product/>} />
  </Routes>
  </>)
}

export default App;