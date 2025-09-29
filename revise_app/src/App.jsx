
import Navbar from "./components/Navbar";
import{Routes,Route} from 'react-router-dom'
import Home from './pages/Home.jsx'
import About from "./pages/About.jsx";
import Service from "./pages/Service.jsx"
import Contact from "./pages/Contact.jsx"

const App = ()=>{
  return(
    <>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/service" element={<Service/>}/>
        <Route path="/contact" element={<Contact/>}/>
      </Routes>
    </>
  )
}

export default App;