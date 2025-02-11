function ContactPage() {
    const [formData, setFormData] = React.useState({
        firstName: '',
        lastName: '',
        email: '',
        address: '',
        message: ''
    });
    const [isSubmitting, setIsSubmitting] = React.useState(false);
    const [submitStatus, setSubmitStatus] = React.useState({ type: '', message: '' });

    const handleChange = (e) => {
        try {
            const { name, value } = e.target;
            setFormData(prev => ({
                ...prev,
                [name]: value
            }));
        } catch (error) {
            reportError(error);
            setSubmitStatus({
                type: 'error',
                message: 'An error occurred while updating the form. Please try again.'
            });
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitStatus({ type: '', message: '' });

        try {
            // Create contact message in database
            const contactData = {
                ...formData,
                createdAt: new Date().toISOString(),
                status: 'new'
            };

            const result = await trickleCreateObject('contact_message', contactData);
            
            if (!result) {
                throw new Error('Failed to create contact message');
            }

            // Reset form and show success message
            setFormData({
                firstName: '',
                lastName: '',
                email: '',
                address: '',
                message: ''
            });
            setSubmitStatus({
                type: 'success',
                message: "Thank you! Your message has been sent successfully. We will get back to you soon!"
            });
        } catch (error) {
            reportError(error);
            setSubmitStatus({
                type: 'error',
                message: 'Sorry, there was an error sending your message. Please try again or contact us directly.'
            });
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="min-h-screen bg-blue-50" data-name="contact-page">
            <div className="container mx-auto px-4 py-12 md:py-16">
                <p className="text-blue-900 text-base md:text-lg mb-4">Get in touch</p>
                <h1 className="text-3xl md:text-5xl font-bold text-blue-900 mb-8 md:mb-12 max-w-2xl leading-tight">
                    Let's make your pet's next grooming experience extraordinary at PawPal Paradise
                </h1>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
                    {/* Contact Form */}
                    <div className="space-y-6" data-name="contact-form">
                        {submitStatus.message && (
                            <div 
                                className={`p-4 rounded-lg mb-4 ${
                                    submitStatus.type === 'success' 
                                        ? 'bg-green-100 text-green-700' 
                                        : 'bg-red-100 text-red-700'
                                }`}
                                data-name="status-message"
                            >
                                {submitStatus.message}
                            </div>
                        )}

                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-blue-900 mb-2 text-sm md:text-base">First name *</label>
                                    <input 
                                        type="text" 
                                        name="firstName"
                                        value={formData.firstName}
                                        onChange={handleChange}
                                        required
                                        className="w-full p-2 border-b-2 border-blue-900 bg-transparent focus:outline-none text-sm md:text-base"
                                    />
                                </div>
                                <div>
                                    <label className="block text-blue-900 mb-2 text-sm md:text-base">Last name *</label>
                                    <input 
                                        type="text" 
                                        name="lastName"
                                        value={formData.lastName}
                                        onChange={handleChange}
                                        required
                                        className="w-full p-2 border-b-2 border-blue-900 bg-transparent focus:outline-none text-sm md:text-base"
                                    />
                                </div>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-blue-900 mb-2 text-sm md:text-base">Email *</label>
                                    <input 
                                        type="email" 
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                        className="w-full p-2 border-b-2 border-blue-900 bg-transparent focus:outline-none text-sm md:text-base"
                                    />
                                </div>
                                <div>
                                    <label className="block text-blue-900 mb-2 text-sm md:text-base">Address</label>
                                    <input 
                                        type="text"
                                        name="address"
                                        value={formData.address}
                                        onChange={handleChange}
                                        className="w-full p-2 border-b-2 border-blue-900 bg-transparent focus:outline-none text-sm md:text-base"
                                    />
                                </div>
                            </div>
                            <div>
                                <label className="block text-blue-900 mb-2 text-sm md:text-base">Message</label>
                                <textarea 
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    className="w-full p-2 border-b-2 border-blue-900 bg-transparent focus:outline-none text-sm md:text-base"
                                    rows="4"
                                ></textarea>
                            </div>
                            <button 
                                type="submit"
                                disabled={isSubmitting}
                                className={`w-full bg-blue-900 text-white py-3 rounded-full transition-all text-sm md:text-base
                                    ${isSubmitting 
                                        ? 'opacity-75 cursor-not-allowed' 
                                        : 'hover:bg-blue-800'
                                    }`}
                            >
                                {isSubmitting ? 'Sending...' : 'Send'}
                            </button>
                        </form>

                        <div className="space-y-2 mt-8" data-name="contact-info">
                            <p className="text-blue-900 text-sm md:text-base">123-456-7890, info@pawpalparadise.com</p>
                            <p className="text-blue-900 text-sm md:text-base">525 Paradise Avenue, San Francisco, CA 94158</p>
                            <div className="flex space-x-4 mt-4">
                                <a href="#" className="text-blue-900 hover:text-blue-700">
                                    <i className="fab fa-facebook-f"></i>
                                </a>
                                <a href="#" className="text-blue-900 hover:text-blue-700">
                                    <i className="fab fa-twitter"></i>
                                </a>
                                <a href="#" className="text-blue-900 hover:text-blue-700">
                                    <i className="fab fa-youtube"></i>
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Map */}
                    <div className="h-[300px] md:h-[600px]" data-name="contact-map">
                        <iframe 
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d50470.95043851969!2d-122.43384059549669!3d37.77492951924784!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80858085a66d5f87%3A0x5cc9513a72b877f5!2sSan%20Francisco%2C%20CA%2094158!5e0!3m2!1sen!2sus!4v1647043558984!5m2!1sen!2sus"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>
                    </div>
                </div>
            </div>
        </div>
    );
}
