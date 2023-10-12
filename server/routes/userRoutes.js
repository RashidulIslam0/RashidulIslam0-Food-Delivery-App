const express = require("express");
var bcrypt = require("bcryptjs");

const router = express.Router();
const User = require("../models/User");
const { body, validationResult } = require("express-validator");

router.post(
  "/createuser",

  body("email", "Incorrect Password").isEmail(),
  body("name", "Incorrect Name").isLength({ min: 5 }),

  body("password", "Incorrect Password").isLength({ min: 5 }),

  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { email, name, password, location } = req.body;

    try {
      const saltRounds = 8; // Define the number of salt rounds
      const hashedPassword = await bcrypt.hash(password, saltRounds);

      // Now, store the hashed password in the database
      await User.create({
        name,
        password: hashedPassword,
        email,
        location,
      });

      res.json({ success: true });
    } catch (error) {
      console.log(error);
      res.json({ success: false });
    }
  }
);

// router.post("/loginuser", async (req, res) => {
//   const email = req.body.email;
//   const password = req.body.password;

//   try {
//     // Find the user by email in the database
//     const user = await User.findOne({ email });

//     if (!user) {
//       // User not found
//       return res.json({ success: false, message: "User not found" });
//     }

//     // Compare the provided password with the hashed password in the database
//     const passwordMatch = await bcrypt.compare(password, user.password);

//     if (passwordMatch) {
//       // Passwords match, indicating a successful login
//       return res.json({ success: true, message: "Login successful" });
//     } else {
//       // Passwords do not match
//       return res.json({ success: false, message: "Incorrect password" });
//     }
//   } catch (error) {
//     console.log(error);
//     res.status(500).json({ success: false, message: "Server error" });
//   }
// });

router.post("/loginuser", async (req, res) => {
  const email = req.body.email;
  const password = req.body.password;

  try {
    // Find the user by email in the database
    const user = await User.findOne({ email });

    if (!user) {
      // User not found
      return res.json({ success: false, message: "User not found" });
    }

    // Compare the provided password with the hashed password in the database
    const passwordMatch = await bcrypt.compare(password, user.password);

    if (passwordMatch) {
      // Passwords match, indicating a successful login
      return res.json({ success: true, message: "Login successful" });
    } else {
      // Passwords do not match
      return res.json({ success: false, message: "Incorrect password" });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: "Server error" });
  }
});

module.exports = router;
