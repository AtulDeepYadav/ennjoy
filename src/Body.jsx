import { useState } from 'react';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import heroImage from './img/hero.png';
import bgImage from './img/bg-hero.jpg';

function Body() {
    return (
        <>
            <div className="bg-dark">
                <div
                    className="d-flex flex-column flex-md-row align-items-center justify-content-between vh-100 text-white"
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
                        style={{
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            width: '100%',
                            height: '100%',
                            backgroundColor: 'hsla(300, 1.30%, 53.90%, 0.60)',
                            zIndex: 0,
                        }}
                    />

                    {/* Right Side: Text */}
                    <div className="text-center text-md-start mb-4 mb-md-0" style={{ zIndex: 1 }}>
                        <h1 className="display-4 fw-bold">Welcome to Ennjoy</h1>
                        <p className="lead">Connect. Play. Celebrate.</p>
                    </div>

                    {/* Left Side: Responsive Rotating Image */}
                    <div className="text-center" style={{ zIndex: 1 }}>
                        <img
                            src={heroImage}
                            alt="Rotating"
                            className="rounded-circle rotate-img adaptive-img"
                        />
                    </div>
                </div>
            </div>
        </>
    );
}

export default Body;
