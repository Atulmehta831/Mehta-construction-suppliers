const express = require('express'); // Import Express for server creation
const mongoose = require('mongoose');        // Import Mongoose for MongoDB interactions
const cors = require('cors'); // Import CORS for handling cross-origin requests
const alertRoutes = require('./Routes/alertRoutes');
const weatherRoutes = require('./Routes/weatherRoutes');



const app = express();  // Create an Express application
app.use(cors());  // Use CORS middleware to allow cross-origin requests
app.use(express.json()); // Parse incoming JSON requests
// const PORT = process.env.PORT || 5000; // Set the port to listen on, defaulting to 5000 

mongoose.connect ('mongodb://127.0.0.1:27017/mehta',{
    useNewUrlParser : true,
    useUnifiedTopology: true,
}).then(()=> console.log("MongoDB connected"))
.catch((err)=>console.error(err));



app.use('/api/alerts',alertRoutes);
app.use('/api/weather', weatherRoutes);
app.listen(5000,()=>{
    console.log('server started')
});
