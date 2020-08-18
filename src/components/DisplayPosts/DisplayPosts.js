import React, { useEffect, useState } from 'react';
import NoPosts from "../NoPosts";
import Spinner from "../Spinner";
import { useHistory } from "react-router-dom";

const DisplayPosts = () => {
    const [writePost, setWritePost] = useState(false);
    const [currentPost, setCurrentPost] = useState(null);
    const [spinner, setSpinner] = useState(true);
    const history = useHistory();

    useEffect(() => {
        fetch("https://nameless-plains-23983.herokuapp.com/api/posts", {
            method: "GET",
            mode: "cors",
        })
            .then(res => {
                return res.json()
            })
            .then(response => {
                if (response.post) {
                    setCurrentPost(response.post[0]);
                    setTimeout(() => {
                        setSpinner(false);
                    }, 1000)
                }
            })
            .catch(error => {
                history.push("/error");
            })
    }, [])

    const showPosts = () => {
        return (
            writePost ? <Write /> : currentPost ? <Edit /> : <NoPosts />
        )
    }

    return (
        spinner ? <Spinner /> : showPosts()
    )
}

export default DisplayPosts