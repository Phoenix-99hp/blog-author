import React, { useState, useEffect } from 'react';
import { handleLogin, isLoggedIn } from "../../services/auth";
import Layout from "../../components/Layout";
import styles from "./Login.module.css";
import Spinner from "../../components/Spinner";
import { useHistory } from "react-router-dom";

const Login = () => {

    const [spinner, setSpinner] = useState(true);
    const history = useHistory();

    useEffect(() => {
        setTimeout(() => {
            setSpinner(false);
        }, 1000);
    }, [])

    useEffect(() => {
        if (isLoggedIn()) {
            history.push("/home");
        }
    })

    const loginReq = (e) => {
        e.preventDefault();
        const data = {
            password: e.target.previousElementSibling.value
        };
        fetch("https://nameless-plains-23983.herokuapp.com/api/login", {
            method: "POST",
            mode: "cors",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify(data)
        })
            .then(res => {
                return res.json()
            })
            .then(response => {
                if (response) {
                    handleLogin(response, history);
                }
                else {
                    history.push("/error");
                }
            })
            .catch(error => {
                history.push("/error");
            })

    }

    return (
        <Layout>
            {spinner ?
                <Spinner />
                :
                <form>
                    <label>Password:</label>
                    <input id={styles.password} type="password"></input>
                    <button id={styles.login} onClick={(e) => loginReq(e)}>Log In</button>
                </form >
            }
        </Layout>

    )
}

export default Login