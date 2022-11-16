const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';

export type FriendType = {
    id:number,
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
    userId:number,
};
export type UnfollowActionType = {
    type:typeof UNFOLLOW,
    userId:number,
};
export type FriendsActionsType = FollowActionType | UnfollowActionType;


let initialState:FriendsPageType = {
    friendsData: [
        {id: 1, name: 'Alex', followed: true, status: 'blablabla1', location: {country: 'Belarus', city: 'Minsk'}, photo: 'https://avatarko.ru/img/kartinka/25/zhivotnye_kot_prikol_text_24177.jpg'},
        {id: 2, name: 'Serg', followed: false, status: 'blablabla2', location: {country: 'Italy', city: 'Rome'}, photo: 'https://avatarko.ru/img/kartinka/25/zhivotnye_kot_prikol_text_24177.jpg'},
        {id: 3, name: 'Petr', followed: true, status: 'blablabla3', location: {country: 'Kazahstan', city: 'Astana'}, photo: 'https://avatarko.ru/img/kartinka/25/zhivotnye_kot_prikol_text_24177.jpg'},
        {id: 4, name: 'Ivan', followed: false, status: 'blablabla4', location: {country: 'Uzbekistan', city: 'Taskent'}, photo: 'https://avatarko.ru/img/kartinka/25/zhivotnye_kot_prikol_text_24177.jpg'},
        {id: 5, name: 'Gleb', followed: true, status: 'blablabla5', location: {country: 'USA', city: 'Washington'}, photo: 'https://avatarko.ru/img/kartinka/25/zhivotnye_kot_prikol_text_24177.jpg'},
    ],
};

export function friendsReducer(state:FriendsPageType = initialState, action:FriendsActionsType):FriendsPageType {

    const copyState:FriendsPageType = {...state}

    if (action.type === FOLLOW) {
        copyState.friendsData = state.friendsData.map((el) => {
            if (el.id === action.userId) {
                return {...el, followed: true}
            }
            return el
        })
    }

    if (action.type === UNFOLLOW) {
        copyState.friendsData = state.friendsData.map((el) => {
            if (el.id === action.userId) {
                return {...el, followed: false}
            }
            return el
        })
    }
    return copyState
}
export function followAC(userId:number):FollowActionType {
    return {type: FOLLOW, userId}
}
export function unfollowAC(userId:number):UnfollowActionType {
    return {type: UNFOLLOW, userId}
}
