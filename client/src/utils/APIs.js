import axios from "axios";

const localUrl = `http://localhost:5000/api/v1`;

// const getSingleUser = (email) => {
//   axios.get(`${localUrl}/user/get-user`).then((res) => res);
// };

const getAllUser = async () => {
  try {
    const response = await axios.get(`${localUrl}/user/all-users`);
    return response.data;
  } catch (err) {
    console.log(err);
  }
};

const loginUser = async ({ email, password }) => {
  try {
    const response = await axios.post(`${localUrl}/user/login`, {
      email,
      password,
    });
    console.log(response, "APIs");
    return response;
  } catch (err) {
    console.log(err);
  }
};
const signUpUser = async ({ name, email, password }) => {
  const response = await axios.post(`${localUrl}/user/create-user`, {
    name,
    email,
    password,
  });
  return response;
};

const createChat = () => {};
const getAllUserChats = () => {};
const userSingleChat = () => {};

const addMessage = () => {};
const getMessage = () => {};

export const APIs = {
  getAllUser,
  //   getSingleUser,
  loginUser,
  signUpUser,
  addMessage,
  getMessage,
  createChat,
  getAllUserChats,
  userSingleChat,
};
