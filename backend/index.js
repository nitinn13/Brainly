const express = require('express');
const app = express();
const port = 3000;
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');
require('dotenv').config()
const {userRouter} = require("./routes/user");
const { contentRouter } = require('./routes/content');


app.use(express.json());
app.use(cors());

app.use("/user", userRouter);
app.use("/content", contentRouter);


async function main(){
  await mongoose.connect(process.env.MONGO_URL)
  app.listen(port, () => {
    console.log(`Example app listening at http:/user//user/localhost:${port}`);
  });
}
main()