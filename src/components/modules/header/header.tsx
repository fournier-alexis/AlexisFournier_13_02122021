import React from "react";
import styles from "./header.module.css";
import logo from "./../../../assets/images/argentBankLogo.png";
import { useDispatch, useSelector } from "react-redux";
import { User } from "../../../types/User";
import { Link } from "react-router-dom";
import { setError } from "../../../features/error/errorSlice";
import { setUser } from "../../../features/user/userSlice";

export const Header: React.FunctionComponent = () => {
  const dispatch = useDispatch();
  const user: User = useSelector((state: any) => state.user.user);

  const signOut = () => {
    sessionStorage.clear();
    dispatch(setUser(undefined));
    dispatch(setError(undefined));
  };

  return (
    <header>
      <nav className={styles["main-nav"]}>
        <Link className={styles["main-nav-logo"]} to="/">
          <img
            className={styles["main-nav-logo-image"]}
            src={logo}
            alt="Argent Bank Logo"
          />
          <h1 className="sr-only">Argent Bank</h1>
        </Link>
        {!user ? (
          <div>
            <Link className={styles["main-nav-item"]} to="/sign-in">
              <i className="fa fa-user-circle"></i>
              Sign In
            </Link>
          </div>
        ) : (
          <div>
            <Link className={styles["main-nav-item"]} to="/profile">
              <i className="fa fa-user-circle"></i>
              {user.firstName}
            </Link>
            <Link
              className={styles["main-nav-item"]}
              to="/"
              onClick={() => {
                signOut();
              }}
            >
              <i className="fa fa-sign-out"></i>
              Sign Out
            </Link>
          </div>
        )}
      </nav>
    </header>
  );
};
