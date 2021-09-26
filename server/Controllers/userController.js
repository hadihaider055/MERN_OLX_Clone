const User = require("../Models/userModel");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const phoneNumberVerifier = async (req, res) => {
  try {
    const { phoneNumber, password } = req.body;
    const user = await User.findOne({ phoneNumber });
    // SignupUser
    if (!user) {
      const hashedPassword = await bcrypt.hash(password, 10);
      const newUser = new User({
        phoneNumber: phoneNumber,
        password: hashedPassword,
      });
      await newUser.save();
      const token = jwt.sign({ id: newUser._id }, process.env.JWT_SECRET, {
        expiresIn: "1d",
      });
      res.status(201).json({ token });
    } else {
      // SigninUser
      const isMatch = await bcrypt.compare(password, user.password);
      if (isMatch) {
        const token = jwt.sign(
          { id: user._id, name: phoneNumber },
          process.env.JWT_SECRET,
          {
            expiresIn: "1d",
          }
        );
        res.status(200).json({ token });
      } else {
        res.status(401).json({ msg: "Invalid Credentials" });
      }
    }
  } catch (error) {
    return res.status(500).json({ error });
  }
};

module.exports = { phoneNumberVerifier };
