import axios from "axios";

const localUrl = `http://localhost:5000/api/v1`;

const API = axios.create({ baseURL: localUrl });


const getAllUser = () => API.get("/user/all-users");

const getSingleUser = async (id) => {
  try {
    const response = await axios.get(`${localUrl}/user/${id}`);
    return response;
  } catch (err) {
    //console.log(err);
  }
};
const loginUser = async ({ email, password }) =>
  API.post(`/user/login`, { email, password });

const signUpUser = (user) => API.post("/user/create-user", user);

const createChat = ({ senderId, reciverId }) =>
  API.post("/chat", { senderId, reciverId });

const getUserAllChats = (id) => API.get(`/chat/${id}`);

const userSingleChat = (senderId, reciverId) =>
  API.get(`/chat/${senderId}/${reciverId}`);

const addMessage = async (message) => {
  const data = await API.post("/message", message);
  return data;
};

const getMessage = (chatId) => API.get(`/message/${chatId}`);

export const APIs = {
  getAllUser,
  getSingleUser,
  loginUser,
  signUpUser,
  addMessage,
  getMessage,
  createChat,
  getUserAllChats,
  userSingleChat,
};
