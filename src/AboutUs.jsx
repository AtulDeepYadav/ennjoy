import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const AboutUs = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
  };

  const playzImages = [
    'src/img/playz_1.jpeg',
    'src/img/playz_2.jpeg',
    'src/img/playz_3.jpeg',
  ];

  const vibezImages = [
    'src/img/vibez_1.jpg',
    'src/img/vibez_2.jpg',
    'src/img/vibez_3.jpg',
  ];

  return (
    <div className="rounded-4 bg-white">
      <h1 className="text-center mb-5">About Us</h1>
      <p className="text-center mb-5">
        Welcome to <span className="font-weight-bold">Ennjoy</span> – your go-to platform to break the routine, meet new people, and do what you love.
      </p>
      <p className="text-center mb-5">
        We believe life is best lived when you're playing hard and vibing harder. That’s why we created <span className="font-weight-bold">Ennjoy</span>, a unique platform designed to connect people through shared interests in sports and social events.
      </p>
      
      <div className="row">
        {/* Playz Section */}
        <div className="col-md-6 mb-4">
          <div className="bg-light p-4 rounded shadow">
            <h2 className="text-primary">🔵 Playz – Where the Game Begins</h2>
            <p>
              Discover and book local sports events like cricket, football, and badminton. Whether you want to join existing matches or host your own, <span className="font-weight-bold">Playz</span> is your field of dreams.
            </p>
            <div className="w-100">
              <Slider {...settings}>
                {playzImages.map((src, index) => (
                  <img key={index} src={src} alt={`Playz ${index + 1}`} className="w-100 h-100 object-cover" />
                ))}
              </Slider>
            </div>
          </div>
        </div>

        {/* Vibez Section */}
        <div className="col-md-6 mb-4">
          <div className="bg-light p-4 rounded shadow">
            <h2 className="text-info">🟣 Vibez – Make Life Happening</h2>
            <p>
              Connect with new people through curated social experiences. From cozy café meetups to open mic nights, <span className="font-weight-bold">Vibez</span> makes meeting strangers exciting and easy.
            </p>
            <div className="w-100">
              <Slider {...settings}>
                {vibezImages.map((src, index) => (
                  <img key={index} src={src} alt={`Vibez ${index + 1}`} className="w-100 h-100 object-cover" />
                ))}
              </Slider>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
