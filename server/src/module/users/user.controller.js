 function getUsers(req, res) {
  const user = "user is online";
  res.status(200).json({
    status: "Successful",
    data: user,
  });
  console.log(user)
}


module.exports = {getUsers}
