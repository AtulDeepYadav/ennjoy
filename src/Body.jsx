import { useState, useEffect } from 'react';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import heroImage from './img/hero.png';
import bgImage from './img/bg-hero.jpg';
import AboutUs from './AboutUs';

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

    if (showAbout) return <AboutUs />;

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


    const testimonials = [
        {
            name: 'Sameer Shrimal',
            quote: 'Ennjoy brings people together like never before. Whether sports or casual events, it’s the best platform to connect and have fun!',
        },
        {
            name: 'Sunil Kumar Jain',
            quote: 'From cricket to casual hangouts, Ennjoy has made organizing events effortless. A brilliant concept every community needs!',
        },
        {
            name: 'Hasmukh Sharma',
            quote: 'I’ve seen many platforms, but Ennjoy is something else. It connects people, promotes activity, and spreads joy all around.',
        },
        {
            name: 'Rahul Kumawat',
            quote: 'Ennjoy redefines event planning! It’s smooth, engaging, and gives every player or host the attention they truly deserve.',
        },
        {
            name: 'Akshat Saxena',
            quote: 'Ennjoy helped me host my first mini tournament. Everything was so easy to manage—this platform really boosts social sports!',
        },
        {
            name: 'Abhinav Jangid (Owner of BIG STREET COFFEE)',
            quote: 'From local sports to special evenings, Ennjoy fills the gap in the most fun and seamless way. Huge respect to the team!',
        },
        {
            name: 'Ayush Patel',
            quote: 'I love how Ennjoy makes booking and connecting with people so simple. It’s built for real-life fun, not just ideas!',
        },
    ];

    const TestimonialCarousel = () => {
        const [currentIndex, setCurrentIndex] = useState(0);

        useEffect(() => {
            const interval = setInterval(() => {
                setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
            }, 2000); // change every 2 seconds

            return () => clearInterval(interval); // cleanup on unmount
        }, []);

        const currentTestimonial = testimonials[currentIndex];

        return (
            <div className="testimonial-carousel mt-5 px-3 py-4 bg-dark text-white rounded-4">
                <h4 className="text-center mb-4 text-warning fw-bold">Words of Support</h4>
                <div className="p-4 bg-secondary rounded-4" style={{ minHeight: '160px', transition: 'opacity 0.5s ease' }}>
                    <p className="mb-3" style={{ fontSize: '1.1rem' }}>"{currentTestimonial.quote}"</p>
                    <p className="text-end fst-italic text-light mb-0">– {currentTestimonial.name}</p>
                </div>
            </div>
        );
    };



    return (
        <div className="border border-warning border-4 rounded-4">
            {/* Hero Section */}
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
                <div className="text-center text-md-start mb-4 mb-md-0" style={{ zIndex: 1, maxWidth: '600px' }}>
                    <h1 className="display-4 fw-bold">Welcome to Ennjoy</h1>
                    <p className="lead mb-3">Connect. Play. Celebrate.</p>
                    <p className="mb-2">
                        <strong>Ennjoy</strong> is your all-in-one platform to bring people together — whether it's a cricket match
                        with friends, a chess tournament at the park, or a cozy rooftop birthday party.
                    </p>
                    <p className="mb-2">
                        Ennjoy empowers everyone to turn ideas into experiences.
                        <br />
                        <span className="text-bold text-warning lead mb-3">Click the circle to know more about us.</span>
                    </p>
                </div>
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

            {/* Group Carousel Section */}
            <div className="text-dark rounded-4 mt-4">
                <div className="bg-light rounded-4 px-4 py-4">
                    <h2 className="text-center fw-bold">
                        <u>Box Cricket Mania</u>
                        <br />
                        <mark className="py-0 rounded-4">(Season 1)</mark>
                    </h2>
                    <h4 className="text-center bg-dark rounded-4 text-light py-2">24 & 25 May 2025</h4>

                    {currentSlideGroups.map((groupName) => (
                        <div key={groupName} className="mb-4">
                            <h5 className="text-center text-primary mt-4">
                                <u>{groupName}</u>
                            </h5>
                            <div className="row justify-content-center border border-4 border-dark rounded-4 py-2">
                                {allGroups[groupName].map((team, idx) => (
                                    <div
                                        key={idx}
                                        className="col-12 col-sm-6 col-md-3 text-center mb-4"
                                        style={{ minWidth: '200px' }}
                                    >
                                        <img
                                            src={team.image}
                                            alt={team.name}
                                            className="img-fluid rounded-circle border border-dark mb-2"
                                            style={{ width: '120px', height: '120px', objectFit: 'cover' }}
                                        />
                                        <h4 className="fw-bold text-warning">{team.name}</h4>
                                        <h5 className="mb-1">{team.captain}</h5>
                                        <a
                                            href={team.insta}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="btn btn-outline-primary btn-sm"
                                        >
                                            <i className="bi bi-instagram me-1"></i>Instagram
                                        </a>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <TestimonialCarousel />
        </div>
    );
}

export default Body;