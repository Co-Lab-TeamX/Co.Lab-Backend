require('dotenv').config();

const express = require('express');
const cors = require('cors');
// -------Routers-------
const userRouter = require('./routes/userRouter')
const postRouter = require('./routes/postRouter')

const app = express();

// -------Middleware-------
app.use(express.json());
app.use(cors());

// -------Routes-------
app.use(userRouter);
app.use(postRouter);

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

create comment seeds
comments route 
.get('/comments')
get all comments
get all comments for a single post "/posts/:id/comments"
post a comment ^
delete a comment '/comments/:id'

create like seeds
like route
/posts/:id/interested
getAllLikes
add like 
delete like 
*/

