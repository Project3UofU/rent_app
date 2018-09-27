const express = require("express");
const bodyParser = require("body-parser");
const session = require('express-session')
const MongoStore = require('connect-mongo')(session)
const mongoose = require("mongoose");
const passport = require('./passport')
const routes = require("./routes");
const app = express();
const PORT = process.env.PORT || 3001;

// Define middleware here
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// ===== Passport ====
app.use(
  session({
    secret: process.env.APP_SECRET || 'this is the default passphrase',
    store: new MongoStore({
      mongooseConnection: mongoose.connection
    }),
    resave: false,
    saveUninitialized: false
  })
)

app.use(passport.initialize())
app.use(passport.session()) // will call the deserializeUser

// Add routes, both API and view
app.use(routes);

// TODO: Create a config file to hide our database URI and update it when the app name is solidified
// Connect to the Mongo DB
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/rent_app", { useNewUrlParser: true });


// Start the API server
app.listen(PORT, function () {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
