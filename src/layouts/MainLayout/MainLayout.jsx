import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../../components/common/Footer/Footer";
import Header from "../../components/common/Header/Header";
import styles from "./styles.module.css";

const { container, wrapper, header, footer } = styles;

export default function MainLayout() {
  return (
    <div className={container}>
      <Header className={header} />
      <div className={wrapper}>
        <Outlet />
      </div>
      <Footer className={footer} />
    </div>
  );
}
