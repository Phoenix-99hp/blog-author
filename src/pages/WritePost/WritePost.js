import React from 'react';
import Layout from "../../components/Layout";
import Write from "../../components/Write";
import { isLoggedIn } from "../../services/auth";
import Unauthorized from "../Unauthorized";

const WritePost = () => {
    return (
        <Layout>
            {isLoggedIn() ? <Write /> : <Unauthorized />}
        </Layout>
    )
}

export default WritePost
