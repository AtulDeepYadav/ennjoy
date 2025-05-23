import React from "react";
import { FaLinkedin, FaInstagram, FaTwitter } from "react-icons/fa";
import teamImage_1 from './img/team-1.jpg';
import teamImage_2 from './img/team-2.png';
import teamImage_3 from './img/team-3.jpg';
import teamImage_4 from './img/team-4.jpg';

const teamMembers = [
  {
    name: "Atul Deep Yadav",
    bio: "You can call me ADY and I manage the technical stuffs",
    photo: teamImage_1,
    linkedin: "https://linkedin.com/in/atuldeepyadav",
    instagram: "https://instagram.com/atuldeepyadav",
    twitter: "https://twitter.com/atuldeepyadav",
  },
  {
    name: "Harshit Agrawal",
    bio: "The guy next door handling the events",
    photo: teamImage_2,
    linkedin: "https://www.linkedin.com/in/cma-harshit-aggarwal?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    instagram: "https://www.instagram.com/harshitjii___?igsh=MXV3MGszajR6djhoNQ==",
    twitter: "https://x.com/harshit563?t=bmPRw2TtyDWqSJ-Bsbk_7g&s=09",
  },
  {
    name: "Divesh Singh",
    bio: "The smart man who maintains your funn",
    photo: teamImage_3,
    linkedin: "https://www.linkedin.com/in/divesh-kumar-30a545202?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
    instagram: "https://www.instagram.com/singhdiveshh.k?igsh=N3ozeHVud3Z4ZDV2&utm_source=qr",
    twitter: "https://x.com/itssingh_divesh?s=21",
  },
  {
    name: "Lokesh Agrawal",
    bio: "The genius who takes care for your sports ",
    photo: teamImage_4,
    linkedin: "https://www.linkedin.com/in/lokesh-agarwal-974a7320b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    instagram: "https://www.instagram.com/lokesh_0018?igsh=eTV1eHdsZmttNDZm",
    twitter: "https://x.com/Lokesh_ag1806?t=ghMzvYm_uiKEFQ5hVeB0PQ&s=09",
  },
];

const TeamCards = () => {
  return (
    <div
      className="px-3 py-4 rounded-4"
      style={{
        background: 'rgba(10,23,78,0.10)',
        minHeight: '100vh',
        fontFamily: "'Poppins', 'Inter', Arial, sans-serif",
      }}
    >
      <div
        className="mx-auto mb-5"
        style={{
          maxWidth: 1100,
          background: 'rgba(255,255,255,0.90)',
          borderRadius: '2rem',
          border: '2.5px solid',
          boxShadow: '0 8px 32px 0 rgba(31,38,135,0.18), 0 1.5px 8px #ffd18033 inset',
          padding: '2.5rem 2rem',
        }}
      >
        <h3 className="mb-2 text-center fw-bold" style={{ color: '#000', letterSpacing: '2px', fontSize: '2.2rem', textShadow: '0 2px 12px #0a174e33' }}>
          Meet Our Team
        </h3>
        <div
          style={{
            width: 60,
            height: 5,
            borderRadius: 3,
            background: 'linear-gradient(90deg, #ffd180 10%, #00bfff 90%)',
            margin: '0 auto 2.5rem auto',
          }}
        />
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4">
          {teamMembers.map((member, index) => (
            <div className="col" key={index}>
              <div
                className="card h-100 text-center shadow-lg border-0"
                style={{
                  background: 'rgba(255,255,255,0.65)',
                  borderRadius: '1.5rem',
                  boxShadow: '0 4px 24px #00bfff22, 0 1.5px 8px #ffd18033 inset',
                  transition: 'transform 0.18s, box-shadow 0.18s',
                  animation: 'fadeInUp 0.7s cubic-bezier(.39,.575,.56,1) both',
                }}
                onMouseOver={e => {
                  e.currentTarget.style.transform = 'scale(1.045)';
                  e.currentTarget.style.boxShadow = '0 8px 32px #00bfff33, 0 1.5px 8px #ffd18033 inset';
                }}
                onMouseOut={e => {
                  e.currentTarget.style.transform = 'none';
                  e.currentTarget.style.boxShadow = '0 4px 24px #00bfff22, 0 1.5px 8px #ffd18033 inset';
                }}
              >
                <div style={{ marginTop: '1.5rem', marginBottom: '0.5rem' }}>
                  <div
                    style={{
                      width: 130,
                      height: 130,
                      margin: '0 auto',
                      borderRadius: '50%',
                      background: 'linear-gradient(135deg, #ffd180 40%, #00bfff 100%)',
                      padding: 4,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      boxShadow: '0 2px 12px #ffd18044',
                    }}
                  >
                    <img
                      src={member.photo}
                      className="rounded-circle shadow"
                      alt={member.name}
                      style={{
                        width: "120px",
                        height: "120px",
                        objectFit: "cover",
                        border: "4px solid #fff",
                        background: "#fff",
                      }}
                    />
                  </div>
                </div>
                <div className="card-body">
                  <h5 className="card-title fw-bold mb-1" style={{ color: '#0a174e', fontSize: '1.18rem' }}>
                    {member.name}
                  </h5>
                  <div
                    style={{
                      width: 40,
                      height: 4,
                      margin: '0 auto 12px auto',
                      borderRadius: 2,
                      background: 'linear-gradient(90deg, #ffd180 10%, #00bfff 90%)',
                    }}
                  />
                  <p className="card-text text-muted" style={{ fontSize: '1rem', minHeight: 48 }}>{member.bio}</p>
                </div>
                <div className="card-footer bg-transparent border-0 d-flex justify-content-center gap-3 pb-3">
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    style={{
                      color: '#0a66c2',
                      transition: 'color 0.18s, transform 0.18s, box-shadow 0.18s',
                      borderRadius: '50%',
                      padding: 6,
                    }}
                    onMouseOver={e => {
                      e.currentTarget.style.color = '#005983';
                      e.currentTarget.style.transform = 'scale(1.18)';
                      e.currentTarget.style.boxShadow = '0 2px 8px #0a66c244';
                    }}
                    onMouseOut={e => {
                      e.currentTarget.style.color = '#0a66c2';
                      e.currentTarget.style.transform = 'none';
                      e.currentTarget.style.boxShadow = 'none';
                    }}
                  >
                    <FaLinkedin size={22} />
                  </a>
                  <a
                    href={member.instagram}
                    target="_blank"
                    rel="noreferrer"
                    style={{
                      color: '#e1306c',
                      transition: 'color 0.18s, transform 0.18s, box-shadow 0.18s',
                      borderRadius: '50%',
                      padding: 6,
                    }}
                    onMouseOver={e => {
                      e.currentTarget.style.color = '#b9134f';
                      e.currentTarget.style.transform = 'scale(1.18)';
                      e.currentTarget.style.boxShadow = '0 2px 8px #e1306c44';
                    }}
                    onMouseOut={e => {
                      e.currentTarget.style.color = '#e1306c';
                      e.currentTarget.style.transform = 'none';
                      e.currentTarget.style.boxShadow = 'none';
                    }}
                  >
                    <FaInstagram size={22} />
                  </a>
                  <a
                    href={member.twitter}
                    target="_blank"
                    rel="noreferrer"
                    style={{
                      color: '#1da1f2',
                      transition: 'color 0.18s, transform 0.18s, box-shadow 0.18s',
                      borderRadius: '50%',
                      padding: 6,
                    }}
                    onMouseOver={e => {
                      e.currentTarget.style.color = '#0a174e';
                      e.currentTarget.style.transform = 'scale(1.18)';
                      e.currentTarget.style.boxShadow = '0 2px 8px #1da1f244';
                    }}
                    onMouseOut={e => {
                      e.currentTarget.style.color = '#1da1f2';
                      e.currentTarget.style.transform = 'none';
                      e.currentTarget.style.boxShadow = 'none';
                    }}
                  >
                    <FaTwitter size={22} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Fade-in animation keyframes */}
      <style>
        {`
          @keyframes fadeInUp {
            0% {
              opacity: 0;
              transform: translateY(40px);
            }
            100% {
              opacity: 1;
              transform: translateY(0);
            }
          }
        `}
      </style>
    </div>
  );
};

export default TeamCards;
