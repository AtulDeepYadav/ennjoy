import { useState, useEffect } from 'react';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import heroImage from './img/hero.png';
import bgImage from './img/bg-hero.jpg';
import AboutUs from './AboutUs';
import CardSlider from './CardSlider';
import TestimonialCarousel from './TestimonialCarousel';

// Group A
import groupA1 from './img/BoxMatch/chitrakootchamps.jpg';
import groupA2 from './img/BoxMatch/shrimal.jpg';
import groupA3 from './img/BoxMatch/knight_riders.jpg';
import groupA4 from './img/BoxMatch/eight.jpg';

// Group B
import groupB1 from './img/BoxMatch/pitch_raider.jpg';
import groupB2 from './img/BoxMatch/therunmachine.jpg';
import groupB3 from './img/BoxMatch/superstriker.jpg';
import groupB4 from './img/BoxMatch/hitman.jpg';

// Group C
import groupC1 from './img/BoxMatch/city_tigers.jpg';
import groupC2 from './img/BoxMatch/one8.jpg';
import groupC3 from './img/BoxMatch/playground.jpg';
import groupC4 from './img/BoxMatch/riders.jpg';

// Group D
import groupD1 from './img/BoxMatch/playground.jpg';
import groupD2 from './img/BoxMatch/vaishaliwarriors.jpg';
import groupD3 from './img/BoxMatch/thunder.jpg';
import groupD4 from './img/BoxMatch/NAB.jpg';


function Body() {
    const [showAbout, setShowAbout] = useState(false);
    const [carouselIndex, setCarouselIndex] = useState(0);

    const allGroups = {
        'GROUP A': [
            {
                group: 'Group A',
                name: 'Chitrakoot Champs',
                image: groupA1,
                captain: 'Satyam Sharma',
                insta: 'https://www.instagram.com/satyam_sha/',
            },
            {
                group: 'Group A',
                name: "Rising Stars",
                image: groupA2,
                captain: 'Sameer Shrimal',
                insta: 'https://www.instagram.com/shrimalsameer/',
            },
            {
                group: 'Group A',
                name: 'Kings United',
                image: groupA3,
                captain: 'Hrithik Patel',
                insta: 'https://www.instagram.com/hritik._299/',
            },
            {
                group: 'Group A',
                name: 'The Elite Eight',
                image: groupA4,
                captain: 'Aayush Jain',
                insta: 'https://www.instagram.com/ayushjainmusic/',
            },
        ],
        'GROUP B': [
            {
                group: 'Group B',
                name: 'Pitch Raiders',
                image: groupB1,
                captain: 'Pranjal Jain',
                insta: 'https://www.instagram.com/pranjalj662/',
            },
            {
                group: 'Group B',
                name: 'The Run Machine',
                image: groupB2,
                captain: 'Mehul Jain',
                insta: 'https://www.instagram.com/mehuljain_03/',
            },
            {
                group: 'Group B',
                name: 'Super Strikers',
                image: groupB3,
                captain: 'Akshat Jain',
                insta: 'https://www.instagram.com/akshatjain3161/',
            },
            {
                group: 'Group B',
                name: "Himanshu's Hitman",
                image: groupB4,
                captain: 'Himanshu Agarwal',
                insta: 'https://www.instagram.com/himanshuagarwal857/',
            },
        ],
        'GROUP C': [
            {
                group: 'Group C',
                name: 'City Tigers',
                image: groupC1,
                captain: 'Brijesh Natani',
                insta: 'https://www.instagram.com/brijesh95300/',
            },
            {
                group: 'Group C',
                name: 'One8',
                image: groupC2,
                captain: 'Aniket Nahar',
                insta: 'https://www.instagram.com/aniket.naharr/',
            },
            {
                group: 'Group C',
                name: 'Playground Kings',
                image: groupC3,
                captain: 'Karan Fagna',
                insta: 'https://www.instagram.com/karangfagna/',
            },
            {
                group: 'Group C',
                name: 'The Riders',
                image: groupC4,
                captain: 'Taranjeet Singh',
                insta: 'https://www.instagram.com/kakarider1313/',
            },
        ],
        'GROUP D': [
            {
                group: 'Group D',
                name: 'Boom Boom Bros',
                image: groupD1,
                captain: 'Harsh Khatod',
                insta: 'https://instagram.com/khatodharsh19/',
            },
            {
                group: 'Group D',
                name: 'Vaishali Warriors',
                image: groupD2,
                captain: 'Himanshu Rawat',
                insta: 'https://www.instagram.com/himanshu_rawat5570/',
            },
            {
                group: 'Group D',
                name: 'Thunder Strikers',
                image: groupD3,
                captain: 'Rimesh Agarwal',
                insta: 'https://www.instagram.com/rimeshagarwal/',
            },
            {
                group: 'Group D',
                name: 'Black Panther',
                image: groupD4,
                captain: 'Himanshu Soni',
                insta: 'https://instagram.com/himanshusoni_9/',
            },
        ],
    };

    const slides = [
        ['GROUP A', 'GROUP B'],
        ['GROUP C', 'GROUP D'],
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setCarouselIndex((prev) => (prev + 1) % slides.length);
        }, 4000);
        return () => clearInterval(interval);
    }, []);

    const currentSlideGroups = slides[carouselIndex];

    return showAbout ? (
        <AboutUs onBack={() => setShowAbout(false)} />
    ) : (
        <div className="border border-warning border-4 rounded-4" style={{ fontFamily: "'Poppins', 'Inter', Arial, sans-serif" }}>
            {/* Hero Section */}
            <div
                className="rounded-4 d-flex flex-column flex-md-row align-items-center justify-content-between vh-40 text-white position-relative"
                style={{
                    backgroundImage: `url(${bgImage})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    padding: '2rem',
                    minHeight: '340px',
                    boxShadow: '0 8px 32px 0 rgba(31,38,135,0.18)',
                    overflow: 'hidden',
                }}
            >
                <div
                    className="rounded-4 position-absolute w-100 h-100"
                    style={{
                        top: 0,
                        left: 0,
                        background: 'rgba(10,23,78,0.45)',
                        backdropFilter: 'blur(8px)',
                        zIndex: 0,
                    }}
                />
                <div className="text-center text-md-start mb-4 mb-md-0" style={{ zIndex: 1, maxWidth: '600px' }}>
                    <h1
                        className="display-3 fw-bold mb-2"
                        style={{
                            background: 'linear-gradient(90deg, #ffd180 30%, #00bfff 100%)',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                            fontFamily: "'Poppins', 'Inter', Arial, sans-serif",
                            letterSpacing: '2px',
                            textShadow: '0 2px 12px rgba(0,191,255,0.18)',
                        }}
                    >
                        Welcome to Ennjoy
                    </h1>
                    <p className="lead mb-3" style={{ color: '#ffd180', fontWeight: 600, fontSize: '1.5rem' }}>
                        Connect. Play. Celebrate.
                    </p>
                    <p className="mb-2" style={{ color: '#e3e3e3', fontSize: '1.1rem' }}>
                        <strong style={{ color: '#00bfff' }}>Ennjoy</strong> is your all-in-one platform to bring people together — whether it's a cricket match
                        with friends, a chess tournament at the park, or a cozy rooftop birthday party.
                    </p>
                    <p className="mb-2" style={{ color: '#e3e3e3', fontSize: '1.1rem' }}>
                        Ennjoy empowers everyone to turn ideas into experiences.
                        <br />
                        <span className="fw-bold text-warning lead mb-3" style={{ fontSize: '1.2rem' }}>
                            Click the circle to know more about us.
                        </span>
                    </p>
                </div>
                <div className="text-center" style={{ zIndex: 1 }}>
                    <img
                        src={heroImage}
                        alt="Rotating"
                        className="rounded-circle rotate-img adaptive-img w-100 h-100 px-3 py-3 shadow-lg"
                        style={{
                            cursor: 'pointer',
                            border: '4px solid #ffd180',
                            boxShadow: '0 4px 24px #ffd18055',
                            maxWidth: '220px',
                            maxHeight: '220px',
                            objectFit: 'cover',
                            background: 'rgba(255,255,255,0.12)',
                        }}
                        onClick={() => setShowAbout(true)}
                    />
                </div>
            </div>

            <CardSlider />

            {/* Group Carousel Section */}
            <div className="rounded-4 mt-4" style={{
                background: 'rgba(10,23,78,0.35)',
                backdropFilter: 'blur(8px)',
                boxShadow: '0 8px 32px 0 rgba(31,38,135,0.10)',
                padding: '2rem 1rem'
            }}>
                <h2 className="text-center fw-bold mb-2"
                    style={{
                        fontFamily: "'Poppins', 'Inter', Arial, sans-serif",
                        color: '#ffd180',
                        letterSpacing: '1px',
                        fontSize: '2.2rem',
                        textShadow: '0 2px 12px #0a174e33'
                    }}>
                    <u>Box Cricket Mania</u>
                    <br />
                    <mark className="py-0 rounded-4" style={{
                        background: '#ffd180',
                        color: '#0a174e',
                        fontWeight: 700,
                        fontSize: '1.1rem',
                        border: 'none'
                    }}>(Season 1)</mark>
                </h2>
                <h4 className="text-center rounded-4 text-light py-2 mb-4"
                    style={{
                        background: 'linear-gradient(90deg, #0a174e 60%, #00bfff 100%)',
                        fontWeight: 700,
                        letterSpacing: '1px',
                        fontSize: '1.3rem',
                        boxShadow: '0 2px 8px #00bfff22'
                    }}>
                    24 & 25 May 2025
                </h4>

                {currentSlideGroups.map((groupName) => (
                    <div key={groupName} className="mb-4">
                        <h5 className="text-center mb-3"
                            style={{
                                color: '#00bfff',
                                fontWeight: 700,
                                letterSpacing: '1px',
                                fontSize: '1.4rem',
                                textShadow: '0 1px 6px #0a174e22'
                            }}>
                            <u>{groupName}</u>
                        </h5>
                        <div className="row justify-content-center g-4">
                            {allGroups[groupName].map((team, idx) => (
                                <div
                                    key={idx}
                                    className="col-12 col-sm-6 col-md-3 text-center"
                                    style={{
                                        minWidth: '200px',
                                        fontFamily: "'Poppins', 'Inter', Arial, sans-serif",
                                    }}
                                >
                                    <div
                                        className="rounded-4 shadow-lg p-3 h-100"
                                        style={{
                                            background: 'linear-gradient(120deg, #e3f6ff 60%, #b2ebff 100%)',
                                            border: '2px solid #ffd18055',
                                            transition: 'transform 0.18s, box-shadow 0.18s',
                                            boxShadow: '0 2px 16px #00bfff22'
                                        }}
                                        onMouseOver={e => {
                                            e.currentTarget.style.transform = 'scale(1.04)';
                                            e.currentTarget.style.boxShadow = '0 8px 32px #00bfff33';
                                        }}
                                        onMouseOut={e => {
                                            e.currentTarget.style.transform = 'none';
                                            e.currentTarget.style.boxShadow = '0 2px 16px #00bfff22';
                                        }}
                                    >
                                        <img
                                            src={team.image}
                                            alt={team.name}
                                            className="img-fluid rounded-circle border border-warning mb-2 shadow"
                                            style={{
                                                width: '110px',
                                                height: '110px',
                                                objectFit: 'cover',
                                                borderWidth: '3px',
                                                boxShadow: '0 2px 12px #ffd18055',
                                            }}
                                        />
                                        <h4 className="fw-bold mb-1" style={{
                                            color: '#0a174e',
                                            fontSize: '1.15rem',
                                            marginBottom: '0.2rem',
                                            letterSpacing: '1px'
                                        }}>{team.name}</h4>
                                        <h5 className="mb-1" style={{
                                            color: '#00bfff',
                                            fontWeight: 600,
                                            fontSize: '1rem'
                                        }}>{team.captain}</h5>
                                        <a
                                            href={team.insta}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="btn btn-outline-primary btn-sm rounded-pill fw-bold"
                                            style={{
                                                letterSpacing: '1px',
                                                fontSize: '1rem',
                                                marginTop: '0.2rem',
                                                borderWidth: '2px',
                                                background: '#fff',
                                                color: '#0a174e'
                                            }}
                                        >
                                            <i className="bi bi-instagram me-1"></i>Instagram
                                        </a>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
            <TestimonialCarousel />
        </div>
    );
}

export default Body;