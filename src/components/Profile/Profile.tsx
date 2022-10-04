import React from "react";
import s from './Profile.module.css'
import Posts from "./Posts/Posts";
import NewPost from "./NewPost/NewPost";
import About from "./About/About";


function Profile(props: any) {
    return(
        <div className={s.profile}>
            <About />
            <NewPost changeWord={props.changeWord} newPostText={props.state.newPostText} addPost={props.addPost}/>
            <Posts postsData={props.state.postsData}/>
        </div>
    )
}

export default Profile;
