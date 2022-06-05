import React from 'react';


import './button.css'


const Button = props => {
    const onClickButton = () => props.onClick ?? props.onClick();
    return (
        <button
            className={`btn ${props.className}`}
            onClick={onClickButton}
        >
            {props.children}
        </button>
    );
};

export const OutlineButton = props => {
    return (
        <button
            className={`btn-outline ${props.className}`}
            onClick={props.onClick ? () => props.onClick() : null}
        >
            {props.children}
        </button>
    )
};

Button.propTypes = {
    onClick: () => {}
};

export {Button};
