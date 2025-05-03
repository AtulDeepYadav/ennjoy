import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import image_1 from './img/bookreading.jpg';
import image_2 from './img/vibez_1.jpg';
import image_3 from './img/vibez_3.jpg';
import VibezEvents from './Vibez_Events';

const events = [
    {
        title: 'Book Reading',
        organiser: 'City Library',
        date: '2025-05-10',
        location: 'Jaipur, Rajasthan, India',
        malePercent: 40,
        femalePercent: 60,
        avgAge: 25,
        minAge: 18,
        maxAge: 35,
        images: [image_1, image_2, image_3], // Multiple images
        description: "A relaxed event where book enthusiasts gather to discuss and read books together.",
        registrationFees: {
            male: 200,
            female: 150,
            couple: 300,
        },
        foodMenu: ['Sandwiches', 'Pastries', 'Fruits'],
        drinks: ['Tea', 'Coffee', 'Juices'],
        smoke: 'No Smoking',
        locationMap: 'https://www.google.com/maps?q=Jaipur, Rajasthan, India',
    },
    {
        title: 'Party Masters',
        organiser: 'Vibez Team',
        date: '2025-05-12',
        location: 'Jaipur, Rajasthan, India',
        malePercent: 50,
        femalePercent: 50,
        avgAge: 28,
        minAge: 21,
        maxAge: 32,
        images: [image_1, image_2, image_3], // Multiple images
        description: "A fun, high-energy party event with music and dancing for all to enjoy.",
        registrationFees: {
            male: 500,
            female: 450,
            couple: 900,
        },
        foodMenu: ['Burgers', 'Pizza', 'Fries'],
        drinks: ['Beer', 'Cocktails', 'Soft Drinks'],
        smoke: 'Smoking Zone Available',
        locationMap: 'https://www.google.com/maps?q=Jaipur, Rajasthan, India',
    },
    {
        title: 'Blind Date',
        organiser: 'MatchPoint',
        date: '2025-05-12',
        location: 'Delhi, India',
        malePercent: 45,
        femalePercent: 55,
        avgAge: 26,
        minAge: 20,
        maxAge: 30,
        images: [image_1, image_2, image_3], // Multiple images
        description: "A unique opportunity to meet someone new with a blind date format.",
        registrationFees: {
            male: 300,
            female: 250,
            couple: 500,
        },
        foodMenu: ['Sushi', 'Tacos', 'Salads'],
        drinks: ['Wine', 'Water', 'Mocktails'],
        smoke: 'No Smoking',
        locationMap: 'https://www.google.com/maps?q=Delhi, India',
    },
];

function Vibez() {
    const [selectedLocation, setSelectedLocation] = useState('');
    const [selectedDate, setSelectedDate] = useState('');
    const [selectedEvent, setSelectedEvent] = useState(null); // Track selected event
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

    const handleMoreDetails = (event) => {
        setSelectedEvent(event); // Set the selected event for detailed view
    };

    const filteredEvents = events.filter((e) => {
        const locationMatch =
            (!locations.state || e.location.includes(locations.state)) &&
            (!locations.city || e.location.includes(locations.city));
        const dateMatch = !selectedDate || e.date === selectedDate;

        return locationMatch && dateMatch;
    });

    return (
        <div className="bg-dark text-white py-4">
            <h2 className="text-center text-warning mb-4">Vibez</h2>

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
                            <option value="">Select Event Date</option>
                            <option value="2025-05-10">2025-05-10</option>
                            <option value="2025-05-12">2025-05-12</option>
                            {/* Add more dates */}
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
                                <div className="card h-100 bg-light text-dark rounded-4 shadow fixed-card d-flex flex-column">
                                    <img
                                        src={e.images[0]}
                                        className="card-img-top rounded-top"
                                        style={{ height: '250px', objectFit: 'cover' }}
                                        alt={e.title}
                                    />
                                    <div className="card-body d-flex flex-column">
                                        <h5 className="card-title text-primary fw-bold">{e.title}</h5>
                                        <p className="card-text">
                                            <strong>Organiser:</strong> {e.organiser}
                                        </p>
                                        <p>
                                            <strong>Date:</strong> {new Date(e.date).toDateString()}
                                        </p>
                                        <p>
                                            <strong>Location:</strong>{' '}
                                            <a href={e.locationMap} target="_blank" rel="noopener noreferrer">
                                                {e.location}
                                            </a>
                                        </p>
                                        <p>
                                            <strong>👨 {e.malePercent}% / 👩 {e.femalePercent}%
                                            </strong>
                                        </p>
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

            {/* Event Details Page */}
            {selectedEvent && (
                <div className="container mt-5">
                    <h4 className="text-center text-warning mb-4">Event Details</h4>

                    {/* Image Carousel */}
                    <div
                        id="eventImagesCarousel"
                        className="carousel slide mb-4"
                        data-bs-ride="carousel"
                    >
                        <div className="carousel-inner">
                            {selectedEvent.images.map((img, index) => (
                                <div
                                    className={`carousel-item ${index === 0 ? 'active' : ''}`}
                                    key={index}
                                >
                                    <img
                                        src={img}
                                        className="d-block w-100"
                                        alt={`Event Image ${index + 1}`}
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
                    <h5>{selectedEvent.title}</h5>
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
                    <p>
                        <strong>Smoking:</strong> {selectedEvent.smoke}
                    </p>
                    <div className="mt-4 text-center">
                        <button className="btn btn-warning w-25">Register Now</button>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Vibez;