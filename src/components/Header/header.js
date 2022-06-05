import React, {useEffect, useRef} from 'react';

import { Link, useLocation } from "react-router-dom";

import './header.scss';

import {useNavigate} from 'react-router-dom';
import Switcher from "../Switcher/switcher";
import {UserInfo} from "../UserInfo";

const headerNav = [
    {
        display: 'Home',
        path: '/'
    },
    {
        display: 'Movies',
        path: '/movie'
    },
    {
        display: 'TV Series',
        path: '/tv'
    },

]
const Header = (params) => {
    const { setCategory } = params;
    const { pathname } = useLocation();
    const headerRef = useRef(null);
    const navigate = useNavigate();
    const active = headerNav.findIndex(e => e.path === pathname);

    useEffect(() => {
        const shrinkHeader = () => {
            if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
                headerRef.current.classList.add('shrink');
            } else {
                headerRef.current.classList.remove( 'shrink');
            }
        }
        window.addEventListener('scroll', shrinkHeader);
        return () => {
            window.removeEventListener('scroll', shrinkHeader);
        };
    }, []);

    return (
        <div ref={headerRef} className="header">
            <div className="header__wrap container">
                <div className="logo">
                    <Link to='/'><img src="https://e7.pngegg.com/pngimages/474/202/png-clipart-film-icon-video-camera-electronics-camera-icon-thumbnail.png" alt="logo"/></Link>
                    <Link to="/">NeoMovie</Link>
                </div>
                <UserInfo/>
                <ul className="header__nav">
                    {
                        headerNav.map((e, i) => (
                            <li key={i} className={`${i === active ? 'active' : ''}`}>
                                <button className="header_button" onClick={()=>{
                                        navigate(e.path, {replace: true})
                                        setCategory(e.path.replace('/',''))

                                    }}>
                                    {e.display}
                                </button>
                            </li>
                        ))
                    }
                    <Switcher/>
                </ul>
            </div>
        </div>
    );
};

export {Header};
