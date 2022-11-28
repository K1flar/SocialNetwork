import React from 'react';

import ownerPageCover from './../../img/ownerPageCover.jpg';
import avatar from './../../img/avatar.jpg';
import MyPosts from './MyPosts/MyPosts';
import Post from './Post/Post';

const Profile = () => {
    return (
        <>
            <div className='profileHeader'>
                <div className='profileHeader__cover'>
                    <img className='profileHeader__ownerPageCover' src={ownerPageCover} />
                </div>
                <div className='profileHeader__info'>
                    <img className='profileHeader__avatar' src={avatar} />
                    <h3 className='profileHeader__name'>Denis Davydov</h3>
                    <div className='profileHeader__about'>
                        <ul className='profileHeader__contacts'>
                            <li className='profileHeader__id'>@denisd</li>
                            <li className='profileHeader__email'>den1s-davydov@mail.ru</li>
                        </ul>
                        <ul className='profileHeader__personalInfo'>
                            <li><span>Date of Birth: </span>22 june</li>
                            <li><span>City: </span>Moscow</li>
                            <li><span>Education: </span>Школа миньета</li>
                        </ul>
                    </div>
                </div>
            </div>

            <MyPosts />
            <Post />
        </>
    );
}

export default Profile;
