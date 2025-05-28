import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

function Footer({ onNavClick }) {
    return (
        <footer
            className="bg-dark text-white pt-4 pb-3 mt-auto rounded-4 border border-warning border-4"
            style={{
                background: 'linear-gradient(120deg, #0a174e 60%, #00bfff 100%)',
                boxShadow: '0 4px 32px 0 rgba(0,191,255,0.10)',
                borderTopLeftRadius: '2rem',
                borderTopRightRadius: '2rem',
                borderBottomLeftRadius: '1rem',
                borderBottomRightRadius: '1rem',
            }}
        >
            <div className="container">
                <div className="row text-center text-md-start align-items-center">
                    {/* Company Info */}
                    <div className="col-md-4 mb-4 mb-md-0">
                        <h4 className="fw-bold mb-2" style={{ letterSpacing: '2px', color: '#ffd180' }}>Ennjoy</h4>
                        <p style={{ fontSize: '1.05rem', color: '#e3e3e3' }}>
                            Connecting people through <span style={{ color: '#ffd180' }}>games</span> and <span style={{ color: '#ffd180' }}>celebrations</span>.<br />
                            <span style={{ color: '#fff' }}>Make every moment count!</span>
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div className="col-md-4 mb-4 mb-md-0">
                        <h6 className="fw-bold mb-3" style={{ color: '#ffd180' }}>Quick Links</h6>
                        <ul className="list-unstyled">
                            <li className="mb-2">
                                <a
                                    href="/termsandconditions"
                                    className="footer-link"
                                    onClick={e => {
                                        e.preventDefault();
                                        onNavClick && onNavClick('termsandconditions');
                                    }}
                                >
                                    Terms and Conditions
                                </a>
                            </li>
                            <li className="mb-2">
                                <a
                                    href="/policy"
                                    className="footer-link"
                                    onClick={e => {
                                        e.preventDefault();
                                        onNavClick && onNavClick('policy');
                                    }}
                                >
                                    Privacy Policy
                                </a>
                            </li>
                            <li className="mb-2">
                                <a
                                    href="/aboutus"
                                    className="footer-link"
                                    onClick={e => {
                                        e.preventDefault();
                                        onNavClick && onNavClick('aboutus');
                                    }}
                                >
                                    About Ennjoy
                                </a>
                            </li>
                            <li>
                                <a
                                    href="/contactus"
                                    className="footer-link"
                                    onClick={e => {
                                        e.preventDefault();
                                        onNavClick && onNavClick('contactus');
                                    }}
                                >
                                    Contact Us
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Social Media */}
                    <div className="col-md-4 text-md-end text-center">
                        <h6 className="fw-bold mb-3" style={{ color: '#ffd180' }}>Follow Us</h6>
                        <a
                            href="https://www.linkedin.com/company/ennjoy/about/"
                            className="footer-social-link me-3"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <i className="bi bi-linkedin"></i>
                        </a>
                        <a
                            href="https://www.instagram.com/ennjoywithus/"
                            className="footer-social-link me-3"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <i className="bi bi-instagram"></i>
                        </a>
                        <a
                            href="https://x.com/Ennjoywithus"
                            className="footer-social-link"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <i className="bi bi-twitter-x"></i>
                        </a>
                    </div>
                </div>

                <div className="text-center pt-3 border-top border-light mt-4"></div>
                    <small style={{ color: '#ffd180', letterSpacing: '1px' }}>
                        © {new Date().getFullYear()} Ennjoy. All rights reserved.
                    </small>
                </div>
        </footer>
    );
}

export default Footer;
