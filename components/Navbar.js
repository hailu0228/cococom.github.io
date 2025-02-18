function Navbar({ onNavigate, currentPage }) {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <nav className="nav-gradient p-4 sticky top-0 z-50 shadow-lg" data-name="navbar">
            <div className="container mx-auto">
                <div className="flex justify-between items-center">
                    <div 
                        className="flex items-center group cursor-pointer" 
                        data-name="logo"
                        onClick={() => onNavigate('home')}
                    >
                        {/* 替换为图片 */}
                        <img 
                            src="logo.png" 
                            alt="COCOCOM Logo" 
                            className="h-10 w-auto mr-2 transform group-hover:rotate-12 transition-transform" 
                        />
                        <span className="text-white text-xl font-bold">COCOCOM 可可诺卡</span>
                    </div>

                    {/* Mobile menu button */}
                    <button 
                        className="md:hidden text-white"
                        onClick={toggleMenu}
                        data-name="mobile-menu-button"
                    >
                        <i className={`fas ${isMenuOpen ? 'fa-times' : 'fa-bars'} text-2xl`}></i>
                    </button>

                    {/* Desktop menu */}
                    <div className="hidden md:flex items-center space-x-8" data-name="desktop-nav-links">
                        <a 
                            href="#" 
                            onClick={(e) => { e.preventDefault(); onNavigate('home'); }}
                            className={`text-white hover:text-blue-200 transition-colors ${currentPage === 'home' ? 'border-b-2' : ''}`}
                        >
                            Home
                        </a>
                        <a 
                            href="#" 
                            onClick={(e) => { e.preventDefault(); onNavigate('services'); }}
                            className={`text-white hover:text-blue-200 transition-colors ${currentPage === 'services' ? 'border-b-2' : ''}`}
                        >
                            Services
                        </a>
                        <a 
                            href="#" 
                            onClick={(e) => { e.preventDefault(); onNavigate('about'); }}
                            className={`text-white hover:text-blue-200 transition-colors ${currentPage === 'about' ? 'border-b-2' : ''}`}
                        >
                            About
                        </a>
                        <a 
                            href="#" 
                            onClick={(e) => { e.preventDefault(); onNavigate('contact'); }}
                            className={`text-white hover:text-blue-200 transition-colors ${currentPage === 'contact' ? 'border-b-2' : ''}`}
                        >
                            Contact
                        </a>
                        <button className="bg-white text-blue-900 px-6 py-2 rounded-full hover:bg-blue-50 transition-all transform hover:scale-105">
                            Log In
                        </button>
                    </div>
                </div>

                {/* Mobile menu */}
                <div 
                    className={`${isMenuOpen ? 'block' : 'hidden'} md:hidden mt-4 pb-4`}
                    data-name="mobile-nav-links"
                >
                    <div className="flex flex-col space-y-4">
                        <a 
                            href="#" 
                            onClick={(e) => { e.preventDefault(); onNavigate('home'); setIsMenuOpen(false); }}
                            className={`text-white hover:text-blue-200 transition-colors ${currentPage === 'home' ? 'border-b-2' : ''}`}
                        >
                            Home
                        </a>
                        <a 
                            href="#" 
                            onClick={(e) => { e.preventDefault(); onNavigate('services'); setIsMenuOpen(false); }}
                            className={`text-white hover:text-blue-200 transition-colors ${currentPage === 'services' ? 'border-b-2' : ''}`}
                        >
                            Services
                        </a>
                        <a 
                            href="#" 
                            onClick={(e) => { e.preventDefault(); onNavigate('about'); setIsMenuOpen(false); }}
                            className={`text-white hover:text-blue-200 transition-colors ${currentPage === 'about' ? 'border-b-2' : ''}`}
                        >
                            About
                        </a>
                        <a 
                            href="#" 
                            onClick={(e) => { e.preventDefault(); onNavigate('contact'); setIsMenuOpen(false); }}
                            className={`text-white hover:text-blue-200 transition-colors ${currentPage === 'contact' ? 'border-b-2' : ''}`}
                        >
                            Contact
                        </a>
                        <button className="bg-white text-blue-900 px-6 py-2 rounded-full hover:bg-blue-50 transition-all transform hover:scale-105 w-full">
                            Log In
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;