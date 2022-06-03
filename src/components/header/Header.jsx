import React, {useEffect, useRef} from 'react';

import { Link, useLocation } from "react-router-dom";

import './header.scss';

import logo from '../../resources/logo.jpeg'
import {useNavigate} from 'react-router-dom';

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
                    <img src={logo} alt="logo"/>
                    <Link to="/">tMovies</Link>
                </div>
                <ul className="header__nav">
                    {
                        headerNav.map((e, i) => (
                            <li key={i} className={`${i === active ? 'active' : ''}`}>
                                <button onClick={()=>{
                                        console.log(e.path);
                                        navigate(e.path, {replace: true})
                                        setCategory(e.path.replace('/',''))
                                    }}>
                                    {e.display}
                                </button>
                            </li>
                        ))
                    }
                </ul>
            </div>
        </div>
    );
};

export {Header};
