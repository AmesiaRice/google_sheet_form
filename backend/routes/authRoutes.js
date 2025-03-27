const express = require('express');
const passport = require('passport');
const { getProfile, logout } = require('../controllers/authControllers');

const router = express.Router();

router.get('/auth/google', passport.authenticate('google', {
  scope: ['profile', 'email']
}));

router.get('/auth/google/callback', passport.authenticate('google', {
  failureRedirect: "http://localhost:5173/login"
}), (req, res) => {
  res.redirect('http://localhost:5173');
});

router.get('/profile', getProfile);
router.get('/logout', logout);

module.exports = router;
