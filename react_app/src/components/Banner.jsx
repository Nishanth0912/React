const Banner = () => {
    return (
        <>
           <section className="relative bg-gradient-to-br from-blue-50 to-indigo-100 overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmMWY1ZmEiIGZpbGwtb3BhY2l0eT0iMC40Ij48Y2lyY2xlIGN4PSIzMCIgY3k9IjMwIiByPSIyIi8+PC9nPjwvZz48L3N2Zz4=')]"></div>
            
            {/* Main Content */}
            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    
                    {/* Text Content */}
                    <div className="text-center lg:text-left space-y-8">
                        <div className="space-y-4">
                            <span className="inline-block bg-blue-100 text-blue-600 px-4 py-2 rounded-full text-sm font-semibold shadow-sm">
                                🚀 Master Frontend Development
                            </span>
                            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
                                Become a <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">React</span> Master
                            </h1>
                            <p className="text-xl text-gray-600 max-w-2xl">
                                Learn React with modern practices, build amazing projects, and advance your career. 
                                Join thousands of developers worldwide.
                            </p>
                        </div>

                        {/* CTA Buttons */}
                        <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                            <button className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 hover:from-blue-600 hover:to-purple-700">
                                Start Learning Free
                            </button>
                            <button className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-xl font-semibold text-lg hover:border-blue-500 hover:text-blue-600 transition-all duration-300">
                                View Courses
                            </button>
                        </div>

                        {/* Stats */}
                        <div className="flex flex-wrap justify-center lg:justify-start gap-8 pt-4">
                            <div className="text-center">
                                <div className="text-2xl font-bold text-blue-600">10K+</div>
                                <div className="text-gray-600">Students</div>
                            </div>
                            <div className="text-center">
                                <div className="text-2xl font-bold text-purple-600">50+</div>
                                <div className="text-gray-600">Courses</div>
                            </div>
                            <div className="text-center">
                                <div className="text-2xl font-bold text-green-600">98%</div>
                                <div className="text-gray-600">Success Rate</div>
                            </div>
                        </div>
                    </div>

                    {/* Image/Illustration */}
                    <div className="relative">
                        <div className="relative z-10 bg-gradient-to-br from-blue-400 to-purple-500 rounded-2xl p-8 shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-500">
                            <div className="bg-white rounded-xl p-6 shadow-inner">
                                <div className="space-y-4">
                                    <div className="flex space-x-2">
                                        <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                                        <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                                        <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                                    </div>
                                    <div className="bg-gray-100 rounded-lg p-4 font-mono text-sm">
                                        <div className="text-blue-600">function Welcome() {'{'}</div>
                                        <div className="text-green-600 ml-4">return &lt;h1&gt;Hello, React!&lt;/h1&gt;</div>
                                        <div className="text-blue-600">{'}'}</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        {/* Floating Elements */}
                        <div className="absolute -top-4 -right-4 w-20 h-20 bg-yellow-400 rounded-full opacity-20 animate-bounce"></div>
                        <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-blue-400 rounded-full opacity-30 animate-pulse"></div>
                    </div>
                </div>
            </div>

            {/* Wave Decoration */}
            <div className="absolute bottom-0 left-0 right-0">
                <svg className="w-full h-12 text-white" viewBox="0 0 1200 120" preserveAspectRatio="none">
                    <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25" fill="currentColor"></path>
                    <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5" fill="currentColor"></path>
                    <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" fill="currentColor"></path>
                </svg>
            </div>
           </section>
        </>
    )
}

export default Banner;