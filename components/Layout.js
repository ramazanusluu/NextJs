import React from 'react'
import styles from "../styles/Layout.module.css"

export default function Layout({children}) {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1>Layout Her yerde !</h1>
        {children}
      </main>
    </div>
  )
}
