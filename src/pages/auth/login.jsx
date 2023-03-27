import React, { useEffect, useState } from "react";
import styles from "@/styles/auth/login.module.css";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "@/redux/features/FeatureSlice";
import loginLogo from "@/assets/images/login/loginLogo.svg";
import loginImage from "@/assets/images/login/loginImage.svg";
import {
  MailOutlined,
  LockOutlined,
  EyeTwoTone,
  EyeInvisibleOutlined,
} from "@ant-design/icons";
import { Input } from "antd";

const Login = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);

  /* eslint-disable */

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

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(loginUser(payload));
    // router.replace("/");
  };

  return (
    <div className={`${styles.loginPageContainer}`}>
      <img
        src={loginLogo?.src}
        alt="Logo"
        className={`${styles.loginPageImage}`}
      />
      <div className={`${styles.loginGridContainer}`}>
        <div className={`${styles.loginLeftGridWrapper}`}>
          <div className={`${styles.loginLeftLogoWrapper}`}>
            <img src={loginLogo?.src} alt="Logo" />
            <div className={`${styles.loginTagline}`}>Welcome To Twin</div>
          </div>
          <div className={`${styles.loginFormContainer}`}>
            <form onSubmit={handleSubmit}>
              <div className={`${styles.loginFormFieldContainer}`}>
                <label className={`${styles.loginFormFieldLabel}`}>Email</label>

                <Input
                  className={`${styles.loginFormInputField}`}
                  value={payload.username}
                  name="username"
                  autoComplete="off"
                  onChange={handleInput}
                  type={"text"}
                  placeholder="Enter your email"
                  prefix={
                    <MailOutlined className={`${styles.loginFormFieldIcons}`} />
                  }
                ></Input>
              </div>
              <div className={`${styles.loginFormFieldContainer}`}>
                <label className={`${styles.loginFormFieldLabel}`}>
                  Password
                </label>
                <Input.Password
                  className={`${styles.loginFormInputField}`}
                  value={payload.password}
                  autoComplete="off"
                  name="password"
                  onChange={handleInput}
                  type={"password"}
                  placeholder="Enter your password"
                  prefix={
                    <LockOutlined className={`${styles.loginFormFieldIcons}`} />
                  }
                  iconRender={(passwordVisible) =>
                    passwordVisible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
                  }
                ></Input.Password>
              </div>
              <div className={`${styles.loginForgetPassword}`}>
                Forgot Password?
              </div>
              <button
                className={`${styles.loginFormSubmitBtn}`}
                type={"submit"}
              >
                Log In
              </button>
            </form>
          </div>
        </div>
        <div className={`${styles.loginRightGridWrapper}`}>
          <img src={loginImage?.src} alt="LoginImage" />
        </div>
      </div>
    </div>
  );
};

export default Login;
