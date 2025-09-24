import Navbar from "./components/Navbar";
import Components from "./pages/Components";
import Home from "./pages/Home";
import Hooks from "./pages/Hooks";
import Project from "./pages/Project";
import Rendering from "./pages/Rendering";
import { BrowserRouter, Routes, Route } from "react-router-dom";


const App =()=>{
return (
  <>
  <Navbar/>
  <Routes>
    
  <Route path="/" element={<Home/>} />
  <Route path="/components" element={<Components/>} />
  <Route path="/rendering" element={<Rendering/>} />
  <Route path="/hooks" element={<Hooks/>}/>
  <Route path="/projects" element={<Project/>}/>
  </Routes>
  </>
)
}

export default App;