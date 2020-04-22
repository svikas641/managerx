const express  = require('express');
//const cors = require('cors')
const connectDB = require('./config/db');

const app = express();

//connect Database
connectDB();

// Middlewares
//app.use(cors());
app.use(express.json({extended: false}));

// Define routes
app.use('/api/users',require('./routes/api/user'));
app.use('/api/auth',require('./routes/api/auth'));
app.use('/api/feedback',require('./routes/api/feedback'));
app.use('/api/lead',require('./routes/api/lead'));


const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));