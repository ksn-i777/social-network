import {profileReducer} from './profile-reducer';
import {messagesReducer} from './messages-reducer';
import {navbarReducer} from './navbar-reducer';

export type StateType = {
    profilePage: ProfilePageType,
    messagesPage: MessagesPageType,
    navbar: NavbarType,
};

export type ProfilePageType = {
    postsData: Array<PostType>,
    newPostText: string,
};
export type PostType = {
    id: number,
    message: string,
    likes: number,
};

export type MessagesPageType = {
    usersData: Array<UserType>,
    textsData: Array<TextType>,
    newMessageText: string,
};
export type UserType = {
    id: number,
    name: string,
    ava: string,
};
export type TextType = {
    id: number,
    message: string,
};

export type NavbarType = {
    onlineFriendsData: Array<OnlineFriendType>,
};
export type OnlineFriendType = {
    id: number,
    name: string,
    ava: string,
};

export let store = {
    _state: {
        profilePage: {
            postsData: [
                {id: 1, message: 'Yaaahhhooo', likes: 77},
                {id: 2, message: 'Happy birthday to me!', likes: 100},
                {id: 3, message: 'Have a good day!', likes: 60},
                {id: 4, message: 'How are you?', likes: 30},
                {id: 5, message: 'Hi. It is my first post', likes: 15},
            ],
            newPostText: '',
        },
        messagesPage: {
            usersData: [
                {id: 1, name: 'Serg Sergeev', ava: 'https://cpad.ask.fm/952/205/196/-69996983-1sqedpc-htihnh1g7el9hf0/original/avatar.jpg'},
                {id: 2, name: 'Eva Ivanova', ava: 'https://otvet.imgsmail.ru/download/1574387_76738d630770e903cbe0a47a813d08b5_800.jpg'},
                {id: 3, name: 'Leon Leonov', ava: 'https://cpad.ask.fm/952/205/196/-69996983-1sqedpc-htihnh1g7el9hf0/original/avatar.jpg'},
                {id: 4, name: 'Kira Kirova', ava: 'https://otvet.imgsmail.ru/download/1574387_76738d630770e903cbe0a47a813d08b5_800.jpg'},
                {id: 5, name: 'Lera Lerova', ava: 'https://cpad.ask.fm/952/205/196/-69996983-1sqedpc-htihnh1g7el9hf0/original/avatar.jpg'},
            ],
            textsData: [
                {id: 1, message: '111'},
                {id: 2, message: '222'},
                {id: 3, message: '333'},
                {id: 4, message: '444'},
                {id: 5, message: '555'},
            ],
            newMessageText: '',
        },
        navbar: {
            onlineFriendsData: [
                {id: 1, name: 'Serg Sergeev', ava: 'https://otvet.imgsmail.ru/download/1574387_76738d630770e903cbe0a47a813d08b5_800.jpg'},
                {id: 2, name: 'Eva Ivanova', ava: 'https://cpad.ask.fm/952/205/196/-69996983-1sqedpc-htihnh1g7el9hf0/original/avatar.jpg'},
                {id: 3, name: 'Leon Leonov', ava: 'https://otvet.imgsmail.ru/download/1574387_76738d630770e903cbe0a47a813d08b5_800.jpg'},
            ],
        },
    },

    // ОПИСАНИЕ ООП, КОТОРОЕ ИСПОЛЬЗУЕТСЯ ДАЛЕЕ => 36-38 УРОКИ

    // нашлась функция ререндера дерева, которую искали ниже по коду,
    // но она не делает ничего полезного, т.к. нет функционала, который она получит ниже
    _callSubscriber (state: StateType) {
    },

    getState () {
        return this._state
    },
    // здесь функция ререндера из этого файла переопределяется на функцию ререндера из файла индекс
    // получена функция ререндера из индекса с помощью колл бэка subscribe 
    subscribe (rerenderFunction: (state: StateType) => void) {
        this._callSubscriber = rerenderFunction;
    },

    // метод, заменяющий отдельные методы, которые были до этого, забрав их логику внутрь себя в завизимости от свойства тип объекта экшн
    dispatch (action: any) {
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.messagesPage = messagesReducer(this._state.messagesPage, action);
        this._state.navbar = navbarReducer(this._state.navbar, action);
        this._callSubscriber(this._state);
    },
}