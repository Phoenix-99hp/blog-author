import React, { useState, useEffect } from 'react';
import Layout from "../../components/Layout";
import Spinner from "../../components/Spinner";
import styles from "./Error.module.css";
import { Link } from "react-router-dom";
import { isLoggedIn } from '../../services/auth';
import Unauthorized from "../Unauthorized";

const Error = () => {

    const [spinner, setSpinner] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setSpinner(false);
        }, 1000);
    }, [])

    return (
        <Layout>
            {spinner ?
                <Spinner />
                :
                isLoggedIn() ?
                    <>
                        <p id={styles.error}>
                            Error: <span id={styles.errorSpan}>Post must have a title and body.</span>
                        </p>
                        <Link id={styles.link} to="/home">Back to Home</Link>
                    </>
                    :
                    <Unauthorized />
            }
        </Layout>
    )
}

export default Error
