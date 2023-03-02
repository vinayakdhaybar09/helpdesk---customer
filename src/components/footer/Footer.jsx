import Link from "next/link";
import React from "react";
import Styles from "@/styles/generic/footer.module.css";

function Footer() {
  return (
    <React.Fragment>
      <div>
        <div className={Styles.footerContainer}>
          <h1>Footer</h1>
          <div className={Styles.footerContainerLinks}>
            <Link href="/">Home</Link>
            <Link href="/about">About</Link>
            <Link href="/contact">Contact</Link>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Footer;
