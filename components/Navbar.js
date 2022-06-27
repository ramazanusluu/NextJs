import React from "react";
import Link from "next/link";
import styles from "../styles/Navbar.module.css";

export default function Navbar() {
  return (
    <div>
      <nav className={styles.navbar}>
        <ul>
          <li>
            <Link href="/">
              <a>Home</a>
            </Link>
          </li>
          <li>
            <Link href="/about">
              <a>About</a>
            </Link>
          </li>
          <li>
            <Link href="/references/image">
              <a>Image</a>
            </Link>
          </li>
          <li>
            <Link href="/references">
              <a>Refrerences</a>
            </Link>
          </li>
          <li>
            <Link href="/fastRefresh">
              <a>Fast Refresh</a>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
