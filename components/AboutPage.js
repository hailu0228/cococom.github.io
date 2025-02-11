function AboutPage({ onNavigate }) {
    const teamMembers = [
        {
            name: "Laura Henderson",
            image: "https://images.unsplash.com/photo-1515552912129-ba1abf7d8e39?crop=entropy&cs=srgb&fm=jpg&ixid=M3wzMjA0NjB8MHwxfHNlYXJjaHwzODl8fGVtcGxveWVlfGVufDB8fHx8MTczODgzNzk3OHww&ixlib=rb-4.0.3&q=85",
            description: "Lead Groomer & Founder"
        },
        {
            name: "Markus Rau",
            image: "https://images.unsplash.com/photo-1650630729397-810915b32ac9?crop=entropy&cs=srgb&fm=jpg&ixid=M3wzMjA0NjB8MHwxfHNlYXJjaHwzMzR8fGVtcGxveWVlfGVufDB8fHx8MTczODgzNzk2N3ww&ixlib=rb-4.0.3&q=85",
            description: "Senior Pet Stylist"
        },
        {
            name: "Milly J. Smith",
            image: "https://images.unsplash.com/photo-1681164314433-7964ccf32bc7?crop=entropy&cs=srgb&fm=jpg&ixid=M3wzMjA0NjB8MHwxfHNlYXJjaHwyNTd8fGVtcGxveWVlfGVufDB8fHx8MTczODgzNzk0NXww&ixlib=rb-4.0.3&q=85",
            description: "Pet Care Specialist"
        }
    ];

    return (
        <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white" data-name="about-page">
            <div className="container mx-auto px-4 py-12 md:py-16">
                <p className="text-blue-900 text-base md:text-lg mb-4">About Us</p>
                <h1 className="text-3xl md:text-5xl font-bold text-blue-900 mb-8 md:mb-12 max-w-2xl leading-tight">
                    At PawPal Paradise, we put our love for pets and their owners into all that we do.
                </h1>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center mb-16 md:mb-24">
                    <div className="space-y-4 md:space-y-6" data-name="our-story">
                        <h2 className="text-xl md:text-2xl font-semibold text-blue-900">Our Story</h2>
                        <p className="text-gray-600 text-sm md:text-base">
                            Founded in 2020, PawPal Paradise was born from a simple vision: to create a haven where pets receive the ultimate grooming experience while their owners enjoy peace of mind. Our journey began with a passionate team of certified pet care professionals who believe every pet deserves to be pampered.
                        </p>
                        <p className="text-gray-600 text-sm md:text-base">
                            What sets us apart is our commitment to personalized care. We understand that each pet is unique, with their own personality and needs. Our approach combines modern grooming techniques with gentle, patient handling, ensuring your furry friend feels comfortable and loved throughout their visit.
                        </p>
                        <p className="text-gray-600 text-sm md:text-base">
                            Today, PawPal Paradise has grown into San Francisco's premier pet grooming destination, serving hundreds of happy pets and their families. Our success is measured not just in perfectly groomed pets, but in the wagging tails and purrs of satisfaction from our four-legged clients.
                        </p>
                    </div>
                    <div className="relative order-first md:order-last" data-name="store-image">
                        <img 
                            src="https://images.unsplash.com/photo-1695121289886-34aad1810af3?crop=entropy&cs=srgb&fm=jpg&ixid=M3wzMjA0NjB8MHwxfHNlYXJjaHwzNDN8fGRvb3IlMjBzaG9wJTIwfGVufDB8fHx8MTczODgzNzgzMnww&ixlib=rb-4.0.3&q=85" 
                            alt="PawPal Paradise Store Front" 
                            className="w-full rounded-lg shadow-xl"
                        />
                    </div>
                </div>

                {/* Team Section */}
                <div className="bg-blue-900 -mx-4 px-4 py-16 md:py-20" data-name="team-section">
                    <div className="container mx-auto">
                        <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12 md:mb-16">Meet Our Paradise Team!</h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {teamMembers.map((member, index) => (
                                <div 
                                    key={index} 
                                    className="text-center"
                                    data-name={`team-member-${index}`}
                                >
                                    <div className="bg-white rounded-lg overflow-hidden mb-4">
                                        <img 
                                            src={member.image} 
                                            alt={member.name} 
                                            className="w-full h-48 md:h-64 object-cover"
                                        />
                                    </div>
                                    <h3 className="text-lg md:text-xl font-semibold text-white mb-2">{member.name}</h3>
                                    <p className="text-blue-100 mb-4 text-sm md:text-base">{member.description}</p>
                                    <button 
                                        className="bg-white text-blue-900 px-6 py-2 rounded-full hover:bg-blue-50 transition-all transform hover:scale-105"
                                        onClick={() => onNavigate('services')}
                                    >
                                        Book Now
                                    </button>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
