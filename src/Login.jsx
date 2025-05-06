import React, { useState } from 'react';
import { GoogleAuthProvider, signInWithPopup, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { auth, db } from './firebaseConfig';
import { doc, setDoc } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';

const Login = () => {
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
          email: '', password: '', confirmPassword: '', fullName: '', dob: '', gender: '',
          termsAgreed: false, phoneNumber: '', countryCode: '+91',
        });
      } else {
        await signInWithEmailAndPassword(auth, form.email, form.password);
        navigate('/');
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
      navigate('/');
    } catch (error) {
      console.error('Google Login Error:', error.message);
      setError(error.message);
    }
  };

  return (
    <div className="bg-dark rounded-4 py-4 px-4">
      <div className="card p-4 mx-auto" style={{ maxWidth: 500 }}>
        <h2 className="text-center">{isSignUp ? 'Sign Up' : 'Login'}</h2>
        {error && <div className="alert alert-danger">{error}</div>}
        <form onSubmit={handleSubmit}>
          {isSignUp && (
            <>
              <div className="mb-3">
                <label className="form-label">Full Name</label>
                <input type="text" className="form-control" name="fullName" value={form.fullName} onChange={handleChange} required />
              </div>
              <div className="mb-3">
                <label className="form-label">Date of Birth</label>
                <input type="date" className="form-control" name="dob" value={form.dob} onChange={handleChange} required />
              </div>
              <div className="mb-3">
                <label className="form-label">Gender</label>
                <select className="form-control" name="gender" value={form.gender} onChange={handleChange} required>
                  <option value="">Select</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  <option value="Other">Other</option>
                </select>
              </div>
            </>
          )}
          <div className="mb-3">
            <label className="form-label">Email address</label>
            <input type="email" className="form-control" name="email" value={form.email} onChange={handleChange} required />
          </div>
          <div className="mb-3">
            <label className="form-label">Password</label>
            <input type="password" className="form-control" name="password" value={form.password} onChange={handleChange} required />
          </div>
          {isSignUp && (
            <div className="mb-3">
              <label className="form-label">Confirm Password</label>
              <input type="password" className="form-control" name="confirmPassword" value={form.confirmPassword} onChange={handleChange} required />
            </div>
          )}
          {isSignUp && (
            <div className="form-check mb-3">
              <input className="form-check-input" type="checkbox" name="termsAgreed" checked={form.termsAgreed} onChange={handleChange} required />
              <label className="form-check-label">I agree to the terms and conditions</label>
            </div>
          )}
          {isSignUp && (
            <div className="mb-3">
              <label className="form-label">Phone Number</label>
              <div className="d-flex">
                <select className="form-select me-2" name="countryCode" value={form.countryCode} onChange={handleChange} required>
                  <option value="+91">+91 (India)</option>
                  <option value="+1">+1 (USA)</option>
                  <option value="+44">+44 (UK)</option>
                  {/* Add more as needed */}
                </select>
                <input
                  type="tel"
                  className="form-control"
                  name="phoneNumber"
                  value={form.phoneNumber}
                  onChange={handleChange}
                  placeholder="XXXXXXXXXX"
                  required
                />
              </div>
            </div>
          )}
          <button type="submit" className="btn btn-primary w-100">
            {isSignUp ? 'Sign Up' : 'Login'}
          </button>
        </form>

        <div className="text-center mt-3">
          {isSignUp ? (
            <>
              Already have an account?{' '}
              <button className="btn btn-link p-0" onClick={() => setIsSignUp(false)}>Login</button>
            </>
          ) : (
            <>
              Don't have an account?{' '}
              <button className="btn btn-link p-0" onClick={() => setIsSignUp(true)}>Sign Up</button>
            </>
          )}
        </div>

        <hr />
        <button className="btn btn-outline-danger w-100 mb-2" onClick={handleGoogleLogin}>
          Continue with Google
        </button>
      </div>
    </div>
  );
};

export default Login;
