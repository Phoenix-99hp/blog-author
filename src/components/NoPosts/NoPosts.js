import React from 'react';
import styles from "./NoPosts.module.css";

const NoPosts = () => {
    return (
        <div className={styles.postContainer}>
            <p className={styles.postBody}>There are currently no posts.</p>
        </div>
    )
}

export default NoPosts
