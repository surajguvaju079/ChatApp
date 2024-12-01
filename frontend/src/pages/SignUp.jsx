import React, { useState } from "react";
import FormLayout from "../components/common/FormLayout";
import { signUpFormControl } from "../config/config";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
const initialFormData = {
  fullName: "",
  username: "",
  password: "",
  confirmPassword: "",
  gender: "",
};

const SignUp = () => {
  const navigate = useNavigate();
  const [formDetails, setFormDetails] = useState(initialFormData);
  const handleSubmitSignUp = async (e) => {
    e.preventDefault();
    console.log(formDetails, "sign up");
    try {
      const response = await axios.post(
        "http://localhost:8000/api/v1/user/register",
        formDetails,
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      );

      if (response.data?.success) {
        toast.success("Successfully Registered!!!");
        navigate("/login");
      }

      console.log(response);
    } catch (error) {
      console.log(error);
      toast.error(error.response.data.message);
    }
  };
  return (
    <div className="flex flex-col  px-12 py-3 items-center justify-center">
      <div className="px-16  py-1  flex items-center justify-center flex-col shadow-md h-full w-full bg-gray-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-20 border border-gray-100">
        <div className="flex items-center w-full justify-center flex-col my-1">
          <h1 className="font-extrabold text-white text-3xl  ">Sign Up</h1>
          <p className="text-gray-500">
            Have an account?
            <span className="underline text-red-700">
              <Link to={"/login"}>Sign In</Link>
            </span>
          </p>
        </div>
        <FormLayout
          formControl={signUpFormControl}
          buttonText={"Sign Up"}
          handleSubmit={handleSubmitSignUp}
          formDetails={formDetails}
          setFormDetails={setFormDetails}
        />
      </div>
    </div>
  );
};

export default SignUp;
