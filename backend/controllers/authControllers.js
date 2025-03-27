exports.getProfile = (req, res) => {
    if (!req.user) return res.status(401).json({ error: "Not authenticated" });
    res.status(200).json(req.user);
  };
  
  exports.logout = (req, res) => {
    req.logout(() => {
      req.session.destroy((err) => {
        if (err) return res.status(500).json({ error: "Logout failed" });
        res.clearCookie("connect.sid");
        res.status(200).json({ message: "Logged out" });
      });
    });
  };
  