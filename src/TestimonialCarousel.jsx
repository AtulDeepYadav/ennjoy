import React, { useState, useEffect, useRef } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

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
    {
        name: 'Harhist Agarwal',
        quote: 'Ennjoy has transformed the way we connect and engage with our community. It’s a game-changer!',
    },
];

const TestimonialCarousel = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const testimonialsPerSlide = window.innerWidth < 768 ? 1 : window.innerWidth < 1024 ? 2 : 3;

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % Math.ceil(testimonials.length / testimonialsPerSlide));
        }, 3000);
        return () => clearInterval(interval);
    }, [testimonialsPerSlide]);

    const handleDotClick = (index) => setCurrentIndex(index);

    const startIndex = currentIndex * testimonialsPerSlide;
    const visibleTestimonials = testimonials.slice(startIndex, startIndex + testimonialsPerSlide);

    return (
        <div className="container py-4">
            <div className="row justify-content-center g-4">
                {visibleTestimonials.map((testimonial, idx) => (
                    <div className="col-12 col-md-6 col-lg-4 d-flex" key={idx}>
                        <div
                            className="card shadow-lg border-0 rounded-4 flex-fill text-center"
                            style={{
                                background: 'rgba(255,255,255,0.88)',
                                backdropFilter: 'blur(10px)',
                                transition: 'transform 0.18s, box-shadow 0.18s',
                            }}
                            onMouseOver={e => {
                                e.currentTarget.style.transform = 'scale(1.04)';
                                e.currentTarget.style.boxShadow = '0 8px 32px #00bfff33, 0 1.5px 8px #ffd18033 inset';
                            }}
                            onMouseOut={e => {
                                e.currentTarget.style.transform = 'none';
                                e.currentTarget.style.boxShadow = '';
                            }}
                        >
                            <div className="card-body d-flex flex-column justify-content-center align-items-center">
                                <p className="mb-3" style={{
                                    fontSize: '1.08rem',
                                    color: '#0a174e',
                                    fontWeight: 500,
                                    minHeight: 70,
                                    letterSpacing: '0.2px',
                                }}>
                                    “{testimonial.quote}”
                                </p>
                                <div
                                    style={{
                                        width: 40,
                                        height: 4,
                                        borderRadius: 2,
                                        background: 'linear-gradient(90deg, #ffd180 10%, #00bfff 90%)',
                                        margin: '0 auto 12px auto',
                                    }}
                                />
                                <p className="mb-0" style={{
                                    color: '#00bfff',
                                    fontWeight: 700,
                                    fontSize: '1.05rem',
                                    letterSpacing: '0.5px',
                                }}>
                                    — {testimonial.name}
                                </p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <div className="d-flex justify-content-center mt-3">
                {Array.from({ length: Math.ceil(testimonials.length / testimonialsPerSlide) }).map((_, i) => (
                    <button
                        key={i}
                        type="button"
                        className={`mx-1 rounded-circle border-0 ${i === currentIndex ? '' : ''}`}
                        style={{
                            width: i === currentIndex ? 16 : 10,
                            height: i === currentIndex ? 16 : 10,
                            background: i === currentIndex
                                ? 'linear-gradient(90deg, #ffd180 10%, #00bfff 90%)'
                                : '#b2ebff',
                            border: i === currentIndex ? '2.5px solid #00bfff' : '1.5px solid #ffd180',
                            transition: 'all 0.18s',
                            outline: 'none',
                        }}
                        onClick={() => handleDotClick(i)}
                        aria-label={`Go to slide ${i + 1}`}
                    />
                ))}
            </div>
        </div>
    );
};

export default TestimonialCarousel;
