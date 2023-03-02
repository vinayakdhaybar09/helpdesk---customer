import Link from "next/link";
import React from "react";
import Styles from "@/styles/generic/header.module.css";

function Header() {
  return (
    <React.Fragment>
      <div>
        <div className={Styles.headerContainer}>
          <div className={Styles.headerContainerNavbar}>
            <Link href="/">Home</Link>
            <Link href="/about">About</Link>
            <Link href="/contact">Contact</Link>
          </div>
          <h1>Header</h1>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Header;
