function ServiceGallery() {
    const images = [
        "https://app.trickle.so/storage/public/images/usr_09073b5640000001/b1582a84-8124-4adf-881e-c34bd02ba98d.jpeg",
        "https://app.trickle.so/storage/public/images/usr_09073b5640000001/eb71e4ac-6789-40da-a306-8218f6b41b66.jpeg",
        "https://app.trickle.so/storage/public/images/usr_09073b5640000001/55d4403e-0abd-41c5-9673-777fcff4d3d0.webp",
        "https://app.trickle.so/storage/public/images/usr_09073b5640000001/4d4bb8ee-76d4-437b-aa86-46d4803e4f71.webp"
    ];

    return (
        <div className="container mx-auto grid grid-cols-4 gap-4 mt-8" data-name="service-gallery">
            {images.map((image, index) => (
                <div key={index} className="overflow-hidden rounded-lg" data-name={`gallery-item-${index}`}>
                    <img src={image} alt={`Service ${index + 1}`} className="w-full h-48 object-cover gallery-image" />
                </div>
            ))}
        </div>
    );
}
