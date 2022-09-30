import React from "react";
import s from './Profile.module.css'
import Posts from "./Posts/Posts";
import NewPost from "./NewPost/NewPost";
import About from "./About/About";

type ProfilePropsType = {
    postsData: any;
}

function Profile(props: ProfilePropsType) {
    return(
        <div className={s.profile}>
            <About />
            <NewPost />
            <Posts postsData={props.postsData}/>
        </div>
    )
}

export default Profile;
