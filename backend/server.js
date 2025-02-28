const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const userRoutes = require('./routes/userRoutes');

dotenv.config();

const app = express();
app.use(cors({ origin: "http://127.0.0.1:5501" })); // Allow frontend access
app.use(express.json());

app.use("/api/users", userRoutes);

const PORT = process.env.PORT || 5500;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
