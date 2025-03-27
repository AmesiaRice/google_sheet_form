require('dotenv').config();
const express = require('express');
const session = require('express-session');
const cors = require('cors');
const passport = require('./config/passport');

const authRoutes = require('./routes/authRoutes');
const sheetRoutes = require('./routes/sheetRoutes');

const app = express();

app.use(express.json());
app.use(cors({
  origin: "http://localhost:5173",
  credentials: true,
}));

app.use(session({
  secret: "secret",
  resave: false,
  saveUninitialized: false,
}));

app.use(passport.initialize());
app.use(passport.session());

// Routes
app.use(authRoutes);
app.use(sheetRoutes);

app.listen(5000, () => {
  console.log("🚀 Server running on http://localhost:5000");
});
