import React from 'react';

import pointer from './../../../img/pointer.svg';
import avatar from './../../../img/avatar.jpg';

const MyPosts = () => {
    return (
        <div className='myPosts'>
            <h3 className='myPosts__header'>My Posts</h3>
            <div className='myPosts__content'>
                <img className='myPosts__avatar' src={avatar} />
                <form className='myPosts__form'>
                    <textarea className='myPosts__text' placeholder="Your news..."></textarea>
                    <button className='send myPosts__send'>
                        <span>Send</span>
                        <img src={pointer} />
                    </button>
                </form>
            </div>
        </div>
    );
}

export default MyPosts;