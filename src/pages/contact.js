import React from "react";
import { addUserDetails } from "@/redux/features/FeatureSlice";
import { Button, Input } from "antd";
import { useDispatch, useSelector } from "react-redux";
import Router from "next/router";
import Styles from "@/styles/contact/contact.module.css";
function Contact() {
  const dispatch = useDispatch();
  const handleChange = (e) => {
    dispatch(addUserDetails({ [e.target.name]: e.target.value }));
  };
  const { userDetails } = useSelector((state) => ({
    ...state.feature.featureName,
  }));
  return (
    <React.Fragment>
      <div>
        <div className={Styles.contactContainer}>
          <div className={Styles.contactContainerHeader}>
            <h1>Contact Us</h1>
          </div>
          <div className={Styles.contactForm}>
            <form>
              <Input
                value={userDetails?.emailId}
                placeholder="Email"
                name="emailId"
                type="email"
                onChange={handleChange}
                size="large"
              />
              <Input
                value={userDetails?.fullName}
                placeholder="Full Name"
                name="fullName"
                type="text"
                onChange={handleChange}
                size="large"
              />
              <Input
                value={userDetails?.phoneNumber}
                placeholder="Phone"
                name="phoneNumber"
                type="tel"
                onChange={handleChange}
                size="large"
              />
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <Button type="primary" shape="round" danger>
                  Submit
                </Button>
                <Button
                  shape="round"
                  color="primary"
                  onClick={() => Router.push("/home")}
                >
                  Home
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Contact;
