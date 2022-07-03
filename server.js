const express = require("express");
const expressLayout = require("express-ejs-layouts");
const app = express();
const PORT = 3000;

// View Engine & Layout
app.use(express.static("public"));
app.set("view engine", "ejs");
app.use(expressLayout);
app.set("layout", "layouts/default");

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Session
const session = require("express-session");
app.use(
  session({
    secret: "Secret",
    resave: false,
    saveUninitialized: false,
  })
);

// Passport
const passport = require("./lib/passport");
app.use(passport.initialize());
app.use(passport.session());

const router = require("./router");
app.use(router);

app.listen(PORT, () => {
  console.log(`Listening on http://localhost:${PORT}`);
});
