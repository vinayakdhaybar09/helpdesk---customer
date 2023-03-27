import React, { useState } from 'react'
import styles from "@/styles/profile/profile.module.css"
import profilePic from "@/assets/images/userProfile/profilePic.png"
import { Input } from 'antd';

const Profile = () => {
      const [payload, setPayload] = useState({
        email: "",
        contact: "",
        birthdate:"",
        address:"",
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
        // dispatch(loginUser(payload));
        // router.replace("/");
      };
  return (
    <div className={`${styles.profileMainContainer}`}>
      <div className={`${styles.profileUpperContainer}`}>
        <div className={`${styles.profilePicButtonContainer}`}>
          <div className={`${styles.profilePicContainer}`}>
            <img src={profilePic?.src} alt="Profile Pic" />
            {/* <div className={`${styles.profileButtonContainer}`}> */}
            <button className={`${styles.profileButton1}`}>
              Upload New Picture
            </button>
            <button className={`${styles.profileButton2}`}>Delete</button>
          </div>
          {/* </div> */}
        </div>
      </div>
      <div className={`${styles.profileLowerContainer}`}>
        <div className={`${styles.profileFormContainer}`}>
          <form onSubmit={handleSubmit}>
            <div className={`${styles.profileFormFieldContainer}`}>
              <label className={`${styles.profileFormFieldLabel}`}>
                Email :{" "}
              </label>
              <Input
                className={`${styles.profileFormInputField}`}
                value={payload.email}
                name="email"
                onChange={handleInput}
                type={"email"}
                placeholder="johnsmith@gmail.com"
              ></Input>
            </div>
            <div className={`${styles.profileFormFieldContainer}`}>
              <label className={`${styles.profileFormFieldLabel}`}>
                Contact No.
              </label>
              <Input
                className={`${styles.profileFormInputField}`}
                value={payload.contact}
                name="contact"
                onChange={handleInput}
                type={"number"}
                placeholder="0123456 789"
              ></Input>
            </div>
            <div className={`${styles.profileFormFieldContainer}`}>
              <label className={`${styles.profileFormFieldLabel}`}>
                Birthday
              </label>
              <Input
                className={`${styles.profileFormInputField}`}
                value={payload.birthdate}
                name="birthdate"
                onChange={handleInput}
                type={"date"}
                placeholder="Enter your birthdate"
              ></Input>
            </div>
            <div className={`${styles.profileFormFieldContainer}`}>
              <label className={`${styles.profileFormFieldLabel}`}>
                Address :{" "}
              </label>
              <Input
                className={`${styles.profileFormInputFieldArea}`}
                value={payload.address}
                name="address"
                onChange={handleInput}
                type={"text"}
                placeholder="Enter your address"
              ></Input>
            </div>
            <div className={`${styles.profileFormFieldContainer}`}>
                <div></div>
              <button
                className={`${styles.profileFormSubmitBtn}`}
                type={"submit"}
              >
                Update Details
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Profile