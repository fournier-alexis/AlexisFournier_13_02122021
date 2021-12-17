import React from "react";
import styles from "./footer.module.css";

export const Footer: React.FunctionComponent = () => {
  return (
    <footer className={styles.footer}>
      <p className={styles["footer-text"]}>Copyright 2020 Argent Bank</p>
    </footer>
  );
};
