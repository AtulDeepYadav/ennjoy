import React from "react";
import contactImg from './img/contact-1.jpg'



const ContactUs = () => {
  return (
    <div className="">
      <div className="bg-dark text-light rounded-4 p-4">
        <div className="row g-0">
          {/* Left Side: Image + Map */}
          <div className="col-md-6 d-flex flex-column">
            {/* Image */}
            <div className="w-100 py-1" style={{ flex: 1 }}>
              <img
                src={contactImg}
                alt="Contact Illustration"
                className="img-fluid rounded-top-4 h-100 w-100"
                style={{ objectFit: "cover" }}
              />
            </div>

            {/* Map */}
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
            <form>
              <div className="mb-3">
                <label htmlFor="fullName" className="form-label">Full Name</label>
                <input type="text" className="form-control" id="fullName" placeholder="Your full name" />
              </div>

              <div className="mb-3">
                <label htmlFor="email" className="form-label">Email address</label>
                <input type="email" className="form-control" id="email" placeholder="name@example.com" />
              </div>

              <div className="mb-3">
                <label htmlFor="contactNumber" className="form-label">Contact Number</label>
                <input type="tel" className="form-control" id="contactNumber" placeholder="Enter your phone number" />
              </div>

              <div className="mb-3">
                <label htmlFor="message" className="form-label">Message / Data</label>
                <textarea className="form-control" id="message" rows="4" placeholder="Your message here..."></textarea>
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
