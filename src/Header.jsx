import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import logo from './img/ennjoy.png';
import maleImg from './img/male_avatar.png';
import femaleImg from './img/female_avatar.png';

import { useNavigate } from 'react-router-dom';

function Header({ user, onSignOut, onNavClick }) {
  const navigate = useNavigate();

  // Log user object for debugging
  console.log("User Object: ", user);

  // Check if user and user.gender are defined, otherwise default to male
  const profileImg =
    user && user.gender ? (user.gender === 'female' ? femaleImg : maleImg) : maleImg;

  return (
    <div className="bg-dark rounded-4 border border-warning border-4">
      <nav className="navbar navbar-expand-lg navbar-dark">
        <div className="container-fluid">
          <a href="/">
            <img
              src={logo}
              alt="Ennjoy logo"
              className="img-fluid py-2"
              height={300}
              width={150}
            />
          </a>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto align-items-center">
              <li className="nav-item">
                <button className="nav-link fw-bold text-warning px-2 btn btn-link" onClick={() => onNavClick('home')}>
                  Home
                </button>
              </li>
              <li className="nav-item">
                <button className="nav-link fw-bold text-warning px-2 btn btn-link" onClick={() => onNavClick('aboutus')}>
                  About Us
                </button>
              </li>
              <li className="nav-item">
                <button className="nav-link fw-bold text-warning px-2 btn btn-link" onClick={() => onNavClick('playz')}>
                  Playz
                </button>
              </li>
              <li className="nav-item">
                <button className="nav-link fw-bold text-warning px-2 btn btn-link" onClick={() => onNavClick('vibez')}>
                  Vibez
                </button>
              </li>
              <li className="nav-item">
                <button className="nav-link fw-bold text-warning px-2 btn btn-link" onClick={() => onNavClick('ourteam')}>
                  Our Team
                </button>
              </li>
              <li className="nav-item">
                <button className="nav-link fw-bold text-warning px-2 btn btn-link" onClick={() => onNavClick('contactus')}>
                  Contact Us
                </button>
              </li>

              {user ? (
                <>
                  <li className="nav-item d-flex align-items-center px-3">
                    <img
                      src={profileImg}
                      alt="Profile"
                      className="rounded-circle border"
                      width="40"
                      height="40"
                      style={{ objectFit: 'cover' }}
                    />
                  </li>
                  <li className="nav-item">
                    <button className="btn btn-danger px-3 fw-bold ms-2" onClick={onSignOut}>
                      Log Out
                    </button>
                  </li>
                </>
              ) : (
                <li className="nav-item">
                  <button className="btn btn-primary px-4 fw-bold ms-2" onClick={() => onNavClick('login')}>
                    Get Started
                  </button>
                </li>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Header;
