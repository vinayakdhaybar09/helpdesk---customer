import React, { useEffect, useState } from "react";
import style from "@/styles/auth/login.module.css";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "@/redux/features/FeatureSlice";

const Login = () => {
  const router = useRouter();

  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);

  useEffect(() => {
    const isAuthenticated = localStorage.getItem("loggedIn");
    if (isAuthenticated === "loggedIn") {
      router.push("/");
    }
  }, [user]);

  const [payload, setPayload] = useState({
    username: "",
    password: "",
  });

  const handleInput = (e) => {
    setPayload((prev) => {
      return {
        ...prev,
        [e.target.name]: e.target.value,
      };
    });
  };

  const handleSubmit = async () => {
    dispatch(loginUser(payload));
    // router.replace("/");
  };

  return (
    <div className={`${style.loginPage}`}>
      <div className={`${style.loginFormContainer}`}>
        <label>UserName</label>
        <input
          value={payload.username}
          name="username"
          onChange={handleInput}
          type={"text"}
          placeholder="Enter Email"
        />
        <label>Password</label>
        <input
          value={payload.password}
          name="password"
          onChange={handleInput}
          type={"password"}
          placeholder="Enter Password"
        />
        <button onClick={handleSubmit}>Submit</button>
      </div>
    </div>
  );
};

export default Login;
