import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import logo from './img/ennjoy.png';

function Header({ onNavClick }) {
  return (
    <div className="bg-dark rounded-4">
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

          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
            <li className="nav-item">
                <button className="nav-link fw-bold text-warning px-4 btn btn-link" onClick={() => onNavClick('about')}>
                  About Us
                </button>
              </li>
              <li className="nav-item">
                <button className="nav-link fw-bold text-warning px-4 btn btn-link" onClick={() => onNavClick('playz')}>
                  Playz
                </button>
              </li>
              <li className="nav-item">
                <button className="nav-link fw-bold text-warning px-4 btn btn-link" onClick={() => onNavClick('vibez')}>
                  Vibez
                </button>
              </li>
              <li className="nav-item">
                <button className="nav-link fw-bold text-warning px-4 btn btn-link" onClick={() => onNavClick('ourteam')}>
                  Our Team
                </button>
              </li>
              <li className="nav-item">
                <button className="nav-link fw-bold text-warning px-4 btn btn-link" onClick={() => onNavClick('contactus')}>
                  Contact Us
                </button>
              </li>
              <li className="nav-item">
                <button className="btn btn-primary px-4 fw-bold" onClick={() => onNavClick('login')}>
                  Get Started
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Header;
