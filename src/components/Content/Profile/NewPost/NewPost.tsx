import React, {ChangeEvent, KeyboardEvent} from "react";
import s from "./NewPost.module.css";

type NewPostPropsType = {
    newPostText: string,
    changeNewPostText(newText:string):void,
    addNewPost():void,
};

export function NewPost(props:NewPostPropsType) {
    
    function onChangeNewPostText(e:ChangeEvent<HTMLInputElement>):void {
        const newText:string = e.currentTarget.value
        props.changeNewPostText(newText);
    }

    function onKeyAddNewPost(e:KeyboardEvent<HTMLInputElement>):void|null {
        return e.code === "Enter" && props.newPostText !== '' ?  props.addNewPost() : null
    }

    function onAddNewPost():void|null {
        return props.newPostText !== '' ?  props.addNewPost() : null
    }
    
    return (
        <div className={s.new}>
            <input
                value={props.newPostText}
                onChange={onChangeNewPostText}
                onKeyPress={onKeyAddNewPost}
                className={s.input}
                placeholder={'Enter a post message'}
            />
            <button onClick={onAddNewPost} className={s.button}>Add post</button>
        </div>

    )
}