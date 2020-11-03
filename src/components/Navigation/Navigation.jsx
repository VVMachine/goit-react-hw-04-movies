import React from "react";
import { NavLink } from "react-router-dom";

import styles from "../Navigation/Navigation.module.css";

export default function Navigation() {
  return (
    <ul className={styles.navigationList}>
      <li>
        <NavLink to="/" exact className={styles.link} activeClassName={styles.activeLink}>
          Home
        </NavLink>
      </li>
      <li>
        <NavLink to="/movies" className={styles.link} activeClassName={styles.activeLink}>
          Movies
        </NavLink>
      </li>
    </ul>
  );
}
