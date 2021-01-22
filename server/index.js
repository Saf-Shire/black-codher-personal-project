const express = require("express");
cors = require('cors');
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

// IMPORT YOUR MODELS
require("./models/Bootcamps");


const app = express();
app.use(cors());
// app.use((req, res, next) => {
//   res.header("Access-Control-Allow-Origin", "*");
//   next();
// });
mongoose.Promise = global.Promise;
mongoose.connect(
  process.env.MONGODB_URI ||
    `mongodb://localhost:27017/black-codher-personal-project`,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

app.use(bodyParser.json());

// IMPORT YOUR ROUTES
require("./routes/bootcampsRoutes")(app);


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`app running on port ${PORT}`);
});
