import React, { useEffect, useState } from 'react';
import axios from 'axios';

const WeatherAlert = () => {
  const [weatherAlert, setWeatherAlert] = useState(null);

  useEffect(() => {
    axios.get('/api/weather/check')
      .then(res => {
        const msg = res.data?.message || '';

        // ❌ Hide backend save messages
        const isRealAlert = msg.toLowerCase().includes('weather alert') &&
                            !msg.toLowerCase().includes('created and saved');

        if (isRealAlert) {
          setWeatherAlert(res.data);
        } else {
          setWeatherAlert(null); // Don't display system/status messages
        }
      })
      .catch(err => console.error(err));
  }, []);

  return weatherAlert ? (
    <div style={{ background: '#003366', color: 'white', padding: '10px', textAlign: 'center' }}>
      {weatherAlert.message}
    </div>
  ) : null;
};

export default WeatherAlert;
