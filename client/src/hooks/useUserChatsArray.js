import { useContext, useEffect, useState } from "react";
import { UserContext } from "../context/UserContext";

const useUserChatsArray = () => {
  const [chatMember, setChatMember] = useState([]);
  const { chatMembers } = useContext(UserContext);
  useEffect(() => {
    chatMembers.map((data) => setChatMember(data));
  }, [chatMembers]);
  console.log(chatMember);
  return chatMember;
};

export default useUserChatsArray;
