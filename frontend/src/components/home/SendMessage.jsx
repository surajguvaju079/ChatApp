import React from "react";
import { BsFillSendFill } from "react-icons/bs";
const SendMessage = ({ messageForm, setMessageForm, handleMessage }) => {
  return (
    <form onSubmit={(e) => handleMessage(e)}>
      <label className=" relative flex items-center justify-center pb-2">
        <input
          type="text"
          className="input bg-white w-4/5 text-black"
          value={messageForm}
          onChange={(e) => setMessageForm(e.target.value)}
        />
        <button className="flex items-center absolute right-14" type="submit">
          <BsFillSendFill className=" text-blue-600" />
        </button>
      </label>
    </form>
  );
};

export default SendMessage;
