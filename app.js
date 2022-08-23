require("dotenv").config();

const express = require("express");
const cors = require("cors");
const http = require('http');
const { Server } = require('socket.io');

// -------Routers-------
const userRouter = require("./routes/userRouter");
const postRouter = require("./routes/postRouter");
const commentRouter = require("./routes/commentRouter");
const interestedRouter = require("./routes/interestedRouter");
const feedRouter = require("./routes/feedRouter");
const chatRouter = require("./routes/chatRouter");


const app = express();

// -------Middleware-------
app.use(express.json());
app.use(cors());

// ------Chat Server------
const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: ['https://colab-free-up.herokuapp.com', 'https://freeupnyc.netlify.app/', 'http://localhost:3000/', 'http://localhost:4000/'],
    methods: ["GET", "POST"]
  }
});

io.on("connection", socket => {
  console.log('connected', socket.id);

  socket.on("chat", payload => {
    console.log('payload', payload)
    socket.broadcast.emit("receive_message");
  });

  socket.on("disconnect", () => {
    console.log("user disconnected", socket.id);
  });
});

// -------Routes-------
app.use(userRouter);
app.use(postRouter);
app.use(commentRouter);
app.use(interestedRouter);
app.use(feedRouter);
app.use(chatRouter);

const PORT = process.env.PORT || 4000;


app.listen(PORT, () => {
  console.log(`app listening on port ${PORT}`);
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