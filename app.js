function App() {
    const [currentPage, setCurrentPage] = React.useState('home');

    const renderPage = () => {
        switch(currentPage) {
            case 'services':
                return <ServicesPage />;
            case 'about':
                return <AboutPage onNavigate={setCurrentPage} />;
            case 'contact':
                return <ContactPage />;
            default:
                return (
                    <div data-name="home-content">
                        <Hero onNavigate={setCurrentPage} />
                        <Services onNavigate={setCurrentPage} />
                        <ServiceGallery />
                        <Testimonials />
                        <CustomerGallery />
                    </div>
                );
        }
    };

    return (
        <div className="app" data-name="app">
            <Navbar onNavigate={setCurrentPage} currentPage={currentPage} />
            {renderPage()}
            <Footer />
        </div>
    );
}

try {
    const rootElement = document.getElementById('root');
    const root = ReactDOM.createRoot(rootElement);
    root.render(<App />);
} catch (error) {
    reportError(error);
}
