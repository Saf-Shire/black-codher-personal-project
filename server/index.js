const express = require("express");
cors = require('cors');
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const app = express();
// IMPORT YOUR MODELS
require("./models/Bootcamps");



app.use(cors());
// app.use((req, res, next) => {
//   res.header("Access-Control-Allow-Origin", "*");
//   next();
// });
mongoose.Promise = global.Promise;
mongoose.connect(
  process.env.MONGODB_URI ||
    `mongodb://localhost:27017/blackcodher`,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
)
.then(() => console.log("Connection Successful"))
    .catch(err => console.log(err));

app.use(bodyParser.json());

// IMPORT YOUR ROUTES
require("./routes/bootcampsRoutes")(app);

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));

  const path = require("path");
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

const PORT = process.env.PORT || 5000;


app.listen(PORT, () => {
  console.log(`app running on port ${PORT}`);
});
