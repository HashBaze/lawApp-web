import React, { useState } from 'react';

export default function DeleteUser() {
  const [mobileNumber, setMobileNumber] = useState('');
  const [reason, setReason] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Frontend validation
    if (!mobileNumber || !reason) {
      setError('Both fields are required.');
      return;
    }

    // Check if mobile number is valid (basic validation example)
    const mobilePattern = /^[0-9]{10}$/; // Assuming 10-digit number format
    if (!mobilePattern.test(mobileNumber)) {
      setError('Please enter a valid mobile number.');
      return;
    }

    // If validation is passed, clear error and proceed (no backend call)
    setError('');
    alert('Account Delete Request Submitted!');
    
    // Reset form after submission
    setMobileNumber('');
    setReason('');
  };

  return (
    <div style={{ maxWidth: '400px', margin: '0 auto', padding: '20px', border: '1px solid #ddd', borderRadius: '8px' }}>
      <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>Account Delete Request</h2>

      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: '10px' }}>
          <label htmlFor="mobileNumber" style={{ fontSize: '14px', fontWeight: 'bold' }}>
            Registered Mobile Number:
          </label>
          <input
            type="text"
            id="mobileNumber"
            value={mobileNumber}
            onChange={(e) => setMobileNumber(e.target.value)}
            placeholder="Enter your mobile number"
            style={{
              width: '100%',
              padding: '10px',
              fontSize: '14px',
              borderRadius: '4px',
              border: '1px solid #ccc',
            }}
          />
        </div>

        <div style={{ marginBottom: '20px' }}>
          <label htmlFor="reason" style={{ fontSize: '14px', fontWeight: 'bold' }}>
            Reason to Delete:
          </label>
          <textarea
            id="reason"
            value={reason}
            onChange={(e) => setReason(e.target.value)}
            placeholder="Enter the reason for account deletion"
            rows="4"
            style={{
              width: '100%',
              padding: '10px',
              fontSize: '14px',
              borderRadius: '4px',
              border: '1px solid #ccc',
            }}
          />
        </div>

        {error && <p style={{ color: 'red', fontSize: '14px', textAlign: 'center' }}>{error}</p>}

        <button
          type="submit"
          style={{
            width: '100%',
            padding: '10px',
            backgroundColor: '#007bff',
            color: 'white',
            fontSize: '16px',
            borderRadius: '4px',
            border: 'none',
            cursor: 'pointer',
          }}
        >
          Send Delete Request
        </button>
      </form>
    </div>
  );
}
