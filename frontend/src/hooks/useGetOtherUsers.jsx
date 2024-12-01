import axios from "axios";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setOtherUsers } from "../store/authSllice/authSliceReducer";

const useGetOtherUsers = () => {
  useEffect(() => {
    getOtherUsers();
  }, []);
  const dispatch = useDispatch();

  const getOtherUsers = async () => {
    try {
      axios.defaults.withCredentials = true;
      const response = await axios.get("http://localhost:8000/api/v1/user");
      if (response.data?.success) {
        dispatch(setOtherUsers(response.data?.otherUsers));
      }
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };
  return;
};

export default useGetOtherUsers;
