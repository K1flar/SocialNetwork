import React from 'react';

import avatar from './../../../img/avatar.jpg';

const Post = () => {
    return (
        <div className='post'>
            <img className='post__avatar' src={avatar} />
            <p className='post__content'>Hey, why nobody loves me?</p>
        </div>
    );
}

export default Post;