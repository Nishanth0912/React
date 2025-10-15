import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="bg-white shadow-sm">
      <div className="flex space-x-1 p-2 justify-center">
        <Link 
          to="/" 
          className="px-6 py-3 rounded-full bg-blue-500 text-white font-medium hover:bg-blue-600 transition duration-200"
        >
          Home
        </Link>
        <Link 
          to="/product" 
          className="px-6 py-3 rounded-full bg-green-500 text-white font-medium hover:bg-green-600 transition duration-200"
        >
          Product
        </Link>
        <Link 
          to="/user" 
          className="px-6 py-3 rounded-full bg-purple-500 text-white font-medium hover:bg-purple-600 transition duration-200"
        >
          User
        </Link>
        <Link 
          to="/contact" 
          className="px-6 py-3 rounded-full bg-orange-500 text-white font-medium hover:bg-orange-600 transition duration-200"
        >
          Contact
        </Link>
      </div>
    </div>
  );
};

export default Navbar;