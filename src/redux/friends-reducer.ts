const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET-USERS';

export type FriendType = {
    id:string
    name:string
    uniqueUrlName:string
    photos: {
        small: string
        large: string
    }
    status:string
    followed:boolean
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
export type SetUsersActionType = {
    type:typeof SET_USERS,
    users:Array<FriendType>,
};

export type FriendsActionsType = FollowActionType | UnfollowActionType | SetUsersActionType;


const initialState:FriendsPageType = {
    friendsData: [],
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
        case SET_USERS:
            copyState.friendsData = action.users
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
export function setUsersAC(users:Array<FriendType>):SetUsersActionType {
    return {type: SET_USERS, users}
}

