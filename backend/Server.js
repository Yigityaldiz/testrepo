const express = require("express");
const mongoose = require("mongoose");
const TaskRoutes = require('./routes/TaskRoute')

require("dotenv").config();

const cors = require("cors");
const router = require("./routes/TaskRoute");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(cors());

mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log("Mongo is active"))
  .catch((err) => console.log("MongoDb connect problem ", err));

// Remove the useRouter function, it's not needed.

// Use the router directly
app.use("/", TaskRoutes );

app.listen(PORT, () => console.log(`Listening port : ${PORT}`));

console.log(process.env.PORT);
