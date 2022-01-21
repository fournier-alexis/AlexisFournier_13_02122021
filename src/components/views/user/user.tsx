import React, { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { setChanges } from "../../../features/changes/changesSlice";
import { setUser } from "../../../features/user/userSlice";
import { updateUser } from "../../../models/Api.service";
import { updateSessionStorage } from "../../../store";
import { Header } from "../../modules/header/header";
import styles from "./user.module.css";

export const User: React.FunctionComponent = () => {
  const dispatch = useDispatch();
  const user = useSelector((state: any) => state.user.user);
  const changes = useSelector((state: any) => state.changes.changes);
  const HTMLFirstName = useRef(null);
  const HTMLLastName = useRef(null);

  if (!user) {
    return <Navigate to={"/"}></Navigate>;
  }

  const openEdit = () => {
    dispatch(
      setChanges({
        isActive: true,
      })
    );
  };

  const cancel = () => {
    dispatch(
      setChanges({
        isActive: false,
      })
    );
  };

  const save = () => {
    const firstName = HTMLFirstName.current
      ? HTMLFirstName.current["value"]
      : "";
    const lastName = HTMLLastName.current ? HTMLLastName.current["value"] : "";
    const newUser = {
      email: user.email,
      firstName: firstName,
      lastName: lastName,
    };

    dispatch(
      setChanges({
        isActive: false,
      })
    );
    dispatch(setUser(newUser));
    updateSessionStorage({ user: newUser });
    updateUser(newUser);
  };

  return (
    <>
      <Header></Header>
      <main className="main bg-dark">
        <div className={styles.header}>
          <h1>
            Welcome back
            <br />
            {!changes || !changes.isActive
              ? `${user.firstName} ${user.lastName} !`
              : ""}
          </h1>
          {changes?.isActive ? (
            <div className={styles["edit-modal"]}>
              <div className={styles["edit-inputs"]}>
                <input
                  id="firstName"
                  type="text"
                  ref={HTMLFirstName}
                  placeholder={user.firstName}
                />
                <input
                  id="lastName"
                  type="text"
                  ref={HTMLLastName}
                  placeholder={user.lastName}
                />
              </div>
              <div className={styles["edit-buttons"]}>
                <div className={styles.div}>
                  <button
                    className={styles["edit-button"]}
                    onClick={() => save()}
                  >
                    Sauvegarder
                  </button>
                </div>
                <div className={styles.div}>
                  <button
                    className={styles["edit-button"]}
                    onClick={() => cancel()}
                  >
                    Annuler
                  </button>
                </div>
              </div>
            </div>
          ) : (
            <button
              className={styles["edit-button"]}
              onClick={() => openEdit()}
            >
              Edit Name
            </button>
          )}
        </div>
        <h2 className="sr-only">Accounts</h2>
        <section className={styles.account}>
          <div className={styles["account-content-wrapper"]}>
            <h3 className={styles["account-title"]}>
              Argent Bank Checking (x8349)
            </h3>
            <p className={styles["account-amount"]}>$2,082.79</p>
            <p className={styles["account-amount-description"]}>
              Available Balance
            </p>
          </div>
          <div
            className={`${styles["account-content-wrapper"]} ${styles["cta"]}`}
          >
            <button className={styles["transaction-button"]}>
              View transactions
            </button>
          </div>
        </section>
        <section className={styles.account}>
          <div className={styles["account-content-wrapper"]}>
            <h3 className={styles["account-title"]}>
              Argent Bank Savings (x6712)
            </h3>
            <p className={styles["account-amount"]}>$10,928.42</p>
            <p className={styles["account-amount-description"]}>
              Available Balance
            </p>
          </div>
          <div
            className={`${styles["account-content-wrapper"]} ${styles["cta"]}`}
          >
            <button className={styles["transaction-button"]}>
              View transactions
            </button>
          </div>
        </section>
        <section className={styles.account}>
          <div className={styles["account-content-wrapper"]}>
            <h3 className={styles["account-title"]}>
              Argent Bank Credit Card (x8349)
            </h3>
            <p className={styles["account-amount"]}>$184.30</p>
            <p className={styles["account-amount-description"]}>
              Current Balance
            </p>
          </div>
          <div
            className={`${styles["account-content-wrapper"]} ${styles["cta"]}`}
          >
            <button className={styles["transaction-button"]}>
              View transactions
            </button>
          </div>
        </section>
      </main>
    </>
  );
};
