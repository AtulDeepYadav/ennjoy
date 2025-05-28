import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import contactImg from './img/contact-1.jpg';

const ContactUs = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      'service_3v8dx2m',         // ✅ Your EmailJS Service ID
      'template_pxm4kz8',        // ✅ Your EmailJS Template ID
      form.current,
      'yRVaDRsne2dV00jzd'        // ✅ Your EmailJS Public Key
    )
    .then((result) => {
      console.log('Email sent successfully:', result.text);
      alert('Message sent successfully!');
    }, (error) => {
      console.log('Email sending error:', error.text);
      alert('Failed to send message. Please try again.');
    });

    e.target.reset(); // Reset form after submission
  };

  return (
    <div
      className="border border-warning border-4 rounded-4 p-0 shadow-lg"
      style={{
        background: 'rgba(10,23,78,0.55)',
        backdropFilter: 'blur(12px)',
        fontFamily: "'Poppins', 'Inter', Arial, sans-serif",
        margin: '2rem auto',
        maxWidth: 1100,
      }}
    >
      <div className="row g-0">
        {/* Left Side: Image + Map */}
        <div className="col-md-6 d-flex flex-column">
          <div className="w-100" style={{ flex: 1 }}>
            <img
              src={contactImg}
              alt="Contact Illustration"
              className="img-fluid rounded-top-4 h-100 w-100"
              style={{
                objectFit: "cover",
                minHeight: 220,
                borderTopLeftRadius: '1.5rem',
                borderTopRightRadius: '1.5rem',
                boxShadow: '0 4px 24px #ffd18055',
              }}
            />
          </div>
          <div className="w-100" style={{ flex: 1 }}>
            <div className="ratio ratio-4x3 h-100">
              <iframe
                title="Jaipur Map"
                src="https://www.google.com/maps?q=Jaipur,+India&output=embed"
                allowFullScreen
                loading="lazy"
                style={{
                  border: "0",
                  borderBottomLeftRadius: "1.5rem",
                  minHeight: 180,
                  boxShadow: '0 4px 24px #00bfff33',
                }}
              ></iframe>
            </div>
          </div>
        </div>

        {/* Right Side: Form */}
        <div className="col-md-6 p-4 d-flex flex-column justify-content-center" style={{ background: 'rgba(255,255,255,0.08)', borderTopRightRadius: '1.5rem', borderBottomRightRadius: '1.5rem' }}>
          <h3 className="mb-4 fw-bold text-center" style={{ color: '#ffd180', letterSpacing: '1px' }}>
            Contact Us
          </h3>
          <form ref={form} onSubmit={sendEmail}>
            <div className="mb-3">
              <label htmlFor="fullName" className="form-label fw-semibold" style={{ color: '#00bfff' }}>Full Name</label>
              <input type="text" className="form-control rounded-pill shadow-sm" name="fullName" placeholder="Your full name" required />
            </div>

            <div className="mb-3">
              <label htmlFor="email" className="form-label fw-semibold" style={{ color: '#00bfff' }}>Email address</label>
              <input type="email" className="form-control rounded-pill shadow-sm" name="email" placeholder="name@example.com" required />
            </div>

            <div className="mb-3">
              <label htmlFor="contactNumber" className="form-label fw-semibold" style={{ color: '#00bfff' }}>Contact Number</label>
              <input type="tel" className="form-control rounded-pill shadow-sm" name="contactNumber" placeholder="Enter your phone number" required />
            </div>

            <div className="mb-3">
              <label htmlFor="title" className="form-label fw-semibold" style={{ color: '#00bfff' }}>Title</label>
              <input type="text" className="form-control rounded-pill shadow-sm" name="title" placeholder="Enter the subject/title" required />
            </div>

            <div className="mb-3">
              <label htmlFor="message" className="form-label fw-semibold" style={{ color: '#00bfff' }}>Message / Data</label>
              <textarea className="form-control rounded-4 shadow-sm" name="message" rows="4" placeholder="Your message here..." required></textarea>
            </div>

            <div className="text-center">
              <button
                type="submit"
                className="btn btn-warning px-5 py-2 fw-bold rounded-pill shadow"
                style={{
                  fontSize: '1.15rem',
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
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* Instagram Section */}
      <div className="container mt-4">
        <h2 className="py-3 text-center fw-bold" style={{ color: '#ffd180', letterSpacing: '1px' }}>
          Follow us on Instagram:{" "}
          <a
            href="https://www.instagram.com/ennjoywithus/"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: '#00bfff', textDecoration: 'underline', fontWeight: 700 }}
          >
            @ennjoywithus
          </a>
        </h2>
        <iframe
          src="https://snapwidget.com/embed/1096455"
          className="snapwidget-widget w-100 rounded-4"
          allowTransparency="true"
          frameBorder="0"
          scrolling="Yes"
          style={{
            border: 'none',
            overflow: 'hidden',
            height: '300px',
            boxShadow: '0 4px 24px #ffd18055',
          }}
          title="Follow us on Instagram for all the latest updates"
        ></iframe>
      </div>
    </div>
  );
};

export default ContactUs;
