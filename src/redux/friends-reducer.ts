import {v1} from 'uuid';

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';

export type FriendType = {
    id:string,
    name:string,
    followed:boolean,
    status:string,
    location:{
        country:string,
        city:string,
    },
    photo:string,
};
export type FriendsPageType = {
    friendsData:Array<FriendType>,
};

export type FollowActionType = {
    type:typeof FOLLOW,
    userId:string,
};
export type UnfollowActionType = {
    type:typeof UNFOLLOW,
    userId:string,
};
export type FriendsActionsType = FollowActionType | UnfollowActionType;


const initialState:FriendsPageType = {
    friendsData: [
        {id: v1(), name: 'Alex', followed: true, status: 'blablabla1', location: {country: 'Belarus', city: 'Minsk'}, photo: 'https://avatarko.ru/img/kartinka/25/zhivotnye_kot_prikol_text_24177.jpg'},
        {id: v1(), name: 'Serg', followed: false, status: 'blablabla2', location: {country: 'Italy', city: 'Rome'}, photo: 'https://avatarko.ru/img/kartinka/25/zhivotnye_kot_prikol_text_24177.jpg'},
        {id: v1(), name: 'Petr', followed: true, status: 'blablabla3', location: {country: 'Kazahstan', city: 'Astana'}, photo: 'https://avatarko.ru/img/kartinka/25/zhivotnye_kot_prikol_text_24177.jpg'},
        {id: v1(), name: 'Ivan', followed: false, status: 'blablabla4', location: {country: 'Uzbekistan', city: 'Taskent'}, photo: 'https://avatarko.ru/img/kartinka/25/zhivotnye_kot_prikol_text_24177.jpg'},
        {id: v1(), name: 'Gleb', followed: true, status: 'blablabla5', location: {country: 'USA', city: 'Washington'}, photo: 'https://avatarko.ru/img/kartinka/25/zhivotnye_kot_prikol_text_24177.jpg'},
    ],
};

export function friendsReducer(state:FriendsPageType = initialState, action:FriendsActionsType):FriendsPageType {

    const copyState:FriendsPageType = {...state}

    switch (action.type) {
        case FOLLOW:
            copyState.friendsData = state.friendsData.map(el => el.id === action.userId ? {...el, followed: true} : el)
            return copyState
        case UNFOLLOW:
            copyState.friendsData = state.friendsData.map(el => el.id === action.userId ? {...el, followed: false} : el)
            return copyState
        default:
            return state
    }
}
export function followAC(userId:string):FollowActionType {
    return {type: FOLLOW, userId}
}
export function unfollowAC(userId:string):UnfollowActionType {
    return {type: UNFOLLOW, userId}
}
