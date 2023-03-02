import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";
import React from "react";
import Styles from "@/styles/home/home.module.css";

function HomePage() {
  return (
    <React.Fragment>
      <div>
        <Header />
        <div className={Styles.homeContainer}>
          <h1>Home Page</h1>
        </div>
        <Footer />
      </div>
    </React.Fragment>
  );
}

export default HomePage;
