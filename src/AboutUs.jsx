import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import playzImage_1 from './img/playz_1.jpeg';
import playzImage_2 from './img/playz_2.jpeg';
import playzImage_3 from './img/playz_3.jpeg';
import vibezImage_1 from './img/vibez_1.jpg';
import vibezImage_2 from './img/vibez_2.jpg';
import vibezImage_3 from './img/vibez_3.jpg';

const AboutUs = ({ onBack, onNavClick }) => {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 400,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    arrows: false,
  };

  const playzImages = [playzImage_1, playzImage_2, playzImage_3];
  const vibezImages = [vibezImage_1, vibezImage_2, vibezImage_3];

  return (
    <div
      className="aboutus-glass rounded-4 border border-warning border-4 shadow-lg py-5 px-3"
      style={{
        background: 'rgba(10,23,78,0.55)',
        backdropFilter: 'blur(12px)',
        minHeight: '80vh',
        margin: '2rem auto',
        maxWidth: 1100,
      }}
    >
      <button className="btn btn-primary mb-4 px-4 py-2 fw-bold rounded-pill shadow" onClick={onBack}>
        ← Back
      </button>
      <h1 className="text-center mb-4 fw-bold" style={{ color: '#ffd180', letterSpacing: '2px' }}>
        About Us
      </h1>
      <p className="text-center mb-3 fs-5" style={{ color: '#e3e3e3' }}>
        Welcome to <span className="text-primary fw-bold">Ennjoy</span> – your go-to platform to break the routine, meet new people, and do what you love.
      </p>
      <p className="text-center mb-5 fs-5" style={{ color: '#e3e3e3' }}>
        We believe life is best lived when you're playing hard and vibing harder. That’s why we created <span className="text-primary fw-bold">Ennjoy</span>, a unique platform to connect through sports and social events.
      </p>

      <div className="row justify-content-center g-4">
        {/* Playz Section */}
        <div className="col-md-6 mb-4">
          <div
            className="p-4 rounded-4 shadow-lg h-100"
            style={{
              background: 'linear-gradient(120deg, #e3f6ff 60%, #b2ebff 100%)',
              border: '2px solid #00bfff22',
              cursor: 'pointer',
              transition: 'transform 0.18s, box-shadow 0.18s',
            }}
            onClick={() => onNavClick && onNavClick('playz')}
            onMouseOver={e => {
              e.currentTarget.style.transform = 'scale(1.03)';
              e.currentTarget.style.boxShadow = '0 8px 32px rgba(0,191,255,0.13)';
            }}
            onMouseOut={e => {
              e.currentTarget.style.transform = 'none';
              e.currentTarget.style.boxShadow = '';
            }}
          >
            <h2 className="fw-bold mb-3" style={{ color: '#0a174e', letterSpacing: '1px' }}>
              <span role="img" aria-label="Playz">🔵</span> Playz – Where the Game Begins
            </h2>
            <Slider {...sliderSettings} className="mb-3">
              {playzImages.map((src, index) => (
                <img
                  key={index}
                  src={src}
                  alt={`Playz ${index + 1}`}
                  className="w-100 rounded-4 shadow"
                  style={{ maxHeight: 260, objectFit: 'cover', border: '3px solid #ffd180' }}
                />
              ))}
            </Slider>
            <p className="fs-6" style={{ color: '#0a174e' }}>
              Discover and book local sports events like cricket, football, and badminton. Whether you want to join existing matches or host your own, <strong>Playz</strong> is your field of dreams.
            </p>
          </div>
        </div>

        {/* Vibez Section */}
        <div className="col-md-6 mb-4">
          <div
            className="p-4 rounded-4 shadow-lg h-100"
            style={{
              background: 'linear-gradient(120deg, #f3e7ff 60%, #e0c3fc 100%)',
              border: '2px solid #ffd18022',
              cursor: 'pointer',
              transition: 'transform 0.18s, box-shadow 0.18s',
            }}
            onClick={() => onNavClick && onNavClick('vibez')}
            onMouseOver={e => {
              e.currentTarget.style.transform = 'scale(1.03)';
              e.currentTarget.style.boxShadow = '0 8px 32px rgba(124,58,237,0.13)';
            }}
            onMouseOut={e => {
              e.currentTarget.style.transform = 'none';
              e.currentTarget.style.boxShadow = '';
            }}
          >
            <h2 className="fw-bold mb-3" style={{ color: '#7c3aed', letterSpacing: '1px' }}>
              <span role="img" aria-label="Vibez">🟣</span> Vibez – Make Life Happening
            </h2>
            <Slider {...sliderSettings} className="mb-3">
              {vibezImages.map((src, index) => (
                <img
                  key={index}
                  src={src}
                  alt={`Vibez ${index + 1}`}
                  className="w-100 rounded-4 shadow"
                  style={{ maxHeight: 260, objectFit: 'cover', border: '3px solid #ffd180' }}
                />
              ))}
            </Slider>
            <p className="fs-6" style={{ color: '#0a174e' }}>
              Connect with new people through curated social experiences. From cozy café meetups to open mic nights, <strong>Vibez</strong> makes meeting strangers exciting and easy.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;