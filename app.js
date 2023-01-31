const express = require('express');
const connectDB = require('./config/db');
const cors = require('cors');
//Initialize our express app
const app = express();

//Connect to our database
connectDB();
// Enable CORS (allows us to call our backend apis from the frontend)
// Prob better to only set the frontend route to be allowed to call the backend
app.use(cors());

app.get('/', (req, res) => res.send('Hello worldsss!'));

//Define routes
app.use('/api/questions', require('./routes/api/questions'));

const port = process.env.PORT || 8082;

app.listen(port, () => console.log(`Server running on port ${port}`));