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
    <div className="bg-dark px-3 py-3 rounded-4 border border-warning border-4 rounded-4">
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
