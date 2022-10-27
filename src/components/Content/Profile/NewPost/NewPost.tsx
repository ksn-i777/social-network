import React, {ChangeEvent} from "react";
import s from "./NewPost.module.css";
import {actionAddNewPost, actionNewPostText} from '../../../../redux/profile-reducer';

type NewPostPropsType = {
    dispatch: (action: any) => void,
    newPostText: string,
};

export function NewPost(props: NewPostPropsType) {
    
    let onChangeNewPostText = (e: ChangeEvent<HTMLTextAreaElement>) => {
        let newText = e.currentTarget.value
        props.dispatch (actionNewPostText(newText));
    };

    let addNewPost = () => {
        if (props.newPostText !== '') {
            props.dispatch (actionAddNewPost());
        }
    };

    return (
        <div className={s.new}>
            <textarea value={props.newPostText} onChange={onChangeNewPostText} className={s.input} placeholder={'Enter a message'} />
            <button onClick={addNewPost} className={s.button}>Add post</button>
        </div>

    )
};