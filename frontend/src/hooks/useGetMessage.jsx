import axios from "axios";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { setMessages } from "../store/authSllice/messageSliceReducer";

const useGetMessage = () => {
  const { otherUserMessage } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  console.log(otherUserMessage);
  useEffect(() => {
    getMessage();
  }, [otherUserMessage?._id, setMessages]);
  const getMessage = async () => {
    try {
      axios.defaults.withCredentials = true;
      const response = await axios.get(
        `http://localhost:8000/api/v1/message/get/${otherUserMessage._id}`
      );
      console.log(response);
      dispatch(setMessages(response?.data));
    } catch (error) {
      console.log(error);
    }
  };
};

export default useGetMessage;
