import logo from '../assets/logo/nishanth_logo_2.png'

import { Link } from 'react-router-dom';
const Navbar = ()=>{
    return (
        <>
        <nav className="bg-gradient-to-r from-gray-800 to-gray-900 shadow-2xl border-b border-gray-700">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    {/* Logo Section */}
                    <div className="flex-shrink-0 flex items-center">
                        {/* <img 
                            src={logo} 
                            alt="Nishanth Logo" 
                            className="h-10 w-auto transform hover:scale-105 transition duration-300"
                        /> */}
                        <span className="ml-3 text-xl font-bold bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
                            Nishanth
                        </span>
                    </div>

                    {/* Desktop Navigation */}
                    <div className="hidden md:block">
                        <div className="ml-10 flex items-baseline space-x-8">
                            <Link to="/" className="nav-link group relative text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-all duration-300">
                                Home
                                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-yellow-400 group-hover:w-full transition-all duration-300"></span>
                            </Link>
                            <Link to="/components" className="nav-link group relative text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-all duration-300">
                                Components
                                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-yellow-400 group-hover:w-full transition-all duration-300"></span>
                            </Link>
                            <Link to="/rendering" className="nav-link group relative text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-all duration-300">
                                Rendering
                                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-yellow-400 group-hover:w-full transition-all duration-300"></span>
                            </Link>
                            <Link to="/hooks" className="nav-link group relative text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-all duration-300">
                                Hooks
                                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-yellow-400 group-hover:w-full transition-all duration-300"></span>
                            </Link>
                            <Link to="/projects" className="nav-link group relative text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-all duration-300">
                                Projects
                                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-yellow-400 group-hover:w-full transition-all duration-300"></span>
                            </Link>
                        </div>
                    </div>

                    {/* CTA Button */}
                    <div className="hidden md:block">
                        <button className="relative bg-gradient-to-r from-yellow-400 to-orange-500 text-gray-900 font-bold py-2 px-6 rounded-full overflow-hidden group transition-all duration-300 hover:shadow-lg hover:shadow-yellow-500/25">
                            <span className="relative z-10">Get Started</span>
                            <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-yellow-400 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></div>
                        </button>
                    </div>

                    {/* Mobile menu button */}
                    <div className="md:hidden">
                        <button className="mobile-menu-button inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white transition duration-300">
                            <svg className="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                                <path className="inline-flex" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Navigation */}
            <div className="mobile-menu hidden md:hidden bg-gray-800 border-t border-gray-700">
                <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                <Link to="/" className="mobile-nav-link block text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-base font-medium transition duration-300 border-l-4 border-transparent hover:border-yellow-400">
                        Home
                    </Link>
                    <Link to="/components" className="mobile-nav-link block text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-base font-medium transition duration-300 border-l-4 border-transparent hover:border-yellow-400">
                        Components
                    </Link>
                    <Link to="/rendering" className="mobile-nav-link block text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-base font-medium transition duration-300 border-l-4 border-transparent hover:border-yellow-400">
                        Rendering
                    </Link>
                    <Link to="/hooks" className="mobile-nav-link block text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-base font-medium transition duration-300 border-l-4 border-transparent hover:border-yellow-400">
                        Hooks
                    </Link>
                    <Link to="/projects" className="mobile-nav-link block text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-base font-medium transition duration-300 border-l-4 border-transparent hover:border-yellow-400">
                        Projects
                    </Link>
                    <div className="px-3 py-4">
                        <button className="w-full bg-gradient-to-r from-yellow-400 to-orange-500 text-gray-900 font-bold py-3 px-4 rounded-full transition duration-300 hover:shadow-lg hover:shadow-yellow-500/25 transform hover:scale-105">
                            Get Started
                        </button>
                    </div>
                </div>
            </div>
        </nav>

        </>
    )
}

export default Navbar;