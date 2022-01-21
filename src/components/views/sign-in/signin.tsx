import React, { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setError } from "../../../features/error/errorSlice";
import { setUser } from "../../../features/user/userSlice";
import { getUserProfile, login } from "../../../models/Api.service";
import { saveToSessionStorage } from "../../../store";
import { Header } from "../../modules/header/header";
import styles from "./signin.module.css";

export const SignIn: React.FunctionComponent = () => {
  const dispatch = useDispatch();
  const error = useSelector((state: any) => state.error.error);
  const HTMLEmail = useRef(null);
  const HTMLPassword = useRef(null);
  const navigate = useNavigate();

  const signIn = async () => {
    const email = HTMLEmail.current ? HTMLEmail.current["value"] : "";
    const password = HTMLPassword.current ? HTMLPassword.current["value"] : "";

    const result = await login(email, password);
    const infos = await getUserProfile(result.body.token);

    dispatch(
      setUser({
        email: email,
        firstName: infos.body.firstName,
        lastName: infos.body.lastName,
      })
    );

    saveToSessionStorage({
      user: {
        email: email,
        firstName: infos.body.firstName,
        lastName: infos.body.lastName,
      },
      token: result.body.token,
    });
  };

  return (
    <>
      <Header></Header>
      <main className="main bg-dark">
        <section className={styles["sign-in-content"]}>
          <i className={`fa fa-user-circle ${styles["sign-in-icon"]}`}></i>
          <h1>Sign In</h1>
          <p className={styles.error}>{error ? error : ""}</p>
          <form>
            <div className={styles["input-wrapper"]}>
              <label htmlFor="username">Username</label>
              <input type="text" id="username" ref={HTMLEmail} />
            </div>
            <div className={styles["input-wrapper"]}>
              <label htmlFor="password">Password</label>
              <input type="password" id="password" ref={HTMLPassword} />
            </div>
            <div className={styles["input-remember"]}>
              <input type="checkbox" id="remember-me" />
              <label htmlFor="remember-me">Remember me</label>
            </div>
            <button
              className={styles["sign-in-button"]}
              onClick={(e) => {
                e.preventDefault();
                signIn()
                  .then(() => {
                    navigate("/profile");
                  })
                  .catch((error) => {
                    const code = error.toString().match(/\d+/)[0];

                    switch (code) {
                      case "400":
                        dispatch(setError("Email ou Mot de passe incorrect"));
                        break;
                      case "500":
                        dispatch(setError("Erreur du serveur"));
                    }
                  });
              }}
            >
              Sign In
            </button>
          </form>
        </section>
      </main>
    </>
  );
};
