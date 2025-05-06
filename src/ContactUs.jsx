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
    <div className="">
      <div className="bg-dark text-light rounded-4 p-4">
        <div className="row g-0">
          {/* Left Side: Image + Map */}
          <div className="col-md-6 d-flex flex-column">
            <div className="w-100 py-1" style={{ flex: 1 }}>
              <img
                src={contactImg}
                alt="Contact Illustration"
                className="img-fluid rounded-top-4 h-100 w-100"
                style={{ objectFit: "cover" }}
              />
            </div>
            <div className="w-100 py-1" style={{ flex: 1 }}>
              <div className="ratio ratio-4x3 h-100">
                <iframe
                  title="Jaipur Map"
                  src="https://www.google.com/maps?q=Jaipur,+India&output=embed"
                  allowFullScreen
                  loading="lazy"
                  style={{ border: "0", borderBottomLeftRadius: "1rem" }}
                ></iframe>
              </div>
            </div>
          </div>

          {/* Right Side: Form */}
          <div className="col-md-6 p-4">
            <h3 className="mb-4">Contact Us</h3>
            <form ref={form} onSubmit={sendEmail}>
              <div className="mb-3">
                <label htmlFor="fullName" className="form-label">Full Name</label>
                <input type="text" className="form-control" name="fullName" placeholder="Your full name" required />
              </div>

              <div className="mb-3">
                <label htmlFor="email" className="form-label">Email address</label>
                <input type="email" className="form-control" name="email" placeholder="name@example.com" required />
              </div>

              <div className="mb-3">
                <label htmlFor="contactNumber" className="form-label">Contact Number</label>
                <input type="tel" className="form-control" name="contactNumber" placeholder="Enter your phone number" required />
              </div>

              <div className="mb-3">
                <label htmlFor="title" className="form-label">Title</label>
                <input type="text" className="form-control" name="title" placeholder="Enter the subject/title" required />
              </div>

              <div className="mb-3">
                <label htmlFor="message" className="form-label">Message / Data</label>
                <textarea className="form-control" name="message" rows="4" placeholder="Your message here..." required></textarea>
              </div>

              <button type="submit" className="btn btn-primary">Submit</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
