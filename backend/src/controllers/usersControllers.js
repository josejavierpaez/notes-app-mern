const users = {};
const usersModel = require("../models/User");
users.getUsers = (req, res) => {
  return new Promise((resolve, reject) => {
    try {
      const users = usersModel.find();
      resolve(users);
    } catch (error) {
      reject(`error: ${error}`);
    }
  });
};

users.createUser = (req, res) => {
  return new Promise((resolve, reject) => {
    try {
      const { userName } = req.body;
      const newUser = new usersModel({
        userName : userName
      });
      resolve(newUser.save());
    } catch (error) {
      reject(`error: ${error}`);
    }
  });
};

users.deleteUser = (req, res) => {
  return new Promise(async (resolve, reject) => {
    try {
      await usersModel.findByIdAndDelete(req.params.id);
      resolve("user deleted");
    } catch (error) {
      reject(`error: ${error}`);
    }
  });
};

module.exports = users;
