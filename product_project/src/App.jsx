import { Route, Routes } from "react-router-dom";
import Navbar from "./component/Navbar";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Contacts from "./pages/Contact";
import User from "./pages/User";

const App = ()=>{
  return(<>
  <Navbar/>
  <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/product" element={<Products/>} />
    <Route path="/user" element={<User/>} />
    <Route path="/contact" element={<Contacts/>} />
  </Routes>
  </>)
}
export default App;