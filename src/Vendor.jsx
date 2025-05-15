import React, { useState } from 'react';
import { db } from './firebaseConfig';
import { collection, addDoc } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';

const Vendor = () => {
  const [form, setForm] = useState({
    businessName: '',
    ownerName: '',
    businessAddress: '',
    contactNumber: '',
  });
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    if (!form.businessName || !form.ownerName || !form.businessAddress || !form.contactNumber) {
      setError('Please fill all the fields.');
      return;
    }

    try {
      await addDoc(collection(db, 'vendors'), form);
      setSuccess('Vendor registered successfully!');
      setForm({
        businessName: '',
        ownerName: '',
        businessAddress: '',
        contactNumber: '',
      });
    } catch (err) {
      setError('Error registering vendor: ' + err.message);
    }
  };

  return (
    <div className="bg-dark rounded-4 py-4 px-4">
      <div className="card p-4 mx-auto" style={{ maxWidth: 600 }}>
        <h2 className="text-center mb-4">Vendor Registration</h2>
        {error && <div className="alert alert-danger">{error}</div>}
        {success && <div className="alert alert-success">{success}</div>}

        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label">Business Name</label>
            <input
              type="text"
              className="form-control"
              name="businessName"
              value={form.businessName}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Owner Name</label>
            <input
              type="text"
              className="form-control"
              name="ownerName"
              value={form.ownerName}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Business Address</label>
            <textarea
              className="form-control"
              name="businessAddress"
              rows="3"
              value={form.businessAddress}
              onChange={handleChange}
              required
            ></textarea>
          </div>

          <div className="mb-3">
            <label className="form-label">Contact Number</label>
            <input
              type="tel"
              className="form-control"
              name="contactNumber"
              value={form.contactNumber}
              onChange={handleChange}
              placeholder="Enter contact number"
              required
            />
          </div>

          <button type="submit" className="btn btn-success w-100">Register as Vendor</button>
          <button type="button" className="btn btn-link mt-2 w-100" onClick={() => navigate('/')}>Back to Home</button>
        </form>
      </div>
    </div>
  );
};

export default Vendor;
