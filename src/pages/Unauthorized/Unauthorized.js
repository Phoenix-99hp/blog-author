import React, { useState, useEffect } from 'react'
import { Link } from "react-router-dom";
import styles from "./Unauthorized.module.css";
import Spinner from "../../components/Spinner";


const Unauthorized = () => {

    const [spinner, setSpinner] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setSpinner(false);
        }, 1000);
    }, [])

    return (
        spinner ?
            <Spinner />
            :
            <>
                <p id={styles.error}>
                    Error: <span id={styles.errorSpan}>You are not authorized to view this page.</span>
                </p>
                <Link id={styles.link} to="/">Back to Login</Link>
            </>
    )
}

export default Unauthorized
