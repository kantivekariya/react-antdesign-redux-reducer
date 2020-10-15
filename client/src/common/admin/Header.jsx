import React from 'react';
import { useDispatch } from 'react-redux';
import $ from 'jquery';
import { Layout } from 'antd';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { userLogout } from '../../redux/actions/auth/authentication';
import { Link } from 'react-router-dom';
import { layoutToggele } from '../../redux/actions/layoutAction';
const { Header } = Layout;

const SiteHeader = (props) => {
    const dispatch = useDispatch();


    const LogOut = () => {
        dispatch(userLogout())
            .then((res) => {
                console.log(res)
            })
            .catch((err) => {
                console.log('userLogin err', err);
            });
    }
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
                                        props.dispatch(layoutToggele());
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
                            <img src={require('../../assets/images/shipments.svg')} title="Mware" alt="Mware" />
                        </Link>
                    )}
                </nav>
            </Header>
        </>
    )
}

export default SiteHeader;