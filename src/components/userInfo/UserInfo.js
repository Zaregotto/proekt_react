import React from 'react';

import "./userInfo.css"
import {Link} from "react-router-dom";

const UserInfo = () => {
    return (
        <div className="user">
            <Link to='/' className="userInfo">Zaregotto <img src="https://img2.freepng.ru/20180520/iug/kisspng-computer-icons-user-profile-synonyms-and-antonyms-5b013f455c55c1.0171283215268083893782.jpg" alt="acc"/></Link>
            </div>
    );
};

export {UserInfo};
