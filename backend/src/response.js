const success = (req, res, messages, status = 200) => {
  res.status(status).send({
    error: "",
    body: messages
  });
};

const error = (req, res, messages, status = 500, details) => {
  console.log("response error: { ".red, details, " }".red);

  res.status(status).send({
    error: messages,
    body: ""
  });
};

module.exports = {
  success,
  error
};
