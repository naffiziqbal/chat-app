import { useContext, useEffect, useState } from "react";
import { UserContext } from "../context/UserContext";

const useUserChatsArray = () => {
  const [chatMember, setChatMember] = useState(null);
  const { chatMembers } = useContext(UserContext);
  useEffect(() => {
    chatMembers.map((data) => setChatMember(data));
  }, [chatMembers]);
  return chatMember;
};

export default useUserChatsArray;
