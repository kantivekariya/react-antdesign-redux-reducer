import React from 'react';
import { useDispatch } from 'react-redux';
import $ from 'jquery';
import { Dropdown, Layout, Menu } from 'antd';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';

import { userLogout } from '../../redux/actions/auth/authentication';
import { Link } from 'react-router-dom';
import { layoutToggele } from '../../redux/actions/layoutAction';
const { Header } = Layout;

const SiteHeader = (props) => {
    console.log("props 22", props)
    const dispatch = useDispatch();

    const handleMenuClick = ({ key }) => {
        $('body').removeClass('menu-overlay');
        if (key === 'logout') {
            dispatch(userLogout()).then((res) => {
                window.location.href = process.env.PUBLIC_URL;
            });
        }
    };
    const dropdownVisibleChange = (isOpen) => {
        if (isOpen) {
            $('body').addClass('menu-overlay');
        } else {
            $('body').removeClass('menu-overlay');
        }
    };


    const userMenu = (props) => {
        return (
            <Menu className="header-dropdown user-dropdown">
                <div className="px-4 py-2">
                    <div className="media border-bottom pb-3 d-flex align-items-center">
                        <img className="rounded-circle mr-3 align-self-center user-avtar-img" src={require('../../assets/images/avatar.jpeg')} title="User" alt="User" />
                        <div className="media-body">
                            <h5 className="mt-0 text-primary">
                                kanti vekariya
                            </h5>
                            <p className="mb-0">kanti@gmail.com</p>
                        </div>
                    </div>
                    <Menu onClick={handleMenuClick} className="header-dropdown mt-3 border-0">
                        <Menu.Item className="pl-0 m-0">
                            <Link to={`/user-profile`}>User Profile</Link>
                        </Menu.Item>
                        <Menu.Item className="pl-0 m-0">
                            <Link className=" pb-3" to={`/`}>
                                Help
                        </Link>
                        </Menu.Item>
                        <hr />
                        <Menu.Item key="logout" className="pl-0 mt-3 mb-0 text-danger">
                            Logout
                        </Menu.Item>
                    </Menu>
                </div>
            </Menu>
        );
    };
    return (
        <>
            <Header className="p-0 d-flex z-overly-10">
                <nav className="d-flex align-items-center w-100 bg-white px-3 px-lg-4 py-0">
                    {props.isSideBarShow && (
                        <div className="mr-auto">
                            <Link
                                className="py-2 px-3 h5 mb-0 text-white nav-button"
                                onClick={(e) => {
                                    e.preventDefault();
                                    if (window.innerWidth > 1199) {
                                        dispatch(layoutToggele());
                                    } else {
                                        $('body').addClass('mobile-sider');
                                    }
                                }}
                                to={`/`}
                            >
                                <FontAwesomeIcon icon={faBars} className="trigger" />
                            </Link>
                        </div>
                    )}
                    {!props.isSideBarShow && (
                        <Link to={`/home/dashboard`} className="mr-auto">
                            {/* <img src={require('../../assets/images/shipments.svg')} title="shrihari" alt="shrihari" /> */}
                            <h3>Shri Hari</h3>
                        </Link>
                    )}
                    <Dropdown overlay={() => userMenu()} trigger={['click']} onVisibleChange={dropdownVisibleChange}>
                        <Link to={``} className="nav-link pl-2 pl-lg-4 pr-0 user-menu">
                            {/* <img className="rounded-circle mr-2" src={require('../../assets/images/user.jpeg')} title="User" alt="User" /> */}
                            <img className="rounded-circle mr-3 align-self-center user-avtar-img" src={require('../../assets/images/avatar.jpeg')} title="User" alt="User" />
                            <span className="d-none d-lg-inline-block">
                                kanti vekariya
                            </span>{' '}
                            <FontAwesomeIcon className="ml-2 align-middle" icon={faAngleDown} />
                        </Link>
                    </Dropdown>
                </nav>
            </Header>
        </>
    )
}

export default SiteHeader;