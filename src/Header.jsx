import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import logo from './img/ennjoy.png';
import maleImg from './img/male_avatar.png';
import femaleImg from './img/female_avatar.png';

import { useNavigate } from 'react-router-dom';

function Header({ user, onSignOut, onNavClick }) {
  const navigate = useNavigate();

  const profileImg =
    user && user.gender ? (user.gender === 'female' ? femaleImg : maleImg) : maleImg;

  return (
    <div
      className="rounded-4 border border-warning border-4 shadow-lg"
      style={{
        background: 'linear-gradient(120deg, #0a174e 60%, #00bfff 100%)',
        boxShadow: '0 4px 32px 0 rgba(0,191,255,0.10)',
        borderTopLeftRadius: '2rem',
        borderTopRightRadius: '2rem',
        borderBottomLeftRadius: '1rem',
        borderBottomRightRadius: '1rem',
        marginBottom: '1.5rem',
      }}
    >
      <nav className="navbar navbar-expand-lg navbar-dark py-2">
        <div className="container-fluid">
          <a href="/" className="d-flex align-items-center">
            <img
              src={logo}
              alt="Ennjoy logo"
              className="img-fluid py-2"
              height={60}
              width={120}
              style={{
                filter: 'drop-shadow(0 2px 12px rgba(0,191,255,0.18))',
                borderRadius: '1rem',
                background: 'rgba(255,255,255,0.08)',
                padding: '0.25rem 0.75rem',
              }}
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
              {[
                { key: 'home', label: 'Home' },
                // { key: 'aboutus', label: 'About Us' }, // Uncomment if needed
                { key: 'playz', label: 'Playz' },
                { key: 'vibez', label: 'Vibez' },
                { key: 'ourteam', label: 'Our Team' },
                { key: 'contactus', label: 'Contact Us' },
              ].map(tab => (
                <li className="nav-item mx-2" key={tab.key}>
                  <button
                    className="nav-link fw-bold px-4 py-2 btn btn-link aesthetic-tab"
                    style={{
                      color: '#fff',
                      background: 'transparent',
                      border: 'none',
                      borderRadius: '2rem',
                      fontSize: '1.1rem',
                      fontWeight: 600,
                      letterSpacing: '1px',
                      transition: 'background 0.2s, color 0.2s, transform 0.18s',
                    }}
                    onClick={() => onNavClick(tab.key)}
                    onMouseOver={e => {
                      e.currentTarget.style.background = 'rgba(255,255,255,0.18)';
                      e.currentTarget.style.color = '#0a174e';
                      e.currentTarget.style.transform = 'scale(1.07)';
                    }}
                    onMouseOut={e => {
                      e.currentTarget.style.background = 'transparent';
                      e.currentTarget.style.color = '#fff';
                      e.currentTarget.style.transform = 'scale(1)';
                    }}
                  >
                    {tab.label}
                  </button>
                </li>
              ))}

              {user ? (
                <>
                  <li className="nav-item d-flex align-items-center px-3">
                    <img
                      src={profileImg}
                      alt="Profile"
                      className="rounded-circle border"
                      width="40"
                      height="40"
                      style={{
                        objectFit: 'cover',
                        border: '2px solid #ffd180',
                        boxShadow: '0 2px 8px rgba(255,209,128,0.18)',
                        transition: 'transform 0.18s, box-shadow 0.18s',
                        cursor: 'pointer',
                      }}
                      onMouseOver={e => {
                        e.currentTarget.style.transform = 'scale(1.08)';
                        e.currentTarget.style.boxShadow = '0 4px 16px #ffd18088';
                      }}
                      onMouseOut={e => {
                        e.currentTarget.style.transform = 'scale(1)';
                        e.currentTarget.style.boxShadow = '0 2px 8px rgba(255,209,128,0.18)';
                      }}
                    />
                  </li>
                  <li className="nav-item">
                    <button
                      className="btn btn-danger px-3 fw-bold ms-2"
                      style={{
                        borderRadius: '2rem',
                        fontWeight: 600,
                        letterSpacing: '1px',
                        boxShadow: '0 2px 8px rgba(255,0,0,0.08)',
                        transition: 'background 0.2s, color 0.2s, transform 0.18s',
                      }}
                      onMouseOver={e => {
                        e.currentTarget.style.background = '#b71c1c';
                        e.currentTarget.style.transform = 'scale(1.07)';
                      }}
                      onMouseOut={e => {
                        e.currentTarget.style.background = '';
                        e.currentTarget.style.transform = 'scale(1)';
                      }}
                      onClick={onSignOut}
                    >
                      Log Out
                    </button>
                  </li>
                </>
              ) : (
                <li className="nav-item">
                  <button
                    className="btn btn-primary px-4 fw-bold ms-2"
                    style={{
                      borderRadius: '2rem',
                      fontWeight: 600,
                      letterSpacing: '1px',
                      boxShadow: '0 2px 8px rgba(0,191,255,0.10)',
                      transition: 'background 0.2s, color 0.2s, transform 0.18s',
                    }}
                    onMouseOver={e => {
                      e.currentTarget.style.background = '#ffd180';
                      e.currentTarget.style.color = '#0a174e';
                      e.currentTarget.style.transform = 'scale(1.07)';
                    }}
                    onMouseOut={e => {
                      e.currentTarget.style.background = '';
                      e.currentTarget.style.color = '';
                      e.currentTarget.style.transform = 'scale(1)';
                    }}
                    onClick={() => onNavClick('login')}
                  >
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
