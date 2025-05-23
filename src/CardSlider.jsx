import React from 'react';
import Slider from 'react-slick';


// Import images
import card1 from './img/about-1.jpeg';
import card2 from './img/about-1.jpeg';
import card3 from './img/about-1.jpeg';
import card4 from './img/about-1.jpeg';
import card5 from './img/about-1.jpeg';

const cards = [
  { img: card1, text: 'Box Mania Image - 1' },
  { img: card2, text: 'Box Mania Image - 2' },
  { img: card3, text: 'Box Mania Image - 3' },
  { img: card4, text: 'Box Mania Image - 4' },
  { img: card5, text: 'Box Mania Image - 5' },
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
      breakpoint: 1024, // tablet/laptop
      settings: {
        slidesToShow: 3,
      },
    },
    {
      breakpoint: 768, // tablet
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 480, // mobile
      settings: {
        slidesToShow: 1,
      },
    },
  ],
};

const CardSlider = () => {
  return (
    <div className="container bg-white rounded-4 my-5 py-2">
      <h2 className="text-center mb-4 fw-bold py-2 bg-dark rounded-4 text-white">Box Mania Updates</h2>
      <Slider {...sliderSettings}>
        {cards.map((card, index) => (
          <div key={index} className="px-2">
            <div className="card h-100 shadow-sm border-0">
              <img src={card.img} className="card-img-top rounded-top" alt={`Card ${index + 1}`} />
              <div className="card-body text-center">
                <p className="card-text">{card.text}</p>
              </div>
            </div>
          </div>
        ))}
      </Slider>
      <a href="https://forms.gle/RHBB62YALjhe37A27"><h2 className='text-center mb-4 fw-bold py-4'>Click to view all images</h2></a>
    </div>
  );
};

export default CardSlider;
