import React from 'react';

import './page-header.scss'


const PageHeader = props => {
    return (
        <div className="page-header" style={{backgroundImage: `url(${"https://rskrf.ru/upload/iblock/898/8987f6a80ceea6dc5fd1a60d2e943e03.jpg"})`}}>
            <h2>{props.children}</h2>
        </div>
    );
}

export {PageHeader};
