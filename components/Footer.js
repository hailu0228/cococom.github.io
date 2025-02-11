function Footer() {
    return (
        <footer className="bg-gradient-to-b from-white to-blue-50 py-12 md:py-16" data-name="footer">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row justify-between items-center md:items-start space-y-8 md:space-y-0">
                    <div className="flex items-center group" data-name="footer-logo">
                        <i className="fas fa-paw text-blue-900 text-2xl md:text-3xl mr-2 transform group-hover:rotate-12 transition-transform"></i>
                        <span className="text-blue-900 text-xl md:text-2xl font-bold">PawPal Paradise</span>
                    </div>
                    <div className="text-gray-600 hover:text-blue-900 transition-colors text-center md:text-left" data-name="footer-address">
                        <p className="text-base md:text-lg">525 Paradise Avenue</p>
                        <p className="text-base md:text-lg">San Francisco, CA 94158</p>
                    </div>
                    <div className="text-gray-600 hover:text-blue-900 transition-colors text-center md:text-left" data-name="footer-contact">
                        <p className="text-base md:text-lg">info@pawpalparadise.com</p>
                        <p className="text-base md:text-lg">123-456-7890</p>
                    </div>
                    <div className="space-x-6" data-name="footer-social">
                        <a href="#" className="text-blue-900 text-xl md:text-2xl social-icon inline-block">
                            <i className="fab fa-facebook-f"></i>
                        </a>
                        <a href="#" className="text-blue-900 text-xl md:text-2xl social-icon inline-block">
                            <i className="fab fa-twitter"></i>
                        </a>
                        <a href="#" className="text-blue-900 text-xl md:text-2xl social-icon inline-block">
                            <i className="fab fa-youtube"></i>
                        </a>
                    </div>
                </div>
                <div className="mt-8 md:mt-12 text-center text-gray-500" data-name="footer-copyright">
                    <p className="text-xs md:text-sm">© 2024 PawPal Paradise. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}
