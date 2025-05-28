import React, { useState } from 'react';
import {
  GoogleAuthProvider,
  signInWithPopup,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from 'firebase/auth';
import { auth, db } from './firebaseConfig';
import { doc, setDoc } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';
import logo from './img/Icon.png'; // Adjust the path to your logo

const Login = ({ onLoginSuccess }) => {
  const [isSignUp, setIsSignUp] = useState(false);
  const [form, setForm] = useState({
    email: '',
    password: '',
    confirmPassword: '',
    fullName: '',
    dob: '',
    gender: '',
    termsAgreed: false,
    countryCode: '+91',
    phoneNumber: '',
  });
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const validateForm = () => {
    if (!form.email || !form.password) return 'Email and Password are required';

    if (isSignUp) {
      if (!form.fullName || !form.dob || !form.gender)
        return 'Full Name, Date of Birth, and Gender are required';
      if (!form.termsAgreed) return 'You must agree to the terms and conditions';
      if (form.password.length < 6) return 'Password must be at least 6 characters';
      if (form.password !== form.confirmPassword) return 'Passwords do not match';
      if (!form.phoneNumber) return 'Phone number is required';
    }

    return '';
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    const validationMessage = validateForm();
    if (validationMessage) {
      setError(validationMessage);
      return;
    }

    try {
      if (isSignUp) {
        const userCred = await createUserWithEmailAndPassword(auth, form.email, form.password);
        await setDoc(doc(db, 'users', userCred.user.uid), {
          fullName: form.fullName,
          email: form.email,
          dob: form.dob,
          gender: form.gender,
          phoneNumber: `${form.countryCode}${form.phoneNumber}`,
        });
        alert('Signup successful! You can now log in.');
        setIsSignUp(false);
        setForm({
          email: '',
          password: '',
          confirmPassword: '',
          fullName: '',
          dob: '',
          gender: '',
          termsAgreed: false,
          phoneNumber: '',
          countryCode: '+91',
        });
      } else {
        await signInWithEmailAndPassword(auth, form.email, form.password);
        navigate('/'); // This already routes to home page after login
        if (onLoginSuccess) onLoginSuccess();
      }
    } catch (err) {
      if (err.code === 'auth/user-not-found') setError('User does not exist');
      else if (err.code === 'auth/wrong-password') setError('Incorrect password');
      else if (err.code === 'auth/invalid-credential') setError('Invalid email or password');
      else setError(err.message);
    }
  };

  const handleGoogleLogin = async () => {
    const provider = new GoogleAuthProvider();
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      console.log('Google Login Success:', user);
      navigate('/'); // This already routes to home page after Google login
      if (onLoginSuccess) onLoginSuccess();
    } catch (error) {
      console.error('Google Login Error:', error.message);
      if (error.code === 'auth/popup-closed-by-user') {
        setError('The popup was closed before completing the login process. Please try again.');
      } else {
        setError(error.message);
      }
    }
  };

  return (
    <div
      className="d-flex align-items-center justify-content-center"
      style={{
        minHeight: '100vh',
        fontFamily: "'Poppins', 'Inter', Arial, sans-serif",
      }}
    >
      <div
        className="rounded-4 shadow-lg p-4"
        style={{
          background: 'rgba(255,255,255,0.18)', // glossy white
          backdropFilter: 'blur(18px)',
          maxWidth: 430,
          width: '100%',
          border: '2.5px solid',
          boxShadow: '0 8px 32px 0 rgba(31,38,135,0.18), 0 1.5px 8px #ffd18033 inset',
        }}
      >
        {/* Optional: Logo or Icon */}
        <div className="text-center mb-3">
          <img src={logo} alt="Logo" style={{ width: 56, height: 56 }} />
        </div>
        <h2 className="text-center fw-bold mb-4" style={{
          color: '#000',
          letterSpacing: '1.5px',
          fontSize: '2.2rem',
          textShadow: '0 2px 12px #0a174e33'
        }}>
          {isSignUp ? 'Sign Up' : 'Login'}
        </h2>
        {error && <div className="alert alert-danger">{error}</div>}
        <form onSubmit={handleSubmit}>
          {isSignUp && (
            <>
              <div className="mb-3">
                <label className="form-label" style={{ color: '#00bfff' }}>Full Name</label>
                <input
                  type="text"
                  className="form-control rounded-pill shadow-sm"
                  name="fullName"
                  value={form.fullName}
                  onChange={handleChange}
                  required
                  style={{ fontWeight: 500, fontSize: '1.05rem' }}
                />
              </div>
              <div className="mb-3">
                <label className="form-label" style={{ color: '#00bfff' }}>Date of Birth</label>
                <input
                  type="date"
                  className="form-control rounded-pill shadow-sm"
                  name="dob"
                  value={form.dob}
                  onChange={handleChange}
                  required
                  style={{ fontWeight: 500, fontSize: '1.05rem' }}
                />
              </div>
              <div className="mb-3">
                <label className="form-label" style={{ color: '#00bfff' }}>Gender</label>
                <select
                  className="form-control rounded-pill shadow-sm"
                  name="gender"
                  value={form.gender}
                  onChange={handleChange}
                  required
                  style={{ fontWeight: 500, fontSize: '1.05rem' }}
                >
                  <option value="">Select</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  <option value="Other">Other</option>
                </select>
              </div>
            </>
          )}
          <div className="mb-3">
            <label className="form-label" style={{ color: '#00bfff' }}>Email address</label>
            <input
              type="email"
              className="form-control rounded-pill shadow-sm"
              name="email"
              value={form.email}
              onChange={handleChange}
              required
              style={{ fontWeight: 500, fontSize: '1.05rem' }}
            />
          </div>
          <div className="mb-3">
            <label className="form-label" style={{ color: '#00bfff' }}>Password</label>
            <input
              type="password"
              className="form-control rounded-pill shadow-sm"
              name="password"
              value={form.password}
              onChange={handleChange}
              required
              style={{ fontWeight: 500, fontSize: '1.05rem' }}
            />
          </div>
          {isSignUp && (
            <div className="mb-3">
              <label className="form-label" style={{ color: '#00bfff' }}>Confirm Password</label>
              <input
                type="password"
                className="form-control rounded-pill shadow-sm"
                name="confirmPassword"
                value={form.confirmPassword}
                onChange={handleChange}
                required
                style={{ fontWeight: 500, fontSize: '1.05rem' }}
              />
            </div>
          )}
          {isSignUp && (
            <>
              <div className="form-check mb-3">
                <input
                  className="form-check-input"
                  type="checkbox"
                  name="termsAgreed"
                  checked={form.termsAgreed}
                  onChange={handleChange}
                  required
                />
                <label className="form-check-label" style={{ color: '#ffd180' }}>
                  I agree to the terms and conditions
                </label>
              </div>
              <div className="mb-3">
                <label className="form-label" style={{ color: '#00bfff' }}>Phone Number</label>
                <div className="d-flex">
                  <select
                    className="form-select me-2 rounded-pill shadow-sm"
                    name="countryCode"
                    value={form.countryCode}
                    onChange={handleChange}
                    required
                    style={{ fontWeight: 500, fontSize: '1.05rem' }}
                  >
                    <option value="+91">+91 (India)</option>
                    <option value="+1">+1 (USA)</option>
                    <option value="+44">+44 (UK)</option>
                  </select>
                  <input
                    type="tel"
                    className="form-control rounded-pill shadow-sm"
                    name="phoneNumber"
                    value={form.phoneNumber}
                    onChange={handleChange}
                    placeholder="XXXXXXXXXX"
                    required
                    style={{ fontWeight: 500, fontSize: '1.05rem' }}
                  />
                </div>
              </div>
            </>
          )}
          <button
            type="submit"
            className="btn w-100 fw-bold rounded-pill shadow mt-2"
            style={{
              fontSize: '1.18rem',
              letterSpacing: '1px',
              color: '#0a174e',
              background: 'linear-gradient(90deg, #ffd180 60%, #fffde4 100%)',
              border: 'none',
              boxShadow: '0 2px 12px #ffd18055',
              transition: 'background 0.18s, color 0.18s, transform 0.18s',
            }}
            onMouseOver={e => {
              e.currentTarget.style.background = '#fffde4';
              e.currentTarget.style.color = '#00bfff';
              e.currentTarget.style.transform = 'scale(1.04)';
            }}
            onMouseOut={e => {
              e.currentTarget.style.background = 'linear-gradient(90deg, #ffd180 60%, #fffde4 100%)';
              e.currentTarget.style.color = '#0a174e';
              e.currentTarget.style.transform = 'none';
            }}
          >
            {isSignUp ? 'Sign Up' : 'Login'}
          </button>
        </form>

        <div className="text-center mt-4">
          {isSignUp ? (
            <>
              <span style={{ color: '#222' }}>Already have an account?</span>{' '}
              <button
                className="btn btn-link fw-bold p-0"
                style={{
                  color: '#0a174e', // dark blue for visibility
                  textDecoration: 'underline',
                  fontWeight: 700,
                  background: 'none',
                  border: 'none',
                  padding: 0,
                  fontSize: '1.08rem',
                  textShadow: '0 1px 6px #fff, 0 1px 6px #0a174e33',
                  transition: 'color 0.18s, text-shadow 0.18s',
                }}
                onMouseOver={e => {
                  e.currentTarget.style.color = '#111';
                  e.currentTarget.style.textShadow = '0 1px 8px #ffd180, 0 1px 6px #fff';
                }}
                onMouseOut={e => {
                  e.currentTarget.style.color = '#0a174e';
                  e.currentTarget.style.textShadow = '0 1px 6px #fff, 0 1px 6px #0a174e33';
                }}
                onClick={() => setIsSignUp(false)}
              >
                Login
              </button>
              <br />
              <span style={{ color: '#222' }}>or</span>{' '}
              <button
                className="btn btn-link fw-bold p-0"
                style={{
                  color: '#0a174e',
                  textDecoration: 'underline',
                  fontWeight: 700,
                  background: 'none',
                  border: 'none',
                  padding: 0,
                  fontSize: '1.08rem',
                  transition: 'color 0.18s, text-shadow 0.18s',
                }}
                onMouseOver={e => {
                  e.currentTarget.style.color = '#111';
                }}
                onMouseOut={e => {
                  e.currentTarget.style.color = '#0a174e';
                }}
                onClick={() => navigate('/vendor')}
              >
                Register as a Vendor
              </button>
            </>
          ) : (
            <>
              <span style={{ color: '#222' }}>Don't have an account?</span>{' '}
              <button
                className="btn btn-link fw-bold p-0"
                style={{
                  color: '#0a174e',
                  textDecoration: 'underline',
                  fontWeight: 700,
                  background: 'none',
                  border: 'none',
                  padding: 0,
                  fontSize: '1.08rem',
                  transition: 'color 0.18s, text-shadow 0.18s',
                }}
                onMouseOver={e => {
                  e.currentTarget.style.color = '#111';
                }}
                onMouseOut={e => {
                  e.currentTarget.style.color = '#0a174e';
                }}
                onClick={() => setIsSignUp(true)}
              >
                Sign Up
              </button>
              <br />
              <span style={{ color: '#222' }}>or</span>{' '}
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSdTVIFUHP-wAhw_-qmImul0hVpnt221JOrzDN0ntpzBw47Drg/viewform?usp=preview"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  color: '#0a174e',
                  textDecoration: 'underline',
                  fontWeight: 700,
                  background: 'none',
                  border: 'none',
                  padding: 0,
                  fontSize: '1.08rem',
                  transition: 'color 0.18s, text-shadow 0.18s',
                }}
                onMouseOver={e => {
                  e.currentTarget.style.color = '#111';
                }}
                onMouseOut={e => {
                  e.currentTarget.style.color = '#0a174e';
                }}
              >
                Register as a Vendor
              </a>
            </>
          )}
        </div>

        <hr style={{ borderColor: '#ffd180' }} />
        <button
          className="btn btn-outline-danger w-100 mb-2 rounded-pill fw-bold"
          onClick={handleGoogleLogin}
          style={{
            letterSpacing: '1px',
            fontSize: '1.08rem',
            borderWidth: '2px',
            background: 'rgba(255,255,255,0.12)',
            color: '#d32f2f',
            boxShadow: '0 2px 12px #ffd18033',
            transition: 'background 0.18s, color 0.18s, transform 0.18s',
          }}
          onMouseOver={e => {
            e.currentTarget.style.background = '#ffd180';
            e.currentTarget.style.color = '#0a174e';
            e.currentTarget.style.transform = 'scale(1.03)';
          }}
          onMouseOut={e => {
            e.currentTarget.style.background = 'rgba(255,255,255,0.12)';
            e.currentTarget.style.color = '#d32f2f';
            e.currentTarget.style.transform = 'none';
          }}
        >
          <i className="bi bi-google me-2"></i>Continue with Google
        </button>
      </div>
    </div>
  );
};

export default Login;
