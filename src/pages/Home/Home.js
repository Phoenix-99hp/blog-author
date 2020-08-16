import React from 'react'
import Layout from "../../components/Layout";
import Edit from "../../components/Edit";
import { isLoggedIn } from "../../services/auth";
import Unauthorized from "../Unauthorized";

const Home = () => {
    return (
        <Layout>
            {isLoggedIn() ? <Edit /> : <Unauthorized />}
        </Layout>
    )
}

export default Home
