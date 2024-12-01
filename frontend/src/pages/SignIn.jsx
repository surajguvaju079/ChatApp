import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import FormLayout from "../components/common/FormLayout";
import { signInFormControl } from "../config/config";
import axios from "axios";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { setAuthUser } from "../store/authSllice/authSliceReducer";

const initialFormData = {
  username: "",
  password: "",
};

const SignIn = () => {
  const [formDetails, setFormDetails] = useState(initialFormData);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleSubmitSignIn = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:8000/api/v1/user/login",
        formDetails,
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      );
      if (response?.data?.data !== null) {
        toast.success("Successfully logged in!");
        navigate("/");
        console.log(response.data);
        dispatch(setAuthUser(response.data));
      }
      console.log(response);
    } catch (error) {
      console.log(error);
      toast.error(error?.response?.data?.message);
    }
  };
  return (
    <div className="flex flex-col  p-12 items-center justify-center">
      <div className="px-16  py-8  flex items-center justify-center flex-col shadow-md h-full w-full bg-gray-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-20 border border-gray-100">
        <div className="flex items-center w-full justify-center flex-col my-3">
          <h1 className="font-extrabold text-white text-3xl  ">Sign In</h1>
          <p className="text-gray-500">
            Have an account?
            <span className="underline text-red-700">
              <Link to={"/register"}>Sign Up</Link>
            </span>
          </p>
        </div>
        <FormLayout
          formControl={signInFormControl}
          buttonText={"Sign In"}
          handleSubmit={handleSubmitSignIn}
          formDetails={formDetails}
          setFormDetails={setFormDetails}
        />
      </div>
    </div>
  );
};

export default SignIn;
