import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();

  return (
    <nav className="bg-gradient-to-r from-purple-600 to-blue-600 shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Brand/Logo */}
          <div className="flex-shrink-0">
            <span className="text-white text-xl font-bold tracking-tight">
              Permission App
            </span>
          </div>

          {/* Navigation Links */}
          <div className="flex space-x-4">
            <Link
              to="/"
              className={`
                relative flex items-center space-x-2 px-4 py-2 rounded-full font-medium transition-all duration-300
                ${location.pathname === "/" 
                  ? "bg-white/20 text-white backdrop-blur-sm border border-white/30 shadow-lg" 
                  : "text-white/90 hover:bg-white/10 hover:text-white hover:shadow-md"
                }
                group
              `}
            >
              <span className="text-lg transition-transform duration-300 group-hover:scale-110">
                📝
              </span>
              <span>Permission Form</span>
              <div className={`absolute inset-0 rounded-full bg-white/20 transition-opacity duration-300 opacity-0 group-hover:opacity-100`}></div>
            </Link>

            <Link
              to="/letter"
              className={`
                relative flex items-center space-x-2 px-4 py-2 rounded-full font-medium transition-all duration-300
                ${location.pathname === "/letter" 
                  ? "bg-white/20 text-white backdrop-blur-sm border border-white/30 shadow-lg" 
                  : "text-white/90 hover:bg-white/10 hover:text-white hover:shadow-md"
                }
                group
              `}
            >
              <span className="text-lg transition-transform duration-300 group-hover:scale-110">
                📄
              </span>
              <span>Permission Letter</span>

              <span className="text-lg transition-transform duration-300 group-hover:scale-110">
                📄
              </span>
              <span>Product</span>
              <div className={`absolute inset-0 rounded-full bg-white/20 transition-opacity duration-300 opacity-0 group-hover:opacity-100`}></div>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;