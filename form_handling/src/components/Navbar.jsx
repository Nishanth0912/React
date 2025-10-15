import { Link } from "react-router-dom";

const Navbar = ()=>{
   return(<>
     <div>
        <Link to="/">Register</Link>
    </div>
    <div>
        <Link to="/login">Login</Link>
    </div>
    <div>
        <Link to="/dashboard">Dashboard</Link>
     </div>
   </>)
}

export default Navbar;