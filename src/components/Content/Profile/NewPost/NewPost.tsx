import React from "react";
import s from "./NewPost.module.css";
import {actionAddNewPost, actionNewPostText} from '../../../../redux/store';

type NewPostPropsType = {
    dispatch: (action: any) => void,
    newPostText: string,
};

export function NewPost(props: NewPostPropsType) {
    let ref = React.createRef<HTMLTextAreaElement>();



    let newWord = () => {
        let newText = ref.current?.value;
        props.dispatch (actionNewPostText(newText));
    };

    let newPost = () => {
        if (ref.current?.value !== '') {
            props.dispatch (actionAddNewPost());
        }
    };

    return (
        <div className={s.new}>
            <textarea value={props.newPostText} onChange={ newWord } ref={ref} className={s.input} placeholder={'Enter a message'} />
            <button onClick={ newPost } className={s.button}>Add post</button>
        </div>

    )
};