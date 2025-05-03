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

    const filteredTournaments = tournaments.filter((t) => {
        const locationMatch =
            (!locations.state || t.location.includes(locations.state)) &&
            (!locations.city || t.location.includes(locations.city));
        const dateMatch = !selectedDate || t.date === selectedDate;

        return locationMatch && dateMatch;
    });

    return (
        <div className="bg-dark text-white py-4">
            <h2 className="text-center text-warning mb-4">Playz - Sports Tournaments</h2>

            {/* Filters */}
            <div className="container mb-4">
                <div className="row">
                    {/* Location Filter */}
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
                            <option value="Maharashtra">Maharashtra</option>
                            {/* Add more states */}
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
                            <option value="Mumbai">Mumbai</option>
                            {/* Add more cities */}
                        </select>
                    </div>

                    {/* Event Date Filter */}
                    <div className="col-md-4 mb-3">
                        <select
                            className="form-select"
                            value={selectedDate}
                            onChange={handleDateChange}
                        >
                            <option value="">Select Tournament Date</option>
                            <option value="2025-05-15">2025-05-15</option>
                            <option value="2025-05-20">2025-05-20</option>
                            <option value="2025-06-10">2025-06-10</option>
                            {/* Add more dates */}
                        </select>
                    </div>
                </div>
            </div>

            {/* Tournament Cards */}
            <div className="container">
                <h4 className="text-center text-warning mb-4">Upcoming Tournaments</h4>
                {filteredTournaments.length > 0 ? (
                    <div className="row g-4">
                        {filteredTournaments.map((t, i) => (
                            <div className="col-md-6 col-lg-4" key={i}>
                                <div className="card h-100 bg-light text-dark rounded-4 shadow fixed-card d-flex flex-column">
                                    <img
                                        src={t.images[0]}
                                        className="card-img-top rounded-top"
                                        style={{ height: '250px', objectFit: 'cover' }}
                                        alt={t.title}
                                    />
                                    <div className="card-body d-flex flex-column">
                                        <h5 className="card-title text-primary fw-bold">{t.title}</h5>
                                        <p className="card-text">
                                            <strong>Organiser:</strong> {t.organiser}
                                        </p>
                                        <p>
                                            <strong>Date:</strong> {new Date(t.date).toDateString()}
                                        </p>
                                        <p>
                                            <strong>Location:</strong>{' '}
                                            <a href={t.locationMap} target="_blank" rel="noopener noreferrer">
                                                {t.location}
                                            </a>
                                        </p>
                                        <p>
                                            <strong>👨 {t.malePercent}% / 👩 {t.femalePercent}%
                                            </strong>
                                        </p>
                                        <p>
                                            <strong>Avg Age:</strong> {t.avgAge} yrs |{' '}
                                            <strong>Age Range:</strong> {t.minAge}-{t.maxAge}
                                        </p>
                                        <div className="mt-auto d-flex justify-content-between gap-2">
                                            <button className="btn btn-warning w-50">Register Now</button>
                                            <button
                                                className="btn btn-outline-primary w-50"
                                                onClick={() => handleMoreDetails(t)}
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
            </div>

            {/* Tournament Details Page */}
            {selectedTournament && (
                <div className="container mt-5">
                    <h4 className="text-center text-warning mb-4">Tournament Details</h4>

                    {/* Image Carousel */}
                    <div
                        id="tournamentImagesCarousel"
                        className="carousel slide mb-4"
                        data-bs-ride="carousel"
                    >
                        <div className="carousel-inner">
                            {selectedTournament.images.map((img, index) => (
                                <div
                                    className={`carousel-item ${index === 0 ? 'active' : ''}`}
                                    key={index}
                                >
                                    <img
                                        src={img}
                                        className="d-block w-100"
                                        alt={`Tournament Image ${index + 1}`}
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
                    <h5>{selectedTournament.title}</h5>
                    <p>{selectedTournament.description}</p>
                    <p>
                        <strong>Location:</strong>{' '}
                        <a href={selectedTournament.locationMap} target="_blank" rel="noopener noreferrer">
                            {selectedTournament.location}
                        </a>
                    </p>
                    <h6>Registration Fees:</h6>
                    <ul>
                        <li>Male: ₹{selectedTournament.registrationFees.male}</li>
                        <li>Female: ₹{selectedTournament.registrationFees.female}</li>
                        <li>Couple: ₹{selectedTournament.registrationFees.couple}</li>
                    </ul>
                    <div className="mt-4 text-center">
                        <button className="btn btn-warning w-25">Register Now</button>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Playz;
