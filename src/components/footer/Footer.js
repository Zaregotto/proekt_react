import React from 'react';

import './foter.scss';

import {Link} from "react-router-dom";

const Footer = () => {
    return (
        <div className="footer" style={{backgroundImage: `url(${"https://rskrf.ru/upload/iblock/898/8987f6a80ceea6dc5fd1a60d2e943e03.jpg"})`}}>
            <div className="footer__content container">
                <div className="footer__content__logo">
                    <div className="logo">
                        <img src="https://e7.pngegg.com/pngimages/474/202/png-clipart-film-icon-video-camera-electronics-camera-icon-thumbnail.png" alt="logo" />
                        <Link to="/">NeoMovies</Link>
                    </div>
                </div>
                <div className="footer__content__menus">
                    <div className="footer__content__menu">
                        <Link to="/">Home</Link>
                        <Link to="/">Contact us</Link>
                        <Link to="/">Term of services</Link>
                        <Link to="/">About us</Link>
                    </div>
                    <div className="footer__content__menu">
                        <Link to="/">Live</Link>
                        <Link to="/">FAQ</Link>
                        <Link to="/">Premium</Link>
                        <Link to="/">Privacy policy</Link>
                    </div>
                    <div className="footer__content__menu">
                        <Link to="/">You must watch</Link>
                        <Link to="/">Recent release</Link>
                        <Link to="/">Top IMDB</Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export {Footer};
