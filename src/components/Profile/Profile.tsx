import React from "react";
import s from './Profile.module.css'
import Picture from "./Picture/Picture";
import Photo from "./Photo/Photo";
import Posts from "./Posts/Posts";

function Profile() {
    return(
        <div className={s.profile}>
            <Picture />
            <Photo />
            <Posts />
        </div>
    )
}

export default Profile;
