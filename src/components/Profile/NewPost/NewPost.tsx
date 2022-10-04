import React from "react";
import s from "./NewPost.module.css";

function NewPost(props: any) {
    let ref = React.createRef<HTMLTextAreaElement>();

    let newPost = () => {
        if (ref.current?.value !== (null || '')) {
            props.addPost(); 
        }        
    }

    let newWord = () => {
        let newText = ref.current?.value;
        props.changeWord(newText);
    }

    
    return (
        <div className={s.new}>
            <textarea value={props.newPostText} onChange={ newWord } ref={ref} className={s.input} placeholder={'Enter a message'} />
            <button onClick={ newPost } className={s.button}>Add post</button>
        </div>

    )
}

export default NewPost;
