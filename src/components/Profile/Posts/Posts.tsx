import React from "react";
import Post from "./Post/Post";
import NewPost from "./NewPost/NewPost";


function Posts() {
    return (
        <div>
            <NewPost />
            <Post message={"Yaaahhhooo!"} likes={77}/>
            <Post message={"Happy birthday to me!"} likes={100}/>
            <Post message={"Have a good day!"} likes={60}/>
            <Post message={"How are you?"} likes={30}/>
            <Post message={"Hi. It is my first post"} likes={15}/>
        </div>

    )
}

export default Posts;
