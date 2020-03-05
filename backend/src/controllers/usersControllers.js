const users = {};

users.getUsers = (req, res) => {
  return new Promise((resolve, reject) => {
    resolve("get user");
  });
};

users.createUser = (req, res) => {
  return new Promise((resolve, reject) => {
    resolve("create user");
  });
};

users.deleteUser = (req, res) => {
  return new Promise((resolve, reject) => {
    reject("delete user");
  });
};

module.exports = users;
