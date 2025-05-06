import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

function PaymentPage() {
  const location = useLocation();
  const navigate = useNavigate();
  const event = location.state?.event;

  // Debug check
  useEffect(() => {
    console.log("Loaded PaymentPage with event:", event);
  }, [event]);

  const [ticketCount, setTicketCount] = useState(1);
  const [ticketDetails, setTicketDetails] = useState([
    { name: '', age: '', gender: 'Male', mobile: '' },
  ]);
  const [totalCost, setTotalCost] = useState(0);

  useEffect(() => {
    calculateTotalCost();
  }, [ticketDetails]);

  const handleTicketCountChange = (e) => {
    const newCount = parseInt(e.target.value, 10) || 1;
    setTicketCount(newCount);

    const updatedDetails = Array.from({ length: newCount }, (_, i) =>
      ticketDetails[i] || { name: '', age: '', gender: 'Male', mobile: '' }
    );
    setTicketDetails(updatedDetails);
  };

  const handleDetailChange = (index, field, value) => {
    const updatedDetails = [...ticketDetails];
    updatedDetails[index][field] = value;
    setTicketDetails(updatedDetails);
  };

  const calculateTotalCost = () => {
    if (!event?.registrationFees) return;

    const { male = 0, female = 0, couple = 0 } = event.registrationFees;
    let cost = 0;

    ticketDetails.forEach((ticket) => {
      if (ticket.gender === 'Male') {
        cost += male;
      } else if (ticket.gender === 'Female') {
        cost += female;
      } else {
        cost += couple;
      }
    });

    setTotalCost(cost);
  };

  // If user refreshes or directly hits /payment
  if (!event) {
    return (
      <div className="container text-center mt-5 text-danger">
        <h2>Error: Event data not found!</h2>
        <p>Please go back and select an event first.</p>
        <button className="btn btn-primary mt-3" onClick={() => navigate(-1)}>
          Go Back
        </button>
      </div>
    );
  }

  return (
    <div className="container mt-5 text-white bg-dark p-4 rounded-3 shadow-lg">
      <h2 className="text-warning mb-4">Payment for {event.title}</h2>
      <p><strong>Date:</strong> {new Date(event.date).toDateString()}</p>
      <p><strong>Organiser:</strong> {event.organiser || 'Unknown'}</p>

      <div className="mb-4">
        <label className="form-label">Number of Tickets:</label>
        <input
          type="number"
          className="form-control"
          value={ticketCount}
          min="1"
          max="10"
          onChange={handleTicketCountChange}
        />
      </div>

      {ticketDetails.map((ticket, index) => (
        <div key={index} className="card p-3 mb-3 bg-light text-dark">
          <h5>Ticket {index + 1}</h5>
          <div className="mb-2">
            <label className="form-label">Name:</label>
            <input
              type="text"
              className="form-control"
              value={ticket.name}
              onChange={(e) => handleDetailChange(index, 'name', e.target.value)}
              required
            />
          </div>
          <div className="mb-2">
            <label className="form-label">Age:</label>
            <input
              type="number"
              className="form-control"
              min="1"
              max="100"
              value={ticket.age}
              onChange={(e) => handleDetailChange(index, 'age', e.target.value)}
              required
            />
          </div>
          <div className="mb-2">
            <label className="form-label">Gender:</label>
            <select
              className="form-select"
              value={ticket.gender}
              onChange={(e) => handleDetailChange(index, 'gender', e.target.value)}
            >
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Couple">Couple</option>
            </select>
          </div>
          <div className="mb-2">
            <label className="form-label">Mobile:</label>
            <input
              type="tel"
              className="form-control"
              pattern="[0-9]{10}"
              value={ticket.mobile}
              onChange={(e) => handleDetailChange(index, 'mobile', e.target.value)}
              required
            />
          </div>
        </div>
      ))}

      <div className="text-end mt-4">
        <h4>Total Cost: ₹{totalCost}</h4>
        <button className="btn btn-success">Proceed to Pay</button>
      </div>
    </div>
  );
}

export default PaymentPage;
