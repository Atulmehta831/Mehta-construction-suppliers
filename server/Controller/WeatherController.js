const axios = require('axios');
const Alert = require('../Models/Alert');

const fetchWeatherAndStoreAlert = async (req, res) => {
  try {
    const apiKey = process.env.OPENWEATHER_API_KEY || "94ec1ef89dbeedef17e64aeeefa450bd";
    const city = req.query.city || "Bengaluru";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(city)}&appid=${apiKey}&units=metric`;

    // Fetch weather data with a 10s timeout to avoid long hangs
    const response = await axios.get(url, { timeout: 10000 });
    const { weather, main } = response.data;

    const description = weather[0].description;
    const temp = main.temp;

    console.log(`[Weather API] City: ${city}, Desc: ${description}, Temp: ${temp}°C`);

    // Weather condition check
    if (/(rain|storm|thunder|drizzle|snow|cloud)/i.test(description)) {
      const message = ` ⚠️ Weather Alert : ${description} expected in ${city} `;

      const existingAlert = await Alert.findOne({ message });

      if (!existingAlert) {
        await new Alert({ message, date: new Date() }).save();
        return res.status(201).json({ success: true, message });
      }
      return res.status(200).json({ success: true, message: 'Alert already exists.' });
    }

    return res.status(200).json({ success: true, message: 'No critical weather condition.' });

  } catch (err) {
    console.error("[Weather API Error]:", err.response?.data || err.message);
    return res.status(500).json({ success: false, message: 'Failed to fetch weather data' });
  }
};

module.exports = { fetchWeatherAndStoreAlert };
