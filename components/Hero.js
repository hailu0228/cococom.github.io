function Hero({ onNavigate }) {
    try {
        return (
            <div className="hero-section" data-name="hero">
                <div className="container mx-auto px-6 md:px-12 min-h-[85vh] flex items-center">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center w-full">
                        <div className="text-center md:text-left space-y-6" data-name="hero-content">
                            <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight">
                                Where Pets Get <br/>
                                <span className="text-blue-900">Paradise</span> Treatment
                            </h1>
                            <p className="text-white text-lg md:text-xl opacity-90 max-w-md mx-auto md:mx-0">
                                Your pet's luxury spa & grooming destination
                            </p>
                            <div className="flex flex-col sm:flex-row items-center gap-4 justify-center md:justify-start">
                                <button 
                                    className="button-gradient text-white px-8 py-3 rounded-full text-lg font-medium hover:shadow-xl w-full sm:w-auto"
                                    onClick={() => onNavigate('services')}
                                >
                                    Book an Appointment
                                </button>
                                <button 
                                    className="bg-white/20 backdrop-blur-sm text-white px-8 py-3 rounded-full text-lg font-medium hover:bg-white/30 transition-all w-full sm:w-auto"
                                    onClick={() => onNavigate('about')}
                                >
                                    Learn More
                                </button>
                            </div>
                        </div>
                        <div className="relative" data-name="hero-image">
                            <div className="aspect-[4/3] md:aspect-[3/2] relative z-10">
                                <img 
                                    src="https://images.unsplash.com/photo-1727419780738-8b9e85ab9ca6?crop=entropy&cs=srgb&fm=jpg&ixid=M3wzMjA0NjB8MHwxfHNlYXJjaHwzNDB8fGRvZyUyMGNhdHxlbnwwfHx8fDE3Mzg4MzU4OTh8MA&ixlib=rb-4.0.3&q=85" 
                                    alt="Happy pets at PawPal Paradise" 
                                    className="w-full h-full object-cover rounded-3xl shadow-2xl"
                                />
                            </div>
                            {/* Decorative elements */}
                            <div className="absolute -top-4 -right-4 w-24 h-24 bg-blue-900/10 rounded-full blur-xl"></div>
                            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-blue-900/10 rounded-full blur-xl"></div>
                        </div>
                    </div>
                </div>
            </div>
        );
    } catch (error) {
        reportError(error);
        return null;
    }
}
