import axios from "axios";

const localUrl = import.meta.env.VITE_APP_localUrl;
const deployedUrl = import.meta.env.VITE_APP_deployedUrl;

const API = axios.create({ baseURL: deployedUrl });

const getAllUser = () => API.get("/user/all-users");

const getSingleUser = (id) => API.get(`/user/${id}`);

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
