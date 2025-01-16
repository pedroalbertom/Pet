const router = require('./src/routes/router')
const cors = require('cors')
const express = require('express')
const app = express()
const sequelize = require('./src/database/connection')
const port = process.env.PORT ?? 3000

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors())
app.all('*', router)

try {
    sequelize.sync({ force: false });
    console.log('Database & tables created!');
} catch (error) {
    console.error('Error syncing database:', error);
}

app.listen(port, () => {
    console.log(`App listening on port ${port}`)
})