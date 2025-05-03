import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

const EventDetails = ({ event, onBack }) => {
    if (!event) return <p>No event selected.</p>;

    const {
        title,
        organizer,
        date,
        location,
        images,
        malePercent,
        femalePercent,
        avgAge,
        minAge,
        maxAge,
        minEntryAge,
        feeMale,
        feeFemale,
        feeCouple,
        foodMenu,
        drinks,
        smokeOptions,
        mapEmbedUrl
    } = event;

    return (
        <div className="container my-5">
            {/* Event Title */}
            <h2 className="text-center text-warning mb-4">{title}</h2>

            {/* Carousel */}
            <div id="eventImageCarousel" className="carousel slide mb-4" data-bs-ride="carousel">
                <div className="carousel-inner">
                    {images.map((img, i) => (
                        <div className={`carousel-item ${i === 0 ? 'active' : ''}`} key={i}>
                            <img src={img} className="d-block w-100" style={{ height: '400px', objectFit: 'cover' }} alt={`event-${i}`} />
                        </div>
                    ))}
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#eventImageCarousel" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon"></span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#eventImageCarousel" data-bs-slide="next">
                    <span className="carousel-control-next-icon"></span>
                </button>
            </div>

            {/* Event Details */}
            <div className="card mb-4">
                <div className="card-body">
                    <h5 className="card-title">Organized by: {organizer}</h5>
                    <p className="card-text"><strong>Date:</strong> {date}</p>
                    <p className="card-text"><strong>Location:</strong> {location}</p>
                    <p className="card-text"><strong>Gender Ratio:</strong> 👨 {malePercent}% | 👩 {femalePercent}%</p>
                    <p className="card-text"><strong>Age Range:</strong> {minAge} – {maxAge} yrs | Avg: {avgAge} yrs</p>
                    <p className="card-text"><strong>Minimum Age to Enter:</strong> {minEntryAge} yrs</p>
                    <p className="card-text"><strong>Registration Fee:</strong><br />
                        Male: ₹{feeMale} | Female: ₹{feeFemale} | Couple: ₹{feeCouple}
                    </p>
                </div>
            </div>

            {/* Google Map */}
            <div className="mb-4">
                <h5>Event Location</h5>
                <iframe
                    src={mapEmbedUrl}
                    width="100%"
                    height="300"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    title="event-map"
                    referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
            </div>

            {/* Food and Drinks */}
            <div className="row">
                <div className="col-md-4">
                    <h5>Food Menu</h5>
                    <ul>
                        {foodMenu.map((item, idx) => <li key={idx}>{item}</li>)}
                    </ul>
                </div>
                <div className="col-md-4">
                    <h5>Drinks</h5>
                    <ul>
                        {drinks.map((item, idx) => <li key={idx}>{item}</li>)}
                    </ul>
                </div>
                <div className="col-md-4">
                    <h5>Smoke Options</h5>
                    <ul>
                        {smokeOptions.map((item, idx) => <li key={idx}>{item}</li>)}
                    </ul>
                </div>
            </div>

            {/* Buttons */}
            <div className="d-flex justify-content-center gap-3 mt-4">
                <button className="btn btn-primary">Register Now</button>
                <button className="btn btn-outline-secondary" onClick={onBack}>Back</button>
            </div>
        </div>
    );
};

export default EventDetails;
