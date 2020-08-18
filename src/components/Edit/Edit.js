import React, { useState, useEffect } from 'react';
import moment from "moment";
import styles from "./Edit.module.css";
import Spinner from "../Spinner";
import Comments from "../Comments";
import NoPosts from "../NoPosts";
import { logout } from "../../services/auth";

const Edit = () => {
    const [commentsAreActive, setCommentsAreActive] = useState(false);
    const [currentPost, setCurrentPost] = useState(null);
    const [noPosts, setNoPosts] = useState(false);
    const [spinner, setSpinner] = useState(true);

    useEffect(() => {
        fetch("https://nameless-plains-23983.herokuapp.com/api/posts", {
            // fetch("http://localhost:3001/api/posts", {
            method: "GET",
            mode: "cors",
        })
            .then(res => {
                return res.json()
            })
            .then(response => {
                if (response.post[0]) {
                    setCurrentPost(response.post[0]);
                }
                else {
                    setNoPosts(true);
                }
            })
            .catch(error => {
                console.log(error);
            })
    }, [])

    useEffect(() => {
        if (noPosts) {
            setTimeout(() => {
                setSpinner(false);
            }, 1000);
        }
    }, [noPosts])

    useEffect(() => {
        if (currentPost) {
            setTimeout(() => {
                setSpinner(false);
            }, 1000);
        }
    }, [currentPost])

    const nextPost = () => {
        setSpinner(true);
        setCommentsAreActive(false);
        fetch(`https://nameless-plains-23983.herokuapp.com/api/posts/${currentPost._id}/next`, {
            // fetch(`http://localhost:3001/api/posts/${currentPost._id}/next`, {
            method: "GET",
            mode: "cors"
        })
            .then(res => {
                return res.json()
            })
            .then(response => {
                if (response.post) {
                    setCurrentPost(response.post[0]);
                }
            })
            .catch(error => {
                console.log(error);
            })
    }

    const prevPost = () => {
        setSpinner(true);
        setCommentsAreActive(false);
        fetch(`https://nameless-plains-23983.herokuapp.com/api/posts/${currentPost._id}/prev`, {
            // fetch(`http://localhost:3001/api/posts/${currentPost._id}/prev`, {
            method: "GET",
            mode: "cors"
        })
            .then(res => {
                return res.json()
            })
            .then(response => {
                if (response.post) {
                    setCurrentPost(response.post[0]);
                }
            })
            .catch(error => {
                console.log(error);
            })
    }

    const deletePost = () => {
        fetch(`https://nameless-plains-23983.herokuapp.com/api/posts/${currentPost._id}/delete`, {
            // fetch(`http://localhost:3001/api/posts/${currentPost._id}/delete`, {
            method: "DELETE",
            mode: "cors"
        })
            .then(() => {
                window.location.href = "/blog-author/home";
            })
            .catch(error => {
                console.log(error);
            })
    }

    const deleteComments = () => {
        fetch(`https://nameless-plains-23983.herokuapp.com/api/posts/${currentPost._id}/comments/delete`, {
            // fetch(`http://localhost:3001/api/posts/${currentPost._id}/comments/delete`, {
            method: "DELETE",
            mode: "cors"
        })
            .then((res) => {
                if (res) {
                    console.log(res);
                    window.location.href = "/blog-author/home";
                }
                else {
                    window.location.href = "/blog-author/error";
                }
            })
            .catch(error => {
                console.log(error);
            })
    }

    const seeHideComments = (e) => {
        const btn = e.target;
        if (e.target.innerText === "See Comments") {
            btn.disabled = true;
            setCommentsAreActive(!commentsAreActive);
            setTimeout(() => {
                btn.disabled = false
            }, 1000)
        }
        else {
            setCommentsAreActive(!commentsAreActive);
        }
    }

    return (
        spinner ?
            <Spinner />
            :
            currentPost ?
                <>
                    <div id={styles.mainContainer}>
                        <div className={styles.postContainer}>
                            <div id={styles.information}>
                                <p className={`${styles.postInfo} ${styles.postTitle}`}>{currentPost.title}</p>
                                <p className={`${styles.postBody} ${styles.postInfo}`}> {currentPost.text}</p>
                                <p className={styles.postInfo}>Posted: {moment(currentPost.timestamp).format('L')}</p>
                                <button className={styles.prevBtn} onClick={() => prevPost()}>Previous</button>
                                <button className={styles.nextBtn} onClick={() => nextPost()}>Next</button>
                            </div>
                        </div>
                        <div id={styles.btnContainer}>
                            <button className={styles.logoutBtn} onClick={() => logout()}>Logout</button>
                            <button className={`${styles.commentBtn} ${styles.deletePostBtn}`} onClick={() => deletePost()}>Delete Post</button>
                            <button className={`${styles.commentBtn} ${styles.deleteCommentsBtn}`} onClick={() => deleteComments()}>Delete Comments</button>
                            <button className={`${styles.commentBtn} ${styles.writeBtn}`} onClick={() => window.location.href = "/write"}>Write New Post</button>
                        </div>
                        <button className={styles.showCommentsBtn} onClick={(e) => seeHideComments(e)}>{commentsAreActive ? "Hide Comments" : "See Comments"}</button>
                        <Comments commentsAreActive={commentsAreActive} setCommentsAreActive={setCommentsAreActive} currentPost={currentPost} />
                    </div>
                </>
                :
                <NoPosts />
    )
}

export default Edit
