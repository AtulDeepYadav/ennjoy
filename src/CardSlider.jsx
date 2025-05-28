import React from 'react';
import Slider from 'react-slick';

// Import images
import card1 from './img/BoxMatch/BCM-1.jpg';
// import card2 from './img/BoxMatch/BCM-2.jpg';
import card3 from '/img/BoxMatch/Messi.jpg';
import card4 from '/img/BoxMatch/founderswag.jpg';
// import card5 from './img/BoxMatch/playz_1.jpeg';
// Import video
import video1 from './img/BoxMatch/BCM-3.mp4';
import video2 from './img/BoxMatch/BCM-4.mp4';
import video3 from './img/BoxMatch/BCM-5.mp4';

// Move the video card to the first position in the cards array
const cards = [
  { video: video1, text: 'Winners: Boom Boom Bros', type: 'video' }, // Video first
  { video: video2, text: 'What A Shottt!', type: 'video' },
  { video: video3, text: 'The chaser', type: 'video' },
  { img: card1, text: 'All Set to Go', type: 'image' },
  { img: 'https://drive.google.com/thumbnail?id=1sHLfOe1RUWWv2otNhM6tLQFV7ZQ4qsX7&sz=w1000', text: 'Audience', type: 'image' },
  { img: 'https://drive.google.com/thumbnail?id=1JavGK-qZjOisA1brtZGsMKmVDbJcd5E3&sz=w1000', text: 'Certificate Distribution', type: 'image' },
  { img: 'https://drive.google.com/thumbnail?id=1QbUFJtNKZ66NpdhZv8xXOS8BZ6hZKKLj&sz=w1000', text: 'The Toss', type: 'image' },
  { img: card3, text: 'Messi of Cricket', type: 'image' },
  { img: card4, text: "Founders' Swag", type: 'image' },
  ];

const sliderSettings = {
  dots: true,
  infinite: true,
  speed: 500,
  autoplay: true,
  autoplaySpeed: 2500,
  slidesToShow: 4,
  slidesToScroll: 1,
  swipeToSlide: true,
  responsive: [
    {
      breakpoint: 1024,
      settings: { slidesToShow: 3 },
    },
    {
      breakpoint: 768,
      settings: { slidesToShow: 2 },
    },
    {
      breakpoint: 480,
      settings: { slidesToShow: 1 },
    },
  ],
};

const CardSlider = () => {
  return (
    <div
      className="rounded-4 my-5 py-4 px-2"
      style={{
        background: 'rgba(10,23,78,0.18)',
        backdropFilter: 'blur(8px)',
        boxShadow: '0 8px 32px 0 rgba(31,38,135,0.10)',
      }}
    >
      <div
        className="rounded-4 mb-4 py-3"
        style={{
          background: 'linear-gradient(90deg, #0a174e 60%, #00bfff 100%)',
          boxShadow: '0 2px 12px #00bfff22',
        }}
      >
        <h2
          className="text-center fw-bold mb-1"
          style={{
            color: '#ffd180',
            fontFamily: "'Poppins', 'Inter', Arial, sans-serif",
            letterSpacing: '1px',
            fontSize: '2rem',
            textShadow: '0 2px 12px #0a174e33',
          }}
        >
          Photo Gallery
        </h2>
        <h4
          className="text-center fw-bold"
          style={{
            color: '#fff',
            fontFamily: "'Poppins', 'Inter', Arial, sans-serif",
            letterSpacing: '1px',
            fontSize: '1.2rem',
          }}
        >
          Box Cricket Mania 1.0
        </h4>
      </div>
      <Slider {...sliderSettings}>
        {cards.map((card, index) => (
          <div key={index} className="px-2">
            <div
              className="card h-100 border-0 shadow-lg"
              style={{
                borderRadius: '1.5rem',
                overflow: 'hidden',
                transition: 'transform 0.18s, box-shadow 0.18s',
                background: 'linear-gradient(120deg, #e3f6ff 60%, #b2ebff 100%)',
                boxShadow: '0 2px 16px #00bfff22',
              }}
              onMouseOver={e => {
                e.currentTarget.style.transform = 'scale(1.04)';
                e.currentTarget.style.boxShadow = '0 8px 32px #00bfff33';
              }}
              onMouseOut={e => {
                e.currentTarget.style.transform = 'none';
                e.currentTarget.style.boxShadow = '0 2px 16px #00bfff22';
              }}
            >
              <div
                style={{
                  width: '100%',
                  height: '220px',
                  overflow: 'hidden',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  background: 'rgba(255,255,255,0.15)',
                }}
              >
                {card.type === 'image' ? (
                  <img
                    src={card.img}
                    className="card-img-top"
                    alt={`Card ${index + 1}`}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                    }}
                  />
                ) : (
                  <video
                    className="card-img-top"
                    autoPlay
                    loop
                    muted
                    playsInline
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      borderRadius: 0,
                    }}
                  >
                    <source src={card.video} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                )}
              </div>
              <div className="card-body text-center" style={{ background: 'transparent' }}>
                <p
                  className="card-text fw-bold"
                  style={{
                    color: '#0a174e',
                    fontFamily: "'Poppins', 'Inter', Arial, sans-serif",
                    fontSize: '1.05rem',
                    letterSpacing: '0.5px',
                  }}
                >
                  {card.text}
                </p>
              </div>
            </div>
          </div>
        ))}
      </Slider>
      <div className="text-center mt-4">
        <a
          href="https://forms.gle/RHBB62YALjhe37A27"
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-warning px-5 py-2 fw-bold rounded-pill shadow"
          style={{
            fontSize: '1.2rem',
            letterSpacing: '1px',
            color: '#0a174e',
            background: 'linear-gradient(90deg, #ffd180 60%, #fffde4 100%)',
            border: 'none',
            boxShadow: '0 2px 12px #ffd18055',
            transition: 'background 0.18s, color 0.18s, transform 0.18s',
          }}
          onMouseOver={e => {
            e.currentTarget.style.background = '#fffde4';
            e.currentTarget.style.color = '#00bfff';
            e.currentTarget.style.transform = 'scale(1.05)';
          }}
          onMouseOut={e => {
            e.currentTarget.style.background = 'linear-gradient(90deg, #ffd180 60%, #fffde4 100%)';
            e.currentTarget.style.color = '#0a174e';
            e.currentTarget.style.transform = 'none';
          }}
        >
          View All Images
        </a>
      </div>
    </div>
  );
};

export default CardSlider;
