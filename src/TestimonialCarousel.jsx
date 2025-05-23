import React, { useState, useEffect, useRef } from 'react';
import './index.css';

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
    const containerRef = useRef(null);
    const testimonialsPerSlide = window.innerWidth < 768 ? 1 : window.innerWidth < 1024 ? 2 : 3;

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % Math.ceil(testimonials.length / testimonialsPerSlide));
        }, 3000);

        return () => clearInterval(interval);
    }, [testimonialsPerSlide]);

    const handleDotClick = (index) => {
        setCurrentIndex(index);
    };

    const startIndex = currentIndex * testimonialsPerSlide;
    const visibleTestimonials = testimonials.slice(startIndex, startIndex + testimonialsPerSlide);

    return (
        <div className="testimonial-carousel">
            <div className="testimonial-container" ref={containerRef}>
                {visibleTestimonials.map((testimonial, idx) => (
                    <div key={idx} className="testimonial-card">
                        <p className="quote">“{testimonial.quote}”</p>
                        <p className="name">— {testimonial.name}</p>
                    </div>
                ))}
            </div>
            <div className="carousel-dots">
                {Array.from({ length: Math.ceil(testimonials.length / testimonialsPerSlide) }).map((_, i) => (
                    <span
                        key={i}
                        className={`dot ${i === currentIndex ? 'active' : ''}`}
                        onClick={() => handleDotClick(i)}
                    />
                ))}
            </div>
        </div>
    );
};

export default TestimonialCarousel;
