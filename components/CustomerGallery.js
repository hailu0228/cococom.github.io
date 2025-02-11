function CustomerGallery() {
    const customerImages = [
        "https://app.trickle.so/storage/public/images/usr_09073b5640000001/54283fb3-4de7-40dd-9068-c36859832a31.avif",
        "https://app.trickle.so/storage/public/images/usr_09073b5640000001/6e0f49f8-25db-46cb-9004-2b9d56080c1e.jpeg",
        "https://app.trickle.so/storage/public/images/usr_09073b5640000001/b2eb25c2-0ee9-4250-b3b3-42233d980170.webp",
        "https://app.trickle.so/storage/public/images/usr_09073b5640000001/07bd9d2a-8d72-49cc-9e13-13b3145d6cc2.jpeg",
        "https://app.trickle.so/storage/public/images/usr_09073b5640000001/0abeac43-d8dd-43bd-aea5-1a4099b7e91a.jpeg",
        "https://app.trickle.so/storage/public/images/usr_09073b5640000001/94b25bb2-ac4e-45a5-b959-f89bbdf26a2a.jpeg"
    ];

    return (
        <div className="py-16 md:py-20 bg-gradient-to-b from-blue-900 to-blue-800 text-white" data-name="customer-gallery">
            <div className="container mx-auto text-center px-4">
                <h2 className="text-3xl md:text-5xl font-bold mb-8 md:mb-16">Our Happy PawPals</h2>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6" data-name="gallery-grid">
                    {customerImages.map((image, index) => (
                        <div 
                            key={index} 
                            className="overflow-hidden rounded-2xl shadow-lg transform hover:scale-105 transition-all duration-300"
                            data-name={`customer-image-${index + 1}`}
                        >
                            <img 
                                src={image} 
                                alt={`Happy Customer ${index + 1}`} 
                                className="w-full h-32 md:h-40 object-cover gallery-image"
                            />
                        </div>
                    ))}
                </div>
                <button className="mt-8 md:mt-16 bg-white text-blue-900 px-6 md:px-10 py-3 md:py-4 rounded-full hover:bg-blue-50 transition-all transform hover:scale-105 font-medium text-sm md:text-base">
                    Follow Us on Instagram
                </button>
            </div>
        </div>
    );
}
