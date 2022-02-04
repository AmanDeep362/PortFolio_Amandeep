const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();
mongoose.connect(
  process.env.MONGODB_CONNECTION_STRING,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  (err) => {
    if (err) throw err;
    console.log("MongoDB connection established");
  }
);

const HireData = require("../Models/HireSchema");
const sendEmail = require("../Utils/SendEmail");

router.post("/hireme", (req, res) => {
  try {
    const {name,email, Contact, city, Message } = req.body;
    if ( !name || !email || !Contact || !city || !Message) {
      res.json({ msg: "filled are required to fill" });
    } else {
      const newHireme = new HireData({
        name,
        email,
        Contact,
        city,
        Message,

      });
      newHireme
        .save()
        .then(() => {
          res.status(201).json({ msg: "data added succesfuly" });
          console.log("success");
          sendEmail(name,email,Contact,city,Message)
        //   contactemail(newContactData.email,newContactData.name)
        })
        .catch((err) => {
          res.json({ msg: "data not added error occured"});
        });
    }
  } catch (error) {
    console.log("error occcured " + error);
  }
});
module.exports = router;
