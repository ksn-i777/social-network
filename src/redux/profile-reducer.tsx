const NEW_POST_TEXT = 'NEW-POST-TEXT';
const ADD_NEW_POST = 'ADD-NEW-POST';

export type PostType = {
    id:number,
    message:string,
    likes:number,
    ava:string,
};
export type ProfilePageType = {
    postsData:Array<PostType>,
    newPostText:string,
};

export type NewPostTextActionType = {
    type:typeof NEW_POST_TEXT,
    newText:string,
};
export type AddNewPostActionType = {
    type:typeof ADD_NEW_POST,
};
export type ProfileActionsType = NewPostTextActionType | AddNewPostActionType;


let initialState:ProfilePageType = {
    postsData: [
        {id: 1, message: 'Yaaahhhooo', likes: 77, ava: 'https://pm1.narvii.com/6783/e3b67784dbfabe6c0a7f15fa46043c2b522acfe5v2_hq.jpg'},
        {id: 2, message: 'Happy birthday to me!', likes: 100, ava: 'https://pm1.narvii.com/6783/e3b67784dbfabe6c0a7f15fa46043c2b522acfe5v2_hq.jpg'},
        {id: 3, message: 'Have a good day!', likes: 60, ava: 'https://pm1.narvii.com/6783/e3b67784dbfabe6c0a7f15fa46043c2b522acfe5v2_hq.jpg'},
        {id: 4, message: 'How are you?', likes: 30, ava: 'https://pm1.narvii.com/6783/e3b67784dbfabe6c0a7f15fa46043c2b522acfe5v2_hq.jpg'},
        {id: 5, message: 'Hi. It is my first post', likes: 15, ava: 'https://pm1.narvii.com/6783/e3b67784dbfabe6c0a7f15fa46043c2b522acfe5v2_hq.jpg'},
    ],
    newPostText: '',
};

export function profileReducer(state:ProfilePageType = initialState, action:ProfileActionsType):ProfilePageType {

    const copyState:ProfilePageType = {...state}

    if (action.type === NEW_POST_TEXT) {
        copyState.newPostText = action.newText;
        // вместо метода addPost
    } else if (action.type === ADD_NEW_POST) {
        const newPost:PostType = {
            id: 6,
            message: copyState.newPostText,
            likes: 0,
            ava: 'https://pm1.narvii.com/6783/e3b67784dbfabe6c0a7f15fa46043c2b522acfe5v2_hq.jpg'
        }
        copyState.postsData = [newPost, ...state.postsData]
        copyState.newPostText = '';
    }
    return copyState;
}
// колл-бэк, запускающий метод отслеживающий изменение текста поста в инпуте profilePage
export function newPostTextAC(text:string):NewPostTextActionType {
    return {
        type: NEW_POST_TEXT,
        newText: text,
    }
}
// колл-бэк, запускающий метод добавления поста
export function addNewPostAC():AddNewPostActionType {
    return {
        type: ADD_NEW_POST,
    }
}
