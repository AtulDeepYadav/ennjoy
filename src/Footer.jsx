import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

function Footer({ onNavClick }) {
    return (
        <footer className="bg-dark text-white pt-4 pb-3 mt-auto rounded-4">
            <div className="container">
                <div className="row text-center text-md-start">
                    {/* Company Info */}
                    <div className="col-md-4 mb-3">
                        <h5 className="fw-bold">Ennjoy</h5>
                        <p>Connecting people through games and celebrations. Make every moment count!</p>
                    </div>

                    {/* Quick Links */}
                    <div className="col-md-4 mb-3">
                        <h6 className="fw-bold">Quick Links</h6>
                        <ul className="list-unstyled">
                            <li>
                                <a
                                    href="#"
                                    onClick={(e) => {
                                        e.preventDefault();
                                        onNavClick('termsandconditions');
                                    }}
                                    className="text-white text-decoration-none"
                                >
                                    Terms and Conditions
                                </a>
                            </li>
                                <li>
                                    <a
                                        href="#"
                                        onClick={(e) => {
                                            e.preventDefault();
                                            onNavClick('policy');
                                        }}
                                        className="text-white text-decoration-none"
                                    >
                                        Privacy Policy
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="text-white text-decoration-none">About Ennjoy</a>
                                </li>
                                <li>
                                    <a href="#" className="text-white text-decoration-none">Contact Us</a>
                                </li>
                        </ul>
                    </div>

                    {/* Social Media */}
                    <div className="col-md-4 mb-3">
                        <h6 className="fw-bold">Follow Us</h6>
                        <a href="#" className="text-white me-3"><i className="bi bi-facebook"></i> Facebook</a><br />
                        <a href="#" className="text-white me-3"><i className="bi bi-instagram"></i> Instagram</a><br />
                        <a href="#" className="text-white"><i className="bi bi-twitter-x"></i> Twitter</a>
                    </div>
                </div>

                <div className="text-center pt-3 border-top border-light mt-3">
                    <small>© {new Date().getFullYear()} Ennjoy. All rights reserved.</small>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
