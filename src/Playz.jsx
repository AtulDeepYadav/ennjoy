import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import image_1 from './img/about-1.jpeg';
import image_2 from './img/about-2.jpg';
import image_3 from './img/about-3.jpg';

const tournaments = [
    {
        title: 'Football Championship',
        organiser: 'Sports India',
        date: '2025-05-15',
        location: 'Jaipur, Rajasthan, India',
        malePercent: 70,
        femalePercent: 30,
        avgAge: 22,
        minAge: 18,
        maxAge: 35,
        images: [image_1, image_2, image_3], // Multiple images
        description: "A competitive football tournament featuring teams from across India.",
        registrationFees: {
            male: 300,
            female: 250,
            couple: 500,
        },
        locationMap: 'https://www.google.com/maps?q=Jaipur, Rajasthan, India',
    },
    {
        title: 'Cricket Masters',
        organiser: 'Cricket League',
        date: '2025-05-20',
        location: 'Delhi, India',
        malePercent: 80,
        femalePercent: 20,
        avgAge: 25,
        minAge: 18,
        maxAge: 40,
        images: [image_1, image_2, image_3], // Multiple images
        description: "Join us for an exciting cricket tournament with local and national teams.",
        registrationFees: {
            male: 350,
            female: 300,
            couple: 600,
        },
        locationMap: 'https://www.google.com/maps?q=Delhi, India',
    },
    {
        title: 'Basketball Showdown',
        organiser: 'National Basketball League',
        date: '2025-06-10',
        location: 'Mumbai, Maharashtra, India',
        malePercent: 75,
        femalePercent: 25,
        avgAge: 24,
        minAge: 18,
        maxAge: 33,
        images: [image_1, image_2, image_3], // Multiple images
        description: "A thrilling basketball tournament with teams competing for the national title.",
        registrationFees: {
            male: 400,
            female: 350,
            couple: 700,
        },
        locationMap: 'https://www.google.com/maps?q=Mumbai, Maharashtra, India',
    },
];

function Playz() {
    const [selectedLocation, setSelectedLocation] = useState('');
    const [selectedDate, setSelectedDate] = useState('');
    const [selectedTournament, setSelectedTournament] = useState(null); // Track selected tournament
    const [locations, setLocations] = useState({
        country: 'India',
        state: '',
        city: '',
    });
    const [isLoggedIn, setIsLoggedIn] = useState(() => {
        return localStorage.getItem('playzLoggedIn') === 'true';
    });
    const [showLoginPrompt, setShowLoginPrompt] = useState(false);
    const [pendingAction, setPendingAction] = useState(null); // 'register' or 'details'
    const [pendingTournament, setPendingTournament] = useState(null);

    const handleLocationChange = (e) => {
        const { name, value } = e.target;
        setLocations((prevLocations) => ({
            ...prevLocations,
            [name]: value,
        }));
    };

    const handleDateChange = (e) => {
        setSelectedDate(e.target.value);
    };

    const handleMoreDetails = (tournament) => {
        setSelectedTournament(tournament); // Set the selected tournament for detailed view
    };

    const handleRegisterOrDetails = (tournament, type) => {
        if (!isLoggedIn) {
            setPendingAction(type);
            setPendingTournament(tournament);
            setShowLoginPrompt(true);
            return;
        }
        if (type === 'details') setSelectedTournament(tournament);
        // For register, you can add your registration logic here
        // e.g., navigate to registration page or open registration modal
        // For now, just open details modal for both actions
        if (type === 'register') setSelectedTournament(tournament);
    };

    const handleLogin = () => {
        setIsLoggedIn(true);
        localStorage.setItem('playzLoggedIn', 'true');
        setShowLoginPrompt(false);
        // After login, perform the pending action
        if (pendingAction && pendingTournament) {
            if (pendingAction === 'details' || pendingAction === 'register') {
                setSelectedTournament(pendingTournament);
            }
            setPendingAction(null);
            setPendingTournament(null);
        }
    };

    const filteredTournaments = tournaments.filter((t) => {
        const locationMatch =
            (!locations.state || t.location.includes(locations.state)) &&
            (!locations.city || t.location.includes(locations.city));
        const dateMatch = !selectedDate || t.date === selectedDate;

        return locationMatch && dateMatch;
    });

    return (
        <div
            className="py-4"
            style={{
                minHeight: '100vh',
                fontFamily: "'Poppins', 'Inter', Arial, sans-serif",
                background: 'rgba(255,255,255,0.08)',
            }}
        >
            <div className="container">
                <h2
                    className="text-center fw-bold mb-2"
                    style={{
                        color: '#000',
                        letterSpacing: '2px',
                        fontSize: '2.4rem',
                        fontFamily: "'Poppins', 'Inter', Arial, sans-serif",
                        textShadow: '0 2px 12px #0a174e33',
                    }}
                >
                    Playz - Sports Tournaments
                </h2>
                <div
                    style={{
                        width: 60,
                        height: 5,
                        borderRadius: 3,
                        background: 'linear-gradient(90deg, #ffd180 10%, #00bfff 90%)',
                        margin: '0 auto 2.5rem auto',
                    }}
                />

                {/* Filters */}
                <div className="row mb-4 g-3 justify-content-center">
                    <div className="col-md-3">
                        <select
                            name="state"
                            className="form-select rounded-pill shadow-sm"
                            value={locations.state}
                            onChange={handleLocationChange}
                            style={{ fontWeight: 500, fontSize: '1.05rem' }}
                        >
                            <option value="">Select State</option>
                            <option value="Rajasthan">Rajasthan</option>
                            <option value="Delhi">Delhi</option>
                            <option value="Maharashtra">Maharashtra</option>
                        </select>
                    </div>
                    <div className="col-md-3">
                        <select
                            name="city"
                            className="form-select rounded-pill shadow-sm"
                            value={locations.city}
                            onChange={handleLocationChange}
                            style={{ fontWeight: 500, fontSize: '1.05rem' }}
                        >
                            <option value="">Select City</option>
                            <option value="Jaipur">Jaipur</option>
                            <option value="Delhi">Delhi</option>
                            <option value="Mumbai">Mumbai</option>
                        </select>
                    </div>
                    <div className="col-md-3">
                        <select
                            className="form-select rounded-pill shadow-sm"
                            value={selectedDate}
                            onChange={handleDateChange}
                            style={{ fontWeight: 500, fontSize: '1.05rem' }}
                        >
                            <option value="">Select Tournament Date</option>
                            <option value="2025-05-15">2025-05-15</option>
                            <option value="2025-05-20">2025-05-20</option>
                            <option value="2025-06-10">2025-06-10</option>
                        </select>
                    </div>
                </div>

                {/* Tournament Cards */}
                <h4
                    className="text-center fw-bold mb-4"
                    style={{
                        color: '#00bfff',
                        letterSpacing: '1px',
                        fontSize: '1.5rem',
                    }}
                >
                    Upcoming Tournaments
                </h4>
                {filteredTournaments.length > 0 ? (
                    <div className="row g-4">
                        {filteredTournaments.map((t, i) => (
                            <div className="col-md-6 col-lg-4" key={i}>
                                <div
                                    className="card h-100 border-0 shadow-lg d-flex flex-column"
                                    style={{
                                        background: 'rgba(255,255,255,0.22)',
                                        backdropFilter: 'blur(10px)',
                                        borderRadius: '1.5rem',
                                        boxShadow: '0 4px 24px #00bfff22, 0 1.5px 8px #ffd18033 inset',
                                        transition: 'transform 0.18s, box-shadow 0.18s',
                                        overflow: 'hidden',
                                    }}
                                    onMouseOver={e => {
                                        e.currentTarget.style.transform = 'scale(1.03)';
                                        e.currentTarget.style.boxShadow = '0 8px 32px #00bfff33, 0 1.5px 8px #ffd18033 inset';
                                    }}
                                    onMouseOut={e => {
                                        e.currentTarget.style.transform = 'none';
                                        e.currentTarget.style.boxShadow = '0 4px 24px #00bfff22, 0 1.5px 8px #ffd18033 inset';
                                    }}
                                >
                                    <img
                                        src={t.images[0]}
                                        className="card-img-top"
                                        style={{
                                            height: '220px',
                                            objectFit: 'cover',
                                            borderTopLeftRadius: '1.5rem',
                                            borderTopRightRadius: '1.5rem',
                                        }}
                                        alt={t.title}
                                    />
                                    <div className="card-body d-flex flex-column" style={{ background: 'transparent' }}>
                                        <h5 className="card-title fw-bold mb-2" style={{ color: '#0a174e', fontSize: '1.25rem' }}>
                                            {t.title}
                                        </h5>
                                        <p className="mb-1">
                                            <strong>Organiser:</strong> {t.organiser}
                                        </p>
                                        <p className="mb-1">
                                            <strong>Date:</strong> {new Date(t.date).toDateString()}
                                        </p>
                                        <p className="mb-1">
                                            <strong>Location:</strong>{' '}
                                            <a href={t.locationMap} target="_blank" rel="noopener noreferrer" style={{ color: '#00bfff', textDecoration: 'underline' }}>
                                                {t.location}
                                            </a>
                                        </p>
                                        <p className="mb-1">
                                            <strong>👨 {t.malePercent}% / 👩 {t.femalePercent}%</strong>
                                        </p>
                                        <p className="mb-1">
                                            <strong>Avg Age:</strong> {t.avgAge} yrs | <strong>Age Range:</strong> {t.minAge}-{t.maxAge}
                                        </p>
                                        <div className="mt-auto d-flex justify-content-between gap-2">
                                            <button
                                                className="btn btn-warning w-50 fw-bold rounded-pill shadow"
                                                style={{
                                                    background: 'linear-gradient(90deg, #ffd180 60%, #fffde4 100%)',
                                                    color: '#0a174e',
                                                    border: 'none',
                                                    fontSize: '1.08rem',
                                                    letterSpacing: '1px',
                                                    transition: 'background 0.18s, color 0.18s, transform 0.18s',
                                                }}
                                                onClick={() => handleRegisterOrDetails(t, 'register')}
                                                onMouseOver={e => {
                                                    e.currentTarget.style.background = '#fffde4';
                                                    e.currentTarget.style.color = '#00bfff';
                                                    e.currentTarget.style.transform = 'scale(1.04)';
                                                }}
                                                onMouseOut={e => {
                                                    e.currentTarget.style.background = 'linear-gradient(90deg, #ffd180 60%, #fffde4 100%)';
                                                    e.currentTarget.style.color = '#0a174e';
                                                    e.currentTarget.style.transform = 'none';
                                                }}
                                            >
                                                Register Now
                                            </button>
                                            <button
                                                className="btn btn-outline-primary w-50 fw-bold rounded-pill shadow"
                                                style={{
                                                    fontSize: '1.08rem',
                                                    letterSpacing: '1px',
                                                    borderWidth: '2px',
                                                    background: '#fff',
                                                    color: '#0a174e',
                                                    border: '2px solid #00bfff',
                                                    transition: 'background 0.18s, color 0.18s, transform 0.18s',
                                                }}
                                                onClick={() => handleRegisterOrDetails(t, 'details')}
                                                onMouseOver={e => {
                                                    e.currentTarget.style.background = '#00bfff';
                                                    e.currentTarget.style.color = '#fff';
                                                    e.currentTarget.style.transform = 'scale(1.04)';
                                                }}
                                                onMouseOut={e => {
                                                    e.currentTarget.style.background = '#fff';
                                                    e.currentTarget.style.color = '#0a174e';
                                                    e.currentTarget.style.transform = 'none';
                                                }}
                                            >
                                                More Details
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                ) : (
                    <p className="text-center text-muted">No tournaments found for selected filters.</p>
                )}

                {/* Tournament Details Modal */}
                {selectedTournament && (
                    <div
                        className="position-fixed top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center"
                        style={{
                            background: 'rgba(10,23,78,0.55)',
                            zIndex: 1050,
                            left: 0,
                            top: 0,
                        }}
                    >
                        <div
                            className="rounded-4 shadow-lg p-4"
                            style={{
                                background: 'rgba(255,255,255,0.95)',
                                maxWidth: 600,
                                width: '100%',
                                position: 'relative',
                                border: '2.5px solid',
                                borderImage: 'linear-gradient(90deg, #ffd180 10%, #00bfff 90%) 1',
                                boxShadow: '0 8px 32px 0 rgba(31,38,135,0.18), 0 1.5px 8px #ffd18033 inset',
                            }}
                        >
                            {/* Close Button */}
                            <button
                                className="btn-close position-absolute"
                                style={{ top: 18, right: 18, zIndex: 10 }}
                                aria-label="Close"
                                onClick={() => setSelectedTournament(null)}
                            ></button>
                            <h4 className="text-center fw-bold mb-3" style={{ color: '#00bfff', letterSpacing: '1px' }}>
                                {selectedTournament.title}
                            </h4>
                            {/* Image Carousel */}
                            <div
                                id="tournamentImagesCarousel"
                                className="carousel slide mb-4"
                                data-bs-ride="carousel"
                            >
                                <div className="carousel-inner rounded-4 overflow-hidden">
                                    {selectedTournament.images.map((img, index) => (
                                        <div
                                            className={`carousel-item ${index === 0 ? 'active' : ''}`}
                                            key={index}
                                        >
                                            <img
                                                src={img}
                                                className="d-block w-100"
                                                alt={`Tournament Image ${index + 1}`}
                                                style={{ maxHeight: '260px', objectFit: 'cover' }}
                                            />
                                        </div>
                                    ))}
                                </div>
                                <button
                                    className="carousel-control-prev"
                                    type="button"
                                    data-bs-target="#tournamentImagesCarousel"
                                    data-bs-slide="prev"
                                >
                                    <span className="carousel-control-prev-icon"></span>
                                </button>
                                <button
                                    className="carousel-control-next"
                                    type="button"
                                    data-bs-target="#tournamentImagesCarousel"
                                    data-bs-slide="next"
                                >
                                    <span className="carousel-control-next-icon"></span>
                                </button>
                            </div>
                            <p className="mb-2">{selectedTournament.description}</p>
                            <p>
                                <strong>Location:</strong>{' '}
                                <a href={selectedTournament.locationMap} target="_blank" rel="noopener noreferrer" style={{ color: '#00bfff', textDecoration: 'underline' }}>
                                    {selectedTournament.location}
                                </a>
                            </p>
                            <h6 className="fw-bold mt-3" style={{ color: '#0a174e' }}>Registration Fees:</h6>
                            <ul>
                                <li>Male: ₹{selectedTournament.registrationFees.male}</li>
                                <li>Female: ₹{selectedTournament.registrationFees.female}</li>
                                <li>Couple: ₹{selectedTournament.registrationFees.couple}</li>
                            </ul>
                            <div className="mt-4 text-center">
                                <button className="btn btn-warning w-50 fw-bold rounded-pill shadow"
                                    style={{
                                        background: 'linear-gradient(90deg, #ffd180 60%, #fffde4 100%)',
                                        color: '#0a174e',
                                        border: 'none',
                                        fontSize: '1.15rem',
                                        letterSpacing: '1px',
                                        transition: 'background 0.18s, color 0.18s, transform 0.18s',
                                    }}
                                    onMouseOver={e => {
                                        e.currentTarget.style.background = '#fffde4';
                                        e.currentTarget.style.color = '#00bfff';
                                        e.currentTarget.style.transform = 'scale(1.04)';
                                    }}
                                    onMouseOut={e => {
                                        e.currentTarget.style.background = 'linear-gradient(90deg, #ffd180 60%, #fffde4 100%)';
                                        e.currentTarget.style.color = '#0a174e';
                                        e.currentTarget.style.transform = 'none';
                                    }}
                                >
                                    Register Now
                                </button>
                            </div>
                        </div>
                    </div>
                )}

                {/* Login Prompt Modal */}
                {showLoginPrompt && (
                    <div
                        className="position-fixed top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center"
                        style={{
                            background: 'rgba(10,23,78,0.55)',
                            zIndex: 2000,
                            left: 0,
                            top: 0,
                        }}
                    >
                        <div
                            className="rounded-4 shadow-lg p-4"
                            style={{
                                background: 'rgba(255,255,255,0.98)',
                                maxWidth: 350,
                                width: '100%',
                                position: 'relative',
                                border: '2.5px solid',
                                borderImage: 'linear-gradient(90deg, #ffd180 10%, #00bfff 90%) 1',
                                boxShadow: '0 8px 32px 0 rgba(31,38,135,0.18), 0 1.5px 8px #ffd18033 inset',
                            }}
                        >
                            <button
                                className="btn-close position-absolute"
                                style={{ top: 18, right: 18, zIndex: 10 }}
                                aria-label="Close"
                                onClick={() => setShowLoginPrompt(false)}
                            ></button>
                            <h5 className="text-center fw-bold mb-3" style={{ color: '#0a174e' }}>
                                Please Login to Continue
                            </h5>
                            <div className="text-center">
                                <button
                                    className="btn btn-primary rounded-pill px-4 fw-bold"
                                    style={{
                                        background: 'linear-gradient(90deg, #00bfff 60%, #ffd180 100%)',
                                        border: 'none',
                                        color: '#fff',
                                        fontSize: '1.08rem',
                                        letterSpacing: '1px',
                                        transition: 'background 0.18s, color 0.18s, transform 0.18s',
                                    }}
                                    onMouseOver={e => {
                                        e.currentTarget.style.background = '#ffd180';
                                        e.currentTarget.style.color = '#0a174e';
                                        e.currentTarget.style.transform = 'scale(1.04)';
                                    }}
                                    onMouseOut={e => {
                                        e.currentTarget.style.background = 'linear-gradient(90deg, #00bfff 60%, #ffd180 100%)';
                                        e.currentTarget.style.color = '#fff';
                                        e.currentTarget.style.transform = 'none';
                                    }}
                                    onClick={handleLogin}
                                >
                                    Login
                                </button>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}

export default Playz;
