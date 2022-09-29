import React from "react";
import Post from "./Post/Post";
import s from "./Posts.module.css"

let postsData = [
    {id: 1, message: 'Yaaahhhooo', likes: 77},
    {id: 2, message: 'Happy birthday to me!', likes: 100},
    {id: 3, message: 'Have a good day!', likes: 60},
    {id: 4, message: 'How are you?', likes: 30},
    {id: 5, message: 'Hi. It is my first post', likes: 15},
];

function Posts() {
    return (
        <div className={s.posts}>
            <Post id={postsData[0].id} message={postsData[0].message} likes={postsData[0].likes}/>
            <Post id={postsData[1].id} message={postsData[1].message} likes={postsData[1].likes}/>
            <Post id={postsData[2].id} message={postsData[2].message} likes={postsData[2].likes}/>
            <Post id={postsData[3].id} message={postsData[3].message} likes={postsData[3].likes}/>
            <Post id={postsData[4].id} message={postsData[4].message} likes={postsData[4].likes}/>
        </div>

    )
}

export default Posts;
