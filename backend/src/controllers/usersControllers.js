const users = {};

users.getUsers = (req, res) => {
  res.json({ message: "get user" });
};

users.createUser = (req, res) => {
  res.json({ message: "create user" });
};

users.deleteUser = (req, res) => {
  res.json({ message: "delete user" });
};

module.exports = users;
