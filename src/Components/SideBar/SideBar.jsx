import React from 'react';

import settingsImg from './../../img/settings.svg';

const SideBar = () => {
    return (
        <aside className='sidebar'>
            <ul className='sidebar__nav'>
                <li className='sidebar__item'>
                    <a href='#'>Profile</a>
                </li>
                <li className='sidebar__item'>
                    <a href='#'>Messages</a>
                </li>
                <li className='sidebar__item'>
                    <a href='#'>News</a>
                </li>
                <li className='sidebar__item'>
                    <a href='#'>Music</a>
                </li>

                <li className='sidebar__item_settings'>
                    <div className='settingsIcon'>
                        <img src={settingsImg} />
                    </div>
                    <a href='#'>Settings</a>
                </li>
            </ul>
        </aside>
    );
}

export default SideBar;