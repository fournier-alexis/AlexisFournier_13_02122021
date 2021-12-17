import React from "react";

import styles from "./welcome.module.css";

import iconChat from "./../../../assets/images/icon-chat.png";
import iconMoney from "./../../../assets/images/icon-money.png";
import securityIcon from "./../../../assets/images/icon-security.png";
import { Header } from "../../modules/header/header";

export const Welcome: React.FunctionComponent = () => {
  return (
    <>
      <Header></Header>
      <main>
        <div className={styles.hero}>
          <section className={styles["hero-content"]}>
            <h2 className="sr-only">Promoted Content</h2>
            <p className={styles.subtitle}>No fees.</p>
            <p className={styles.subtitle}>No minimum deposit.</p>
            <p className={styles.subtitle}>High interest rates.</p>
            <p className={styles.text}>
              Open a savings account with Argent Bank today!
            </p>
          </section>
        </div>
        <section className={styles.features}>
          <h2 className="sr-only">Features</h2>
          <div className={styles["feature-item"]}>
            <img
              src={iconChat}
              alt="Chat Icon"
              className={styles["feature-icon"]}
            />
            <h3 className={styles["feature-item-title"]}>
              You are our #1 priority
            </h3>
            <p>
              Need to talk to a representative? You can get in touch through our
              24/7 chat or through a phone call in less than 5 minutes.
            </p>
          </div>
          <div className={styles["feature-item"]}>
            <img
              src={iconMoney}
              alt="Money Icon"
              className={styles["feature-icon"]}
            />
            <h3 className={styles["feature-item-title"]}>
              More savings means higher rates
            </h3>
            <p>
              The more you save with us, the higher your interest rate will be!
            </p>
          </div>
          <div className={styles["feature-item"]}>
            <img
              src={securityIcon}
              alt="Security Icon"
              className={styles["feature-icon"]}
            />
            <h3 className={styles["feature-item-title"]}>
              Security you can trust
            </h3>
            <p>
              We use top of the line encryption to make sure your data and money
              is always safe.
            </p>
          </div>
        </section>
      </main>
    </>
  );
};
