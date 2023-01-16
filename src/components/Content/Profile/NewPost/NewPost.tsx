import React from 'react'
import s from './NewPost.module.css'
import {Field, reduxForm} from 'redux-form'
import {Input} from '../../../Common/ValidatedForms'
import {maxLengthVC, requiredField} from '../../../../validators/validators'

//form

const maxLength = maxLengthVC(10)

type NewPostReduxFormDatatype = {
    newPost: string
}

const NewPostReduxForm = reduxForm<NewPostReduxFormDatatype>({form: 'newPost'})(newPostForm)

function newPostForm(props:any) {
    return(
        <form onSubmit={props.handleSubmit} className={s.new}>
            <Field
                component={Input}
                name={'newPost'}
                className={s.input}
                placeholder={'Enter a post message'}
                validate={[requiredField, maxLength]}
            />
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