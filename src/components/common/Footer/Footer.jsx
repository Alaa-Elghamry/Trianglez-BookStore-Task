import React from "react";
import styles from "./styles.module.css";

const { footerContainer, content } = styles;

function Footer() {
  return (
    <div className={footerContainer}>
      <div className={content}>© 2024 Our Ecom. All rights reserved.</div>
    </div>
  );
}

export default Footer;
