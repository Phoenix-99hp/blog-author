import React, { useState, useEffect } from 'react';
import styles from "./Write.module.css";
import Spinner from "../Spinner";
import { getUser } from "../../services/auth";
import { useHistory } from "react-router-dom";

const Write = () => {

    const [spinner, setSpinner] = useState(true);
    const history = useHistory();

    useEffect(() => {
        setTimeout(() => {
            setSpinner(false);
        }, 1000);
    }, [])

    const submitPost = (e) => {
        e.preventDefault();
        const newPost = {
            title: e.target.parentElement.previousElementSibling.previousElementSibling.children[1].value.trim(),
            text: e.target.parentElement.previousElementSibling.value.trim(),
            user: getUser()
        }
        // fetch("https://nameless-plains-23983.herokuapp.com/api/posts/new", {
        fetch("http://localhost:3001/api/posts/new", {
            method: "POST",
            mode: "cors",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify(newPost)

        })
            .then(res => {
                return res.json();
            })
            .then(response => {
                if (response.updated) {
                    // window.location.href = "/blog-author/home";
                    history.replace("/home");
                }
                else {
                    // window.location.href = "/blog-author/error";
                    history.replace("/error");
                }
            })
            .catch(error => {
                history.replace("/error");
            })
    }

    return (
        spinner ?
            <Spinner />
            :
            <div id={styles.mainContainer}>
                <div id={styles.inputContainer}>
                    <label>Title: </label>
                    <input id={styles.postTitle} />
                </div>
                <textarea id={styles.postArea} />
                <div className={styles.submitCancelContainer}>
                    <button id={styles.submitCommentBtn} onClick={(e) => submitPost(e)}>Submit Post</button>
                    <button id={styles.cancelBtn} onClick={() => history.replace("/home")}>Cancel</button>
                </div>
            </div>
    )
}

export default Write