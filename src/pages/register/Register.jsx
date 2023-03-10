import "./Register.scss";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";
import React, { useState } from "react";
import { upload } from "../../utils/upload";
import { newRequest } from "../../utils/request";
import { useNavigate } from "react-router-dom";
import constants from "../../common/constants";
export const Register = () => {
  // States management
  const [file, setFile] = useState(null);
  const [credentials, setCredentials] = useState({
    username: "",
    email: "",
    password: "",
    country: "",
    img: undefined,
    phone: undefined,
    desc: undefined,
    isSeller: false,
  });

  const navigate = useNavigate();

  // Methods
  const handleCredentials = (e) => {
    const { name, value } = e.target;
    const handleChange = { ...credentials, [name]: value };
    setCredentials(handleChange);
  };

  const handleSeller = (e) => {
    const { checked } = e.target;
    const handleChange = { ...credentials, isSeller: checked };
    setCredentials(handleChange);
  };

  const handleFile = (e) => {
    const { files } = e.target;
    const file = files[0];
    setFile(file);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const url = file
        ? await toast.promise(upload(file), constants.PARAMS.IMAGE_UPLOADING)
        : undefined;

      const registerData = { ...credentials, img: url };
      const { data } = await newRequest.post(
        "/services/register",
        registerData
      );

      toast.success(data.data);
      setTimeout(() => navigate(constants.ROUTES.HOME), 4000);
    } catch (error) {
      console.error(error);
      toast.error(error.response.data.error || error.message);
    }
  };

  return (
    <div className="register">
      <form onSubmit={handleSubmit}>
        <div className="left">
          <h1>Create a new account</h1>
          <label htmlFor="">
            Username <span>*</span>
          </label>
          <input
            name="username"
            type="text"
            placeholder="Username"
            onChange={handleCredentials}
            required
          />
          <label htmlFor="">
            Email <span>*</span>
          </label>
          <input
            name="email"
            type="email"
            placeholder="Email"
            onChange={handleCredentials}
            required
          />
          <label htmlFor="">
            Password <span>*</span>
          </label>
          <input
            name="password"
            type="password"
            placeholder="Password"
            onChange={handleCredentials}
            required
          />
          <label htmlFor="">Profile Picture</label>
          <input type="file" name="images/*" onChange={handleFile} />
          <label htmlFor="">
            Country <span>*</span>
          </label>
          <input
            name="country"
            type="text"
            placeholder="USA"
            onChange={handleCredentials}
            required
          />
          <button type="submit">Register</button>
        </div>
        <div className="right">
          <h1>I want to become a seller</h1>
          <div className="toggle">
            <label htmlFor="">Activate the seller account</label>
            <label className="switch">
              <input type="checkbox" onChange={handleSeller} />
              <span className="slider round"></span>
            </label>
          </div>
          <label htmlFor="">Phone Number</label>
          <input
            name="phone"
            type="text"
            placeholder="+1 234 567 89"
            onChange={handleCredentials}
          />
          <label htmlFor="">Description</label>
          <textarea
            placeholder="A short description of yourself"
            name="desc"
            id=""
            cols="30"
            rows="10"
            onChange={handleCredentials}
          ></textarea>
        </div>
      </form>
      <ToastContainer
        position="bottom-left"
        autoClose={4000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </div>
  );
};
