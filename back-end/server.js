require('dotenv').config();

const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

require('./config/database');

app.get('/', (req, res) => {
    res.send('MadunaHost API is running...');
});

const apiRoutes = require('./routes/api');
app.use('/api', apiRoutes);

module.exports = app;

if (require.main === module) {
    const PORT = process.env.PORT || 5000;

    app.listen(PORT, () => {
        console.log(`Server API berjalan di port ${PORT}`);
    });
}
