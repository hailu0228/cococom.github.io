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
                            src="images/logo.png" 
                            // src="https://image.baidu.com/search/detail?ct=503316480&z=undefined&tn=baiduimagedetail&ipn=d&word=%E3%80%8A%E5%93%AA%E5%90%922%E3%80%8B%E5%86%B2%E9%A1%B6%E5%85%A8%E7%90%83%E5%8A%A8%E7%94%BB%E6%A6%9C&step_word=&lid=11180291191299643517&ie=utf-8&in=&cl=2&lm=-1&st=undefined&hd=undefined&latest=undefined&copyright=undefined&cs=927343288,3881561446&os=1098592965,2650311361&simid=4227268147,553026421&pn=35&rn=1&di=46137345&ln=1088&fr=&fmq=1739850342955_R&fm=&ic=undefined&s=undefined&se=&sme=&tab=0&width=undefined&height=undefined&face=undefined&is=0,0&istype=0&ist=&jit=&bdtype=11&spn=0&pi=0&gsm=1e&objurl=https%3A%2F%2Fq8.itc.cn%2Fimages01%2F20250218%2F773c18b74a9e42eea556793df3a4fe56.jpeg&rpstart=0&rpnum=0&adpicid=0&nojc=undefined&dyTabStr=MCwxMiwzLDEsMiwxMyw3LDYsNSw5&ctd=1739850369280^3_1825X922%1"
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
