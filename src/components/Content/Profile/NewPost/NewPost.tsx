import React, {ChangeEvent} from "react";
import s from "./NewPost.module.css";

type NewPostPropsType = {
    changeNewPostText: (newText: string) => void,
    addNewPost: () => void,
    newPostText: string,
};

export function NewPost(props: NewPostPropsType) {
    
    let onChangeNewPostText = (e: ChangeEvent<HTMLTextAreaElement>) => {
        let newText = e.currentTarget.value
        props.changeNewPostText(newText);
    };

    let onAddNewPost = () => {
        if (props.newPostText !== '') {
            props.addNewPost();
        }
    };

    return (
        <div className={s.new}>
            <textarea value={props.newPostText} onChange={onChangeNewPostText} className={s.input} placeholder={'Enter a message'} />
            <button onClick={onAddNewPost} className={s.button}>Add post</button>
        </div>

    )
}