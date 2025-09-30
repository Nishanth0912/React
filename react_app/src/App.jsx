
import './App.css'
import Navbar from './components/Navbar';
import {Routes,Route} from 'react-router-dom'
import Components from './pages/Components';
import Hooks from './pages/Hooks';
import HomePage from './pages/HomePage';
import HooksTypes from './pages/HooksTypes';

function App() {
  
  return (
    <>
     <Navbar/>
     <Routes>
    <Route path="/" element={<HomePage/>}/>
    <Route path="/components" element={<Components/>}/>
    <Route path="/hooks" element={<Hooks/>}/>
    <Route path="/hookstypes" element={<HooksTypes/>}/>
     </Routes>
    </>
  )
}

export default App;
