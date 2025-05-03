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

const AboutUs = () => {
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
    <div className="bg-dark text-light py-5 px-3 rounded-4">
      <h1 className="text-center mb-4 text-warning">About Us</h1>
      <p className="text-center mb-3">
        Welcome to <span className="text-primary fw-bold">Ennjoy</span> – your go-to platform to break the routine, meet new people, and do what you love.
      </p>
      <p className="text-center mb-5">
        We believe life is best lived when you're playing hard and vibing harder. That’s why we created <span className="text-primary fw-bold">Ennjoy</span>, a unique platform to connect through sports and social events.
      </p>

      <div className="row justify-content-center">
        {/* Playz Section */}
        <div className="col-md-6 mb-4">
          <div className="bg-info text-dark p-4 rounded shadow">
            <h2 className="fw-bold mb-3">🔵 Playz – Where the Game Begins</h2>
            <Slider {...sliderSettings} className="mb-3">
              {playzImages.map((src, index) => (
                <img key={index} src={src} alt={`Playz ${index + 1}`} className="w-100 rounded" />
              ))}
            </Slider>
            <p>
              Discover and book local sports events like cricket, football, and badminton. Whether you want to join existing matches or host your own, <strong>Playz</strong> is your field of dreams.
            </p>
          </div>
        </div>

        {/* Vibez Section */}
        <div className="col-md-6 mb-4">
          <div className="bg-info text-dark p-4 rounded shadow">
            <h2 className="fw-bold mb-3">🟣 Vibez – Make Life Happening</h2>
            <Slider {...sliderSettings} className="mb-3">
              {vibezImages.map((src, index) => (
                <img key={index} src={src} alt={`Vibez ${index + 1}`} className="w-100 rounded" />
              ))}
            </Slider>
            <p>
              Connect with new people through curated social experiences. From cozy café meetups to open mic nights, <strong>Vibez</strong> makes meeting strangers exciting and easy.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
