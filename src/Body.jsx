import { useState, useEffect } from 'react';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import heroImage from './img/hero.png';
import bgImage from './img/bg-hero.jpg';
import AboutUs from './AboutUs';

function Body() {
    const [showAbout, setShowAbout] = useState(false);

    useEffect(() => {
        const script = document.createElement('script');
        script.src = 'https://snapwidget.com/js/snapwidget.js';
        script.async = true;
        document.body.appendChild(script);
    }, []);

    if (showAbout) {
        return <AboutUs />;
    }

    return (
        <div>
            <div
                className="rounded-4 d-flex flex-column flex-md-row align-items-center justify-content-between vh-40 text-white"
                style={{
                    backgroundImage: `url(${bgImage})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    position: 'relative',
                    padding: '2rem',
                }}
            >
                {/* Purple Overlay */}
                <div
                    className="rounded-4"
                    style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        backgroundColor: 'hsla(300, 78.90%, 3.70%, 0.76)',
                        zIndex: 0,
                    }}
                />

                {/* Text Section */}
                <div
                    className="text-center text-md-start mb-4 mb-md-0"
                    style={{ zIndex: 1, maxWidth: '600px' }}
                >
                    <h1 className="display-4 fw-bold">Welcome to Ennjoy</h1>
                    <p className="lead mb-3">Connect. Play. Celebrate.</p>
                    <p className="mb-2">
                        <strong>Ennjoy</strong> is your all-in-one platform to bring people together — whether it's a cricket match with friends, a chess tournament at the park, or a cozy rooftop birthday party.
                    </p>
                    
                    <p className="mb-2">
                        Ennjoy empowers everyone to turn ideas into experiences.
                        <br />
                        <span className="text-bold text-warning lead mb-3">Click the circle to know more about us.</span>
                    </p>
                </div>

                {/* Rotating Image with onClick */}
                <div className="text-center" style={{ zIndex: 1 }}>
                    <img
                        src={heroImage}
                        alt="Rotating"
                        className="rounded-circle rotate-img adaptive-img w-100 h-100 px-3 py-3"
                        style={{ cursor: 'pointer' }}
                        onClick={() => setShowAbout(true)}
                    />
                </div>
            </div>
        </div>
    );
}

export default Body;
