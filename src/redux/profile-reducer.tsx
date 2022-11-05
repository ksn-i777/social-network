const NEW_POST_TEXT = 'NEW-POST-TEXT';
const ADD_NEW_POST = 'ADD-NEW-POST';


export type PostType = {
    id: number,
    message: string,
    likes: number,
};
export type ProfilePageType = {
    postsData: Array<PostType>,
    newPostText: string,
};

export type NewPostTextActionType = {
    type: 'NEW-POST-TEXT',
    newText: string,
}
export type AddNewPostActionType = {
    type: 'ADD-NEW-POST',    
}
export type ProfileActionsType = NewPostTextActionType | AddNewPostActionType


let initialState:ProfilePageType = {
    postsData: [
        {id: 1, message: 'Yaaahhhooo', likes: 77},
        {id: 2, message: 'Happy birthday to me!', likes: 100},
        {id: 3, message: 'Have a good day!', likes: 60},
        {id: 4, message: 'How are you?', likes: 30},
        {id: 5, message: 'Hi. It is my first post', likes: 15},
    ],
    newPostText: '',
}

export function profileReducer (state = initialState, action: ProfileActionsType):ProfilePageType {

    let copyState = {...state}

    if (action.type === NEW_POST_TEXT) {
        copyState.newPostText = action.newText;
        // вместо метода addPost
    } else if (action.type === ADD_NEW_POST) {
        let newPost = {
            id: 6,
            message: copyState.newPostText,
            likes: 0,
        }
        copyState.postsData = [...state.postsData]
        copyState.postsData.push(newPost);
        copyState.newPostText = '';
    }
    return copyState;
}
// колл-бэк, запускающий метод отслеживающий изменение текста поста в инпуте profilePage
export const newPostTextAC = (text: string):NewPostTextActionType => {
    return {
        type: NEW_POST_TEXT,
        newText: text,
    }
}
// колл-бэк, запускающий метод добавления поста
export const addNewPostAC = ():AddNewPostActionType => {
    return {
        type: ADD_NEW_POST,
    }
}
