import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';


const events = [
    { title: 'Book Reading', img: 'src/img/about-1.jpg', desc: 'Join city’s biggest Book Reading Event!' },
    { title: 'Party Masters', img: 'src/img/about-2.jpg', desc: 'Compete with the best Party people' },
    { title: 'Blind Date', img: 'src/img/about-3.jpg', desc: 'Best matches on this weekend!' },
];

const reviews = [
    { user: 'Ravi', comment: 'Amazing event experience!' },
    { user: 'Priya', comment: 'Well-organized and fun games.' },
    { user: 'Aman', comment: 'Easy to book and great support!' },
];

function Vibez() {
    return (
        <>
            <div>
                {/* Carousel */}
                <div id="eventCarousel" className="carousel slide mt-4" data-bs-ride="carousel" data-bs-interval="3000">
                    <div className="carousel-inner">
                        {events.map((e, i) => (
                            <div className={`carousel-item ${i === 0 ? 'active' : ''}`} key={i}>
                                <img src={e.img} className="d-block w-100" style={{ height: '400px', objectFit: 'cover' }} alt={e.title} />
                                <div className="carousel-caption d-none d-md-block bg-dark bg-opacity-50 rounded">
                                    <h5>{e.title}</h5>
                                    <p>{e.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#eventCarousel" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon"></span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#eventCarousel" data-bs-slide="next">
                        <span className="carousel-control-next-icon"></span>
                    </button>
                </div>

                {/* Reviews Slider */}
                <div className="container my-5">
                    <h3 className="text-center mb-4">User Reviews</h3>
                    <div className="d-flex overflow-auto">
                        {reviews.map((r, i) => (
                            <div key={i} className="card text-white bg-secondary mx-3" style={{ minWidth: '250px' }}>
                                <div className="card-body">
                                    <h5 className="card-title">{r.user}</h5>
                                    <p className="card-text">"{r.comment}"</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
}

export default Vibez;
