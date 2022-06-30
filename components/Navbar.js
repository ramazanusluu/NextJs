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
              <a>
                <img
                  src="/images/nextlogo.png"
                  alt="logo"
                  width="100px"
                  height="40px"
                />
              </a>
            </Link>
          </li>
          <li>
            <Link href="/about">
              <a>About</a>
            </Link>
          </li>
          <li>
            <Link href="/optimizasyon">
              <a>Rotuer Page</a>
            </Link>
          </li>
          <li>
            <Link href="/optimizasyon/img">
              <a>Image Optimization</a>
            </Link>
          </li>

          <li>
            <Link href="/fastRefresh">
              <a>Fast Refresh</a>
            </Link>
          </li>
          <li>
            <Link href="/fetching">
              <a>Data Fetching</a>
            </Link>
          </li>
          <li>
            <Link href="/fetching2">
              <a>Data Fetching 2</a>
            </Link>
          </li>
          <li>
            <Link href="/training">
              <a>Training(api)</a>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
