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
    photo: teamImage_1, // Replace with actual photo URL
    linkedin: "https://linkedin.com/in/atuldeepyadav",
    instagram: "https://instagram.com/atuldeepyadav",
    twitter: "https://twitter.com/atuldeepyadav",
  },
  {
    name: "Harshit Agrawal",
    bio: "The cool guy managing your social events",
    photo: teamImage_2,
    linkedin: "https://linkedin.com/in/Kartikgupta",
    instagram: "https://instagram.com/Kartikgupta",
    twitter: "https://twitter.com/Kartikgupta",
  },
  {
    name: "Divesh Singh",
    bio: "The smart man who maintains your funn",
    photo: teamImage_3,
    linkedin: "https://linkedin.com/in/rahulmeena",
    instagram: "https://instagram.com/rahulmeena",
    twitter: "https://twitter.com/rahulmeena",
  },
  {
    name: "Lokesh Agrawal",
    bio: "The genius who takes care for your sports ",
    photo: teamImage_4,
    linkedin: "https://linkedin.com/in/snehaverma",
    instagram: "https://instagram.com/snehaverma",
    twitter: "https://twitter.com/snehaverma",
  },
];

const TeamCards = () => {
  return (
    <div className="bg-dark px-3 py-3 rounded-4">
      <h3 className="mb-4 text-center text-warning">Meet Our Team</h3>
      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4">
        {teamMembers.map((member, index) => (
          <div className="col" key={index}>
            <div className="card h-100 text-center shadow-sm">
              <img
                src={member.photo}
                className="card-img-top rounded-circle mx-auto mt-3"
                alt={member.name}
                style={{ width: "150px", height: "150px", objectFit: "cover" }}
              />
              <div className="card-body">
                <h5 className="card-title">{member.name}</h5>
                <p className="card-text text-muted">{member.bio}</p>
              </div>
              <div className="card-footer bg-white border-0 d-flex justify-content-center gap-3 pb-3">
                <a href={member.linkedin} target="_blank" rel="noreferrer">
                  <FaLinkedin size={20} />
                </a>
                <a href={member.instagram} target="_blank" rel="noreferrer">
                  <FaInstagram size={20} />
                </a>
                <a href={member.twitter} target="_blank" rel="noreferrer">
                  <FaTwitter size={20} />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TeamCards;
