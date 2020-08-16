import React from 'react'
import styles from "./Layout.module.css";

const Layout = ({ children }) => {
    return (
        <div id={styles.container}>
            <main id={styles.main}>
                <h1>Blog</h1>
                {children}
            </main>
        </div>
    )
}

export default Layout
