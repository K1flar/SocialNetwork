import React from 'react';

import logoImg from './../../img/logo.svg';

const Header = () => {
    return (
        <header className='header'>
            <div className='container'>
                <a href='#' className='logo'>
                    <img src={logoImg} />
                </a>
            </div>
        </header>
    );
}

export default Header;
