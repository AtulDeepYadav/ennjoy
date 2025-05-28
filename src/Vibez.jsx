import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { useNavigate } from 'react-router-dom';
import { getAuth } from 'firebase/auth';
import image_1 from './img/bookreading.jpg';
import image_2 from './img/vibez_1.jpg';
import image_3 from './img/vibez_3.jpg';
import VibezEvents from './Vibez_Events';
import events from './Vibez.json';

function Vibez() {
    const navigate = useNavigate();
    const [selectedDate, setSelectedDate] = useState('');
    const [selectedEvent, setSelectedEvent] = useState(null);
    const [locations, setLocations] = useState({
        country: 'India',
        state: '',
        city: '',
    });

    const handleLocationChange = (e) => {
        const { name, value } = e.target;
        setLocations((prev) => ({ ...prev, [name]: value }));
    };

    const handleDateChange = (e) => setSelectedDate(e.target.value);

    const handleMoreDetails = (event) => {
        const auth = getAuth();
        const user = auth.currentUser;

        if (!user) {
            alert("Please login first to view more details.");
            navigate('/login');
            return;
        }

        setSelectedEvent(event);
    };

    const handleRegisterNow = (event) => {
        const auth = getAuth();
        const user = auth.currentUser;

        if (!user) {
            alert("Please login first to register.");
            navigate('/login');
            return;
        }

        navigate('/payment', { state: { event } });
    };

    const filteredEvents = events.filter((e) => {
        const locationMatch =
            (!locations.state || e.location.includes(locations.state)) &&
            (!locations.city || e.location.includes(locations.city));
        const dateMatch = !selectedDate || e.date === selectedDate;
        return locationMatch && dateMatch;
    });

    return (
        <div
            className="py-4"
            style={{
                minHeight: '100vh',
                fontFamily: "'Poppins', 'Inter', Arial, sans-serif",
            }}
        >
            <div className="container">
                <h2
                    className="text-center fw-bold mb-2"
                    style={{
                        color: '#000',
                        letterSpacing: '2px',
                        fontSize: '2.4rem',
                        textShadow: '0 2px 12px #0a174e33',
                    }}
                >
                    Vibez
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
                    <div className="col-md-4">
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
                        </select>
                    </div>
                    <div className="col-md-4">
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
                        </select>
                    </div>
                    <div className="col-md-4">
                        <select
                            className="form-select rounded-pill shadow-sm"
                            value={selectedDate}
                            onChange={handleDateChange}
                            style={{ fontWeight: 500, fontSize: '1.05rem' }}
                        >
                            <option value="">Select Event Date</option>
                            <option value="2025-05-10">2025-05-10</option>
                            <option value="2025-05-12">2025-05-12</option>
                        </select>
                    </div>
                </div>

                {/* Event Cards */}
                <h4
                    className="text-center fw-bold mb-4"
                    style={{
                        color: '#00bfff',
                        letterSpacing: '1px',
                        fontSize: '1.5rem',
                    }}
                >
                    Available Events
                </h4>
                {filteredEvents.length > 0 ? (
                    <div className="row g-4">
                        {filteredEvents.map((e, i) => (
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
                                        src={e.images[0]}
                                        className="card-img-top"
                                        style={{
                                            height: '220px',
                                            objectFit: 'cover',
                                            borderTopLeftRadius: '1.5rem',
                                            borderTopRightRadius: '1.5rem',
                                        }}
                                        alt={e.title}
                                    />
                                    <div className="card-body d-flex flex-column" style={{ background: 'transparent' }}>
                                        <h5 className="card-title fw-bold mb-2" style={{ color: '#0a174e', fontSize: '1.25rem' }}>
                                            {e.title}
                                        </h5>
                                        <p className="mb-1">
                                            <strong>Organiser:</strong> {e.organiser}
                                        </p>
                                        <p className="mb-1">
                                            <strong>Date:</strong> {new Date(e.date).toDateString()}
                                        </p>
                                        <p className="mb-1">
                                            <strong>Location:</strong>{' '}
                                            <a href={e.locationMap} target="_blank" rel="noopener noreferrer" style={{ color: '#00bfff', textDecoration: 'underline' }}>
                                                {e.location}
                                            </a>
                                        </p>
                                        <p className="mb-1">
                                            <strong>👨 {e.malePercent}% / 👩 {e.femalePercent}%</strong>
                                        </p>
                                        <p className="mb-1">
                                            <strong>Avg Age:</strong> {e.avgAge} yrs | <strong>Age Range:</strong> {e.minAge}-{e.maxAge}
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
                                                onClick={() => handleRegisterNow(e)}
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
                                                onClick={() => handleMoreDetails(e)}
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
                    <p className="text-center text-muted">No events found for selected filters.</p>
                )}

                {/* Modal for Event Details */}
                {selectedEvent && (
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
                                background: 'rgba(255,255,255,0.97)',
                                maxWidth: 650,
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
                                onClick={() => setSelectedEvent(null)}
                            ></button>
                            <h4 className="text-center fw-bold mb-3" style={{ color: '#00bfff', letterSpacing: '1px' }}>
                                {selectedEvent.title}
                            </h4>
                            {/* Image Carousel */}
                            <div
                                id="eventImagesCarousel"
                                className="carousel slide mb-4"
                                data-bs-ride="carousel"
                            >
                                <div className="carousel-inner rounded-4 overflow-hidden">
                                    {selectedEvent.images.map((img, index) => (
                                        <div
                                            className={`carousel-item ${index === 0 ? 'active' : ''}`}
                                            key={index}
                                        >
                                            <img
                                                src={img}
                                                className="d-block w-100"
                                                alt={`Event Slide ${index + 1}`}
                                                style={{ maxHeight: '260px', objectFit: 'cover' }}
                                            />
                                        </div>
                                    ))}
                                </div>
                                <button
                                    className="carousel-control-prev"
                                    type="button"
                                    data-bs-target="#eventImagesCarousel"
                                    data-bs-slide="prev"
                                >
                                    <span className="carousel-control-prev-icon"></span>
                                </button>
                                <button
                                    className="carousel-control-next"
                                    type="button"
                                    data-bs-target="#eventImagesCarousel"
                                    data-bs-slide="next"
                                >
                                    <span className="carousel-control-next-icon"></span>
                                </button>
                            </div>
                            <p>{selectedEvent.description}</p>
                            <p>
                                <strong>Location:</strong>{' '}
                                <a href={selectedEvent.locationMap} target="_blank" rel="noopener noreferrer" style={{ color: '#00bfff', textDecoration: 'underline' }}>
                                    {selectedEvent.location}
                                </a>
                            </p>
                            <h6 className="fw-bold mt-3" style={{ color: '#0a174e' }}>Registration Fees:</h6>
                            <ul>
                                <li>Male: ₹{selectedEvent.registrationFees.male}</li>
                                <li>Female: ₹{selectedEvent.registrationFees.female}</li>
                                <li>Couple: ₹{selectedEvent.registrationFees.couple}</li>
                            </ul>
                            <h6 className="fw-bold mt-3" style={{ color: '#0a174e' }}>Food Menu:</h6>
                            <ul>
                                {selectedEvent.foodMenu.map((item, i) => (
                                    <li key={i}>{item}</li>
                                ))}
                            </ul>
                            <h6 className="fw-bold mt-3" style={{ color: '#0a174e' }}>Drinks:</h6>
                            <ul>
                                {selectedEvent.drinks.map((item, i) => (
                                    <li key={i}>{item}</li>
                                ))}
                            </ul>
                            <p><strong>Smoking:</strong> {selectedEvent.smoke}</p>
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
                                    onClick={() => handleRegisterNow(selectedEvent)}
                                >
                                    Register Now
                                </button>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}

export default Vibez;
