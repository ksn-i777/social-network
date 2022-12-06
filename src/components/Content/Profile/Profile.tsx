import React from "react"
import s from './Profile.module.css'
import {About} from './About/About'
import {NewPostContainer} from './NewPost/NewPostContainer'
import {PostsContainer} from './Posts/PostsContainer'

export function Profile(props: any) {
    return(
        <div className={s.profile}>
            <About {...props.profile}/>
            <NewPostContainer/>
            <PostsContainer/>
        </div>
    )
}