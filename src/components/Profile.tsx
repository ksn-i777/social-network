import React from "react";
import s from './Profile.module.css'

function Profile() {
    return(
        <div className={s.profile}>
            <div><img src="https://bipbap.ru/wp-content/uploads/2017/04/0_7c779_5df17311_orig.jpg" alt="picture"/></div>
            <div>ava</div>
            <div>posts
                <div>new post</div>
                <div>posts</div>
            </div>
        </div>
    )
}

export default Profile;
