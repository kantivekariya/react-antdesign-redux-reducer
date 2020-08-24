import React from 'react';
import { useSelector, connect, useDispatch } from 'react-redux';
import ButtonComponent from '../common/button/Button';
import { userLogout } from '../redux/actions/auth/authentication';

const Home = () => {
    const userInfo = useSelector((state) => state.Auth.userInfo);
    console.log("userInfo", userInfo)
    const dispatch = useDispatch();
    const onClick = () => {
        console.log('1')
        dispatch(userLogout()).then((res) => {
            window.location.href = process.env.PUBLIC_URL;
        });
    }
    return (
        <>
            <h1>{userInfo.name}</h1>
            <ButtonComponent btnName="Logout" onClick={onClick} type="button" />
        </>
    )
};

const mapStateToProps = (state) => {
    console.log(state)
    return {
        userInfo: state.Auth.userInfo
    }
};

export default connect(mapStateToProps)(Home);