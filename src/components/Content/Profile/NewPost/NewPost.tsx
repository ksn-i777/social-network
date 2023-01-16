import React from "react"
import s from "./NewPost.module.css"
import {Field, reduxForm} from 'redux-form'

//form

type NewPostReduxFormDatatype = {
    newPost: string
}

const NewPostReduxForm = reduxForm<NewPostReduxFormDatatype>({form: 'newPost'})(newPostForm)

function newPostForm(props:any) {
    console.log(props)
    return(
        <form onSubmit={props.handleSubmit} className={s.new}>
            <Field name={'newPost'} component={'input'} className={s.input} placeholder={'Enter a post message'}/>
            <button className={s.button}>Add post</button>
        </form>
    )
}

//new post

type NewPostPropsType = {
    addNewPost(newPostText:string):void,
};

export function NewPost(props:NewPostPropsType) {
    
    function onAddNewPost(newPostFormData:NewPostReduxFormDatatype):void {
        if(newPostFormData.newPost !== '') {props.addNewPost(newPostFormData.newPost)}
    }
    
    return <NewPostReduxForm onSubmit={onAddNewPost}/>
}