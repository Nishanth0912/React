import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <>
      <nav className="bg-gradient-to-r from-purple-900 via-blue-900 to-purple-900 text-white sticky top-0 z-50 shadow-2xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            
            {/* Animated Logo */}
            <div className="flex items-center space-x-3">
              <span className="text-xl font-bold bg-gradient-to-r from-yellow-300 to-pink-300 bg-clip-text text-transparent">
                NISHANTH
              </span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-1 bg-white/10 backdrop-blur-lg rounded-full px-2 py-1">
              <Link 
                to="/" 
                className="px-6 py-2 rounded-full font-medium hover:bg-white/20 transition-all duration-300 hover:scale-105"
              >
                Home
              </Link>
              <Link 
                to="/components" 
                className="px-6 py-2 rounded-full font-medium hover:bg-white/20 transition-all duration-300 hover:scale-105"
              >
                Components
              </Link>
              <Link 
                to="/hooks" 
                className="px-6 py-2 rounded-full font-medium hover:bg-white/20 transition-all duration-300 hover:scale-105"
              >
                Hooks
              </Link>
            </div>

            {/* CTA Button */}
            <div className="flex items-center space-x-4">
              <button className="bg-white text-purple-900 px-6 py-2 rounded-full font-bold hover:bg-gray-200 transition-all duration-300 transform hover:scale-105 shadow-lg">
                Get Started
              </button>
              
              <button className="md:hidden p-2 rounded-lg bg-white/20 hover:bg-white/30 transition-colors duration-300">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>

          {/* Mobile Navigation - Side Style */}
          <div className="md:hidden border-t border-white/20 py-4">
            <div className="flex flex-col space-y-4">
              <Link 
                to="/" 
                className="flex items-center space-x-3 px-4 py-3 rounded-xl hover:bg-white/10 transition-all duration-300"
              >
                <span className="text-xl">🏠</span>
                <span className="font-medium">Home</span>
              </Link>
              <Link 
                to="/components" 
                className="flex items-center space-x-3 px-4 py-3 rounded-xl hover:bg-white/10 transition-all duration-300"
              >
                <span className="text-xl">⚙️</span>
                <span className="font-medium">Components</span>
              </Link>
              <Link 
                to="/hooks" 
                className="flex items-center space-x-3 px-4 py-3 rounded-xl hover:bg-white/10 transition-all duration-300"
              >
                <span className="text-xl">🪝</span>
                <span className="font-medium">Hooks</span>
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;