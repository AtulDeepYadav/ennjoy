import { useState, useEffect } from 'react';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import heroImage from './img/hero.png';
import bgImage from './img/bg-hero.jpg';
import AboutUs from './AboutUs';

// Dummy images
import team1 from './img/male_avatar.png';

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

    const teams = Array.from({ length: 16 }, (_, i) => ({
        image: team1,
        name: `Team ${i + 1}`,
        captain: `Captain ${i + 1}`,
        insta: `https://instagram.com/team${i + 1}`,
        facebook: `https://facebook.com/team${i + 1}`,
        twitter: `https://x.com/team${i + 1}`,
    }));

    const groupedTeams = [];
    for (let i = 0; i < teams.length; i += 4) {
        groupedTeams.push(teams.slice(i, i + 4));
    }

    return (
        <div>
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

            {/* Carousel Section */}
            <div className="text-dark mt-4 rounded-4 py-2">
                <div className="bg-light rounded-4 px-4">
                    <h2 className="text-center fw-bold">Box Cricket Mania <br /> (Season 1)</h2>
                    <h4 className="text-center ">24 & 25 May 2025</h4>
                    <h5 className="text-center mb-4 text-warning">Teams participating in the events</h5>
                

                <div id="teamCarousel" className="carousel slide" data-bs-ride="carousel">
                    <ol className="carousel-indicators">
                        {groupedTeams.map((_, index) => (
                            <li
                                key={index}
                                data-bs-target="#teamCarousel"
                                data-bs-slide-to={index}
                                className={index === 0 ? "active" : ""}
                                style={{ backgroundColor: '#000', width: '20px', height: '20px', borderRadius: '50%' }}
                            ></li>
                        ))}
                    </ol>
                    <div className="carousel-inner px-2 py-2">
                        {groupedTeams.map((group, groupIndex) => (
                            <div className={`carousel-item ${groupIndex === 0 ? 'active' : ''}`} key={groupIndex}>
                                <div className="row">
                                    {group.map((team, idx) => (
                                        <div className="col-md-3 mb-4" key={idx}>
                                            <div className="card bg-dark text-white h-100">
                                                <img
                                                    src={team.image}
                                                    className="card-img-top rounded-top"
                                                    alt={team.name}
                                                    style={{ height: '200px', objectFit: 'cover' }}
                                                />
                                                <div className="card-body">
                                                    <h5 className="card-title">{team.name}</h5>
                                                    <p className="card-text"><strong>Captain:</strong> {team.captain}</p>
                                                    <div className="d-flex justify-content-center gap-3">
                                                        <a href={team.insta} target="_blank" rel="noopener noreferrer" className="text-light">
                                                            <i className="bi bi-instagram fs-5"></i>
                                                        </a>
                                                        <a href={team.facebook} target="_blank" rel="noopener noreferrer" className="text-light">
                                                            <i className="bi bi-facebook fs-5"></i>
                                                        </a>
                                                        <a href={team.twitter} target="_blank" rel="noopener noreferrer" className="text-light">
                                                            <i className="bi bi-twitter-x fs-5"></i>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    
                                    ))}
                                    
                                </div>
                            </div>
                        ))}
                        </div>
                    </div>

                        {/* Carousel Controls */}
                        <button className="carousel-control-prev" type="button" data-bs-target="#teamCarousel" data-bs-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button className="carousel-control-next" type="button" data-bs-target="#teamCarousel" data-bs-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Next</span>
                        </button>
                </div>
            </div>
        </div>
    );
}

export default Body;
