require("dotenv").config();
const mongoose = require("mongoose");
const app = require("./app");
const port = process.env.PORT || 8080;
const MONGO_URI = process.env.MONGO_URI;

mongoose
  .connect(MONGO_URI)
  .then(() => {
    console.log(`connected to MongoDB `);
    app.listen(port, () =>
      console.log(`app listening at http://localhost:${port}`)
    );
  })
  .catch((error) => {
    console.log("error connecting to MongoDB:", error.message);
  });
