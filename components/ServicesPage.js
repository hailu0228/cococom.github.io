function ServicesPage() {
    const services = [
        {
            name: "Deluxe Full Grooming",
            duration: "2 hrs",
            price: "$120",
        },
        {
            name: "Luxury Bath & Brush",
            duration: "1 hr",
            price: "$80",
        },
        {
            name: "Express Grooming",
            duration: "1 hr",
            price: "$70",
        },
        {
            name: "Puppy's First Groom",
            duration: "45 min",
            price: "$60",
        },
        {
            name: "Nail Care Package",
            duration: "30 min",
            price: "$35",
        },
        {
            name: "Teeth Cleaning",
            duration: "30 min",
            price: "$40",
        },
        {
            name: "De-matting Treatment",
            duration: "1 hr",
            price: "$60",
        },
        {
            name: "Spa Day Package",
            duration: "3 hrs",
            price: "$150",
        }
    ];

    return (
        <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white" data-name="services-page">
            <div className="container mx-auto px-4 py-12 md:py-16">
                <div className="text-center mb-12 md:mb-16">
                    <p className="text-blue-900 text-base md:text-lg mb-2">Our Services</p>
                    <h1 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">Paradise Awaits Your Pet</h1>
                    <p className="text-gray-600 text-sm md:text-base">Experience luxury grooming tailored to your pet's needs</p>
                </div>
                
                <div className="max-w-2xl mx-auto space-y-4">
                    {services.map((service, index) => (
                        <div 
                            key={index} 
                            className="bg-white rounded-lg p-4 md:p-6 shadow-sm hover:shadow-md transition-shadow duration-300"
                            data-name={`service-item-${index}`}
                        >
                            <div className="flex flex-col md:flex-row md:items-center md:justify-between space-y-4 md:space-y-0">
                                <div className="space-y-2">
                                    <h3 className="text-lg md:text-xl font-semibold text-blue-900">{service.name}</h3>
                                    <div className="flex flex-row md:flex-col space-x-4 md:space-x-0">
                                        <p className="text-gray-600 text-sm md:text-base">{service.duration}</p>
                                        <p className="text-gray-600 text-sm md:text-base">{service.price}</p>
                                    </div>
                                </div>
                                <button className="w-full md:w-auto bg-blue-900 text-white px-6 py-2 rounded-md hover:bg-blue-800 transition-colors">
                                    Book Now
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
