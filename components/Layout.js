import React from "react";
import styles from "../styles/Layout.module.css";

export default function Layout({ children }) {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h3>Layout her yerde !</h3>
        {children}
      </main>
    </div>
  );
}
