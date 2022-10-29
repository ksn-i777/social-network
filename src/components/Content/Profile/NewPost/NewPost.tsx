import React, {ChangeEvent, KeyboardEvent} from "react";
import s from "./NewPost.module.css";

type NewPostPropsType = {
    changeNewPostText: (newText: string) => void,
    addNewPost: () => void,
    newPostText: string,
};

export function NewPost(props: NewPostPropsType) {
    
    let onChangeNewPostText = (e: ChangeEvent<HTMLInputElement>) => {
        let newText = e.currentTarget.value
        props.changeNewPostText(newText);
    };

    let onKeyAddNewPost = (e: KeyboardEvent<HTMLInputElement>) => {
        return e.code === "Enter" && props.newPostText !== '' ?  props.addNewPost() : null
    }

    let onAddNewPost = () => {
        return props.newPostText !== '' ?  props.addNewPost() : null
    };
    
    return (
        <div className={s.new}>
            <input
                value={props.newPostText}
                onChange={onChangeNewPostText}
                onKeyPress={onKeyAddNewPost}
                className={s.input}
                placeholder={'Enter a message'}
            />
            <button onClick={onAddNewPost} className={s.button}>Add post</button>
        </div>

    )
}