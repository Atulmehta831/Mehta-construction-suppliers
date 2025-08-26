import React, { useState, useEffect } from 'react';
import axios from 'axios';

function AlertBanner() {
  const [alerts, setAlerts] = useState([]);
  const [emergencyAlert, setEmergencyAlert] = useState(null);

  useEffect(() => {
    // Fetch backend alerts once on load
    fetchAlerts();

    // Show emergency popup on page load
    setEmergencyAlert("🚨CLOUD BURST ! PLEASE STAY AWAY FROM POLES AND TRANSFORMERS");
  }, []);

  const fetchAlerts = async () => {
    try {
      const res = await axios.get('/api/alerts');

      let alertData = [];
      if (Array.isArray(res.data)) {
        alertData = res.data.sort((a, b) => new Date(b.date) - new Date(a.date)); // latest first
      } else if (res.data && res.data._id) {
        alertData = [res.data];
      }

      setAlerts(alertData);
    } catch (err) {
      console.error('Error fetching alerts:', err);
    }
  };

  const handleDismissBackend = (id) => {
    axios.delete(`/api/alerts/${id}`)
      .then(() => {
        setAlerts(prev => prev.filter(alert => alert._id !== id));
      })
      .catch(err => console.error('Delete failed', err));
  };

  const handleCloseEmergency = () => {
    setEmergencyAlert(null);
  };

  const alertStyle = {
    background: '#000',
    color: 'white',
    padding: '3px',
    textAlign: 'center',
    fontWeight: 'bold',
    position: 'relative',
    fontSize: '13px'
  };


  const popupStyle = {
    position: 'fixed',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    background: 'darkred',
    color: 'white',
    padding: '20px',
    borderRadius: '10px',
    zIndex: 1000,
    boxShadow: '0 4px 8px rgba(0,0,0,0.2)',
    textAlign: 'center',
    maxWidth: '400px',
    width: '80%',
  };

  const overlayStyle = {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    background: 'rgba(0,0,0,0.5)',
    zIndex: 999,
  };

  return (
    <div>
      {/* Emergency Popup */}
      {emergencyAlert && (
        <>
         <div style={{ ...overlayStyle, zIndex: 999 }}></div>
<div style={{ ...popupStyle, zIndex: 1001 }}>
            <p>{emergencyAlert}</p>
            <button
              onClick=  {handleCloseEmergency}
              style={{
                background: 'white',
                color: 'black',
                border: 'none',
                padding: '8px 12px',
                cursor: 'pointer',
                borderRadius: '5px',
                fontWeight: 'bold',
              }}
            >
              ✖ Close
            </button>
          </div>
        </>
      )}

      {/* Backend Alert */}
      {alerts.map(alert => (
       <div key={alert._id} style={alertStyle}>
          <marquee> {alert.message} </marquee>
          <button
            onClick={() => handleDismissBackend(alert._id)}
            style={{
              position: 'absolute',
              right: '10px',
              top: '5px',
              background: 'transparent',
              color: 'white',
              border: 'none',
              fontSize: '16px',
              cursor: 'pointer'
            }}
          >
            {/* ✖ */}
          </button>
        </div>
      ))}
    </div>
  );
}

export default AlertBanner;
