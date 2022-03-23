const { body, validationResult } = require("express-validator");
const Hobby = require("../models/hobby");

function getHobby(req, res) {
  Hobby.find((err, Hobbys_list) => {
    if (err) {
      res.json(err);
    } else {
      res.json(Hobbys_list);
    }
  });
}

const createHobby = [
  (req, res) => {
    const errors = validationResult(req);
    console.log(errors);
    if (!errors.isEmpty()) {
      res.json({ status: 0, debug_data: errors });
    } else {
      console.log(req.body);
      let { name, description, doc } = req.body;
      let HobbyObject = new Hobby({ name, description, doc });
      HobbyObject.save((error) => {
        if (error) {
          res.json(error);
        } else {
          res.json({ status: "adding Hobby completed" });
        }
      });
    }
  },
];

function deleteHobby(req, res) {
  Hobby.findByIdAndDelete(req.params._id, function (err) {
    if (err) {
      res.json(err);
    } else {
      res.json(`Hobby with _id as ${req.params._id} is removed`);
    }
  });
}
module.exports = { getHobby, createHobby, deleteHobby };
