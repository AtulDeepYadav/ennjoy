import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { useNavigate } from 'react-router-dom'; // For navigation
import image_1 from './img/bookreading.jpg'; // used for preloading
import image_2 from './img/vibez_1.jpg'; // used for preloading
import image_3 from './img/vibez_3.jpg'; // used for preloading
import VibezEvents from './Vibez_Events'; // in case you have plans to use it
import events from './Vibez.json'; // 👈 Importing events data

function Vibez() {
    const navigate = useNavigate(); // React Router Hook
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
    const handleMoreDetails = (event) => setSelectedEvent(event);

    const handleRegisterNow = (event) => {
        // On Register Now button click, navigate to PaymentPage and pass event details
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
        <div className="bg-dark text-white py-4 rounded-4">
            <h2 className="text-center text-warning mb-4">Vibez</h2>

            {/* Filters */}
            <div className="container mb-4">
                <div className="row">
                    <div className="col-md-4 mb-3">
                        <select
                            name="state"
                            className="form-select"
                            value={locations.state}
                            onChange={handleLocationChange}
                        >
                            <option value="">Select State</option>
                            <option value="Rajasthan">Rajasthan</option>
                            <option value="Delhi">Delhi</option>
                        </select>
                    </div>

                    <div className="col-md-4 mb-3">
                        <select
                            name="city"
                            className="form-select"
                            value={locations.city}
                            onChange={handleLocationChange}
                        >
                            <option value="">Select City</option>
                            <option value="Jaipur">Jaipur</option>
                            <option value="Delhi">Delhi</option>
                        </select>
                    </div>

                    <div className="col-md-4 mb-3">
                        <select
                            className="form-select"
                            value={selectedDate}
                            onChange={handleDateChange}
                        >
                            <option value="">Select Event Date</option>
                            <option value="2025-05-10">2025-05-10</option>
                            <option value="2025-05-12">2025-05-12</option>
                        </select>
                    </div>
                </div>
            </div>

            {/* Event Cards */}
            <div className="container">
                <h4 className="text-center text-warning mb-4">Available Events</h4>
                {filteredEvents.length > 0 ? (
                    <div className="row g-4">
                        {filteredEvents.map((e, i) => (
                            <div className="col-md-6 col-lg-4" key={i}>
                                <div className="card h-100 bg-light text-dark rounded-4 shadow d-flex flex-column">
                                    <img
                                        src={e.images[0]}
                                        className="card-img-top rounded-top"
                                        style={{ height: '250px', objectFit: 'cover' }}
                                        alt={e.title}
                                    />
                                    <div className="card-body d-flex flex-column">
                                        <h5 className="card-title text-primary fw-bold">{e.title}</h5>
                                        <p><strong>Organiser:</strong> {e.organiser}</p>
                                        <p><strong>Date:</strong> {new Date(e.date).toDateString()}</p>
                                        <p>
                                            <strong>Location:</strong>{' '}
                                            <a href={e.locationMap} target="_blank" rel="noopener noreferrer">
                                                {e.location}
                                            </a>
                                        </p>
                                        <p><strong>👨 {e.malePercent}% / 👩 {e.femalePercent}%</strong></p>
                                        <p>
                                            <strong>Avg Age:</strong> {e.avgAge} yrs |{' '}
                                            <strong>Age Range:</strong> {e.minAge}-{e.maxAge}
                                        </p>
                                        <div className="mt-auto d-flex justify-content-between gap-2">
                                            <button className="btn btn-warning w-50">Register Now</button>
                                            <button
                                                className="btn btn-outline-primary w-50"
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
            </div>

            {/* Event Detail Modal */}
            {selectedEvent && (
                <div
                    className="modal fade show"
                    id="eventDetailsModal"
                    tabIndex="-1"
                    aria-labelledby="eventDetailsModalLabel"
                    aria-hidden="true"
                    style={{ display: 'block' }}
                >
                    <div className="modal-dialog modal-lg">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="eventDetailsModalLabel">{selectedEvent.title}</h5>
                                <button
                                    type="button"
                                    className="btn-close"
                                    data-bs-dismiss="modal"
                                    aria-label="Close"
                                    onClick={() => setSelectedEvent(null)}
                                ></button>
                            </div>
                            <div className="modal-body">
                                <div id="eventImagesCarousel" className="carousel slide mb-4" data-bs-ride="carousel">
                                    <div className="carousel-inner">
                                        {selectedEvent.images.map((img, index) => (
                                            <div className={`carousel-item ${index === 0 ? 'active' : ''}`} key={index}>
                                                <img src={img} className="d-block w-100" alt={`Event ${index + 1}`} />
                                            </div>
                                        ))}
                                    </div>
                                    <button className="carousel-control-prev" type="button" data-bs-target="#eventImagesCarousel" data-bs-slide="prev">
                                        <span className="carousel-control-prev-icon"></span>
                                    </button>
                                    <button className="carousel-control-next" type="button" data-bs-target="#eventImagesCarousel" data-bs-slide="next">
                                        <span className="carousel-control-next-icon"></span>
                                    </button>
                                </div>

                                <p>{selectedEvent.description}</p>
                                <p>
                                    <strong>Location:</strong>{' '}
                                    <a href={selectedEvent.locationMap} target="_blank" rel="noopener noreferrer">
                                        {selectedEvent.location}
                                    </a>
                                </p>
                                <h6>Registration Fees:</h6>
                                <ul>
                                    <li>Male: ₹{selectedEvent.registrationFees.male}</li>
                                    <li>Female: ₹{selectedEvent.registrationFees.female}</li>
                                    <li>Couple: ₹{selectedEvent.registrationFees.couple}</li>
                                </ul>
                                <h6>Food Menu:</h6>
                                <ul>
                                    {selectedEvent.foodMenu.map((item, i) => (
                                        <li key={i}>{item}</li>
                                    ))}
                                </ul>
                                <h6>Drinks:</h6>
                                <ul>
                                    {selectedEvent.drinks.map((item, i) => (
                                        <li key={i}>{item}</li>
                                    ))}
                                </ul>
                                <p><strong>Smoking:</strong> {selectedEvent.smoke}</p>
                            </div>
                            <div className="modal-footer">
                                <button className="btn btn-warning w-25" onClick={() => handleRegisterNow(selectedEvent)}>Register Now</button>
                                <button
                                    type="button"
                                    className="btn btn-secondary"
                                    data-bs-dismiss="modal"
                                    onClick={() => setSelectedEvent(null)}
                                >
                                    Close
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Vibez;
