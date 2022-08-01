//server
require('dotenv').config();
// require cors, express
const express = require('express');
const cors = require('cors');

const app = express();

// Middleware 
app.use(express.json());
app.use(cors());

const PORT = 4000;
app.listen(PORT, () => {
    console.log(`app listening on port ${PORT}`)
});

/*
npx knex migrate:make table_name

seeds 
npx knex seed:make 
01_users_seeds
*/

