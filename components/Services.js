function Services({ onNavigate }) {
    const services = [
        { icon: "fa-bath", title: "Luxury Bath & Spa", description: "Pampered bathing experience with premium products" },
        { icon: "fa-cut", title: "Expert Grooming", description: "Professional styling by certified groomers" },
        { icon: "fa-heart", title: "Tender Care", description: "Gentle handling with lots of love" }
    ];

    return (
        <div className="py-16 md:py-20 bg-gradient-to-b from-blue-50 to-white" data-name="services">
            <div className="container mx-auto text-center px-4">
                <h2 className="text-3xl md:text-5xl font-bold text-blue-900 mb-4">
                    Your pet deserves to be <span className="text-blue-600">pampered!</span>
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
                    {services.map((service, index) => (
                        <div key={index} className="service-card p-8 rounded-2xl" data-name={`service-${index}`}>
                            <i className={`fas ${service.icon} text-4xl md:text-5xl text-blue-600 mb-6`}></i>
                            <h3 className="text-xl md:text-2xl font-semibold mb-4 text-blue-900">{service.title}</h3>
                            <p className="text-gray-600 text-base md:text-lg">{service.description}</p>
                        </div>
                    ))}
                </div>
                <button 
                    className="button-gradient text-white px-8 md:px-10 py-3 md:py-4 rounded-full text-lg font-medium mt-12 md:mt-16"
                    onClick={() => onNavigate('services')}
                >
                    Book an Appointment
                </button>
            </div>
        </div>
    );
}
