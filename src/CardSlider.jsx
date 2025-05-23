import React from 'react';
import Slider from 'react-slick';

// Import images
import card1 from './img/BoxMatch/BCM-1.jpg';
import card2 from './img/BoxMatch/BCM-2.jpg';
import card3 from './img/BoxMatch/playz_1.jpeg';
import card4 from './img/BoxMatch/playz_1.jpeg';
import card5 from './img/BoxMatch/playz_1.jpeg';
// Import video
import video1 from './img/BoxMatch/BCM-3.mp4';

// Move the video card to the first position in the cards array
const cards = [
  { video: video1, text: 'Box Mania Video', type: 'video' }, // Video first
  { img: card1, text: 'Box Mania Image - 1', type: 'image' },
  { img: card2, text: 'Box Mania Image - 2', type: 'image' },
  { img: card3, text: 'Box Mania Image - 3', type: 'image' },
  { img: card4, text: 'Box Mania Image - 4', type: 'image' },
  { img: card5, text: 'Box Mania Image - 5', type: 'image' },
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
    <div className="bg-white rounded-4 my-5 py-2">
      <div className='bg-dark rounded-4'>
        <h2 className="text-center fw-bold rounded-4 text-white">Photo Gallery</h2>
        <h4 className="text-center fw-bold rounded-4 text-warning">Box Cricket Mania 1.0</h4>
      </div>
      <Slider {...sliderSettings}>
        {cards.map((card, index) => (
          <div key={index} className="px-2">
            <div className="card h-100 shadow-sm border-0">
              <div
                style={{
                  width: '100%',
                  height: '220px',
                  overflow: 'hidden',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  background: '#f8f9fa',
                  borderTopLeftRadius: '1rem',
                  borderTopRightRadius: '1rem',
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
                    controls
                    autoPlay
                    loop
                    muted
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                    }}
                  >
                    <source src={card.video} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                )}
              </div>
              <div className="card-body text-center">
                <p className="card-text">{card.text}</p>
              </div>
            </div>
          </div>
        ))}
      </Slider>
      <div className="text-center">
        <a href="https://forms.gle/RHBB62YALjhe37A27">
          <h2 className='text-center mb-4 fw-bold py-4'>Click to view all images</h2>
        </a>
      </div>
    </div>
  );
};

export default CardSlider;
