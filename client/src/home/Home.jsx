import React from 'react';
import { useSelector } from 'react-redux';

const Home = () => {
    const userInfo = useSelector((state) => state.Auth.userInfo);
    console.log("userInfo", userInfo)
    return (
        <>
            <h1>{userInfo.name}</h1>
        </>
    )
};

export default Home;