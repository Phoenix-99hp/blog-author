import React, { useState, useEffect } from 'react';
import styles from "./Comments.module.css";
import moment from "moment";
import Spinner from "../Spinner";
import { useHistory } from "react-router-dom";

const Comments = ({ commentsAreActive, currentPost }) => {

    const [commentSpinner, setCommentSpinner] = useState(false);
    const [active, setActive] = useState(false);
    const history = useHistory();

    useEffect(() => {
        if (commentsAreActive) {
            setCommentSpinner(true);
            setTimeout(() => {
                setCommentSpinner(false);
            }, 1000);
        }
    }, [commentsAreActive])

    useEffect(() => {
        if (commentsAreActive) {
            setActive(true);
        }
        else {
            setActive(false);
        }
    }, [commentsAreActive])

    const deleteComment = (e) => {
        const commentToDelete = e.target.parentElement.dataset.id;
        fetch(`https://nameless-plains-23983.herokuapp.com/api/comments/${commentToDelete}/delete`, {
            method: "DELETE",
            mode: "cors"
        })
            .then((response) => {
                if (response) {
                    history.replace("/");
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
        commentSpinner ?
            <Spinner />
            :
            currentPost.comments[0] ?
                currentPost.comments.map((comment, index) => {
                    return (
                        <div data-id={comment._id} className={!active ? styles.commentsInactive : styles.commentsActive} key={index}>
                            <p className={`${styles.commentInfo} ${styles.commentBody}`}>{comment.text}</p>
                            <p className={`${styles.commentInfo} ${styles.paddingLast}`}><span id={styles.commentName}>{comment.name}</span> - {moment(comment.timestamp).format('L')}</p>
                            <button className={styles.deleteBtn} onClick={(e) => deleteComment(e)}>Delete Comment</button>
                        </div>
                    )
                })
                :
                <div id={active ? styles.noCommentActive : styles.noCommentInactive}>
                    <p>There are no comments for this post.</p>
                </div>


    )
}

export default Comments
