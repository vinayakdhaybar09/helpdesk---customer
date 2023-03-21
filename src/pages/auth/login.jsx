import React, { useEffect, useState } from "react";
import style from "@/styles/auth/login.module.css";
import { useRouter } from "next/navigation";

const Login = () => {

  const router = useRouter()
  
  useEffect(() => {
    const isAuthenticated = localStorage.getItem("loggedIn");
    if (isAuthenticated === "loggedIn") {
      router.push('/');
    }
  }, []);

  const [payload, setPayload] = useState({
    email: "",
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

  const handleSubmit = () => {
    localStorage.setItem('loggedIn', "loggedIn");
    router.replace("/");
  }

  return (
    <div className={`${style.loginPage}`}>
      <div className={`${style.loginFormContainer}`}>
        <label>UserName</label>
        <input
          value={payload.email}
          name="email"
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
