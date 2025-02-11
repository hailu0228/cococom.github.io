function Testimonials() {
    const testimonials = [
        {
            name: "Sarah & Max",
            avatar: "https://app.trickle.so/storage/public/images/usr_09073b5640000001/134d5eb6-a5eb-47d5-b621-b1267147c45d.jpeg",
            text: "PawPal Paradise transformed my nervous pup into a relaxed, happy dog during grooming. Their gentle approach and expertise are unmatched!"
        },
        {
            name: "James & Luna",
            avatar: "https://app.trickle.so/storage/public/images/usr_09073b5640000001/46f980ad-6e5f-4230-b4f0-adf703f84c3d.jpeg",
            text: "The team at PawPal Paradise treats our Luna like their own. The grooming quality is exceptional, and she always leaves looking fabulous!"
        },
        {
            name: "Emily & Charlie",
            avatar: "https://app.trickle.so/storage/public/images/usr_09073b5640000001/d339a36f-e27b-4b80-9a16-d0d79f205074.jpeg",
            text: "Best pet grooming experience ever! The staff is professional, caring, and my Charlie looks amazing after every visit."
        }
    ];

    return (
        <div className="py-16 bg-blue-50" data-name="testimonials">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl md:text-4xl font-bold text-blue-900 text-center mb-8 md:mb-12">What Our Happy Clients Say</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
                    {testimonials.map((testimonial, index) => (
                        <div key={index} className="testimonial-card p-6 mb-6 md:mb-0" data-name={`testimonial-${index}`}>
                            <div className="w-16 h-16 mx-auto mb-4 overflow-hidden rounded-full">
                                <img 
                                    src={testimonial.avatar} 
                                    alt={testimonial.name} 
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <p className="text-gray-600 mb-4 text-sm md:text-base">{testimonial.text}</p>
                            <p className="font-semibold text-blue-900">{testimonial.name}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
