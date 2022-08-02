require('dotenv').config();

const express = require('express');
const cors = require('cors');
// -------Routers-------
const userRouter = require('./routes/userRouter')
const postRouter = require('./routes/postRouter')
const commentRouter = require('./routes/commentRouter')
const interestedRouter = require('./routes/interestedRouter')

const app = express();

// -------Middleware-------
app.use(express.json());
app.use(cors());

// -------Routes-------
app.use(userRouter);
app.use(postRouter);
app.use(commentRouter);
app.use(interestedRouter);

const PORT = 4000;
app.listen(PORT, () => {
    console.log(`app listening on port ${PORT}`)
});

/*
Create new table: npx knex migrate:make table_name
migrate: npx knex migrate:latest
rollback: npx knex migrate:rollback

Create new seed: npx knex seed:make 01_users_seeds
run seeds: npx knex seed:run


create like seeds
like route
/posts/:id/interested
getAllLikes
add like 
delete like 
*/

