import React, { useEffect, useState } from 'react';
import NoPosts from "../NoPosts";
import Spinner from "../Spinner";

const DisplayPosts = () => {
    const [writePost, setWritePost] = useState(false);
    const [currentPost, setCurrentPost] = useState(null);
    const [spinner, setSpinner] = useState(true);

    useEffect(() => {
        // fetch("https://nameless-plains-23983.herokuapp.com/api/posts", {
        fetch("http://localhost:3001/api/posts", {
            method: "GET",
            mode: "cors",
        })
            .then(res => {
                return res.json()
            })
            .then(response => {
                if (response.post) {
                    console.log(response.post[0]);
                    setCurrentPost(response.post[0]);
                    setTimeout(() => {
                        setSpinner(false);
                    }, 1000)
                }
            })
            .catch(error => {
                console.log(error);
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