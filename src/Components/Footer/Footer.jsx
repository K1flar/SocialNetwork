import React from 'react';

import logoImg from './../../img/logo.svg';

const Footer = () => {
    return (
        <footer className='footer'>
            <div className='container'>
                <a href='#' className='logo'>
                    <img src={logoImg} />
                </a>
                <p className='copyright'>Copyright ©</p>
            </div>
        </footer>
    );
}

export default Footer;