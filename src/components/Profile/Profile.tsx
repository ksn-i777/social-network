import React from "react";
import Picture from "./Picture/Picture";
import Photo from "./Photo/Photo";
import Posts from "./Posts/Posts";

function Profile() {
    return(
        <div>
            <Picture />
            <Photo />
            <Posts />
        </div>
    )
}

export default Profile;
