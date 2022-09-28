import React from "react";
import s from './Profile.module.css'
import Posts from "./Posts/Posts";
import NewPost from "./NewPost/NewPost";
import About from "./About/About";

function Profile() {
    return(
        <div className={s.profile}>
            <About />
            <NewPost />
            <Posts />
        </div>
    )
}

export default Profile;
