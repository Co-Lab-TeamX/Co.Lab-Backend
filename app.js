require("dotenv").config();

const express = require("express");
const cors = require("cors");
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