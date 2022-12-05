const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET_USERS'
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT'
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'

export type FriendType = {
    id: string
    name: string
    uniqueUrlName: string
    photos: {
        small: string
        large: string
    }
    status: string
    followed: boolean
};
export type FriendsPageType = {
    friendsData: Array<FriendType>,
    currentPage: number,
    pageSize: number,
    totalUsersCount: number,
};

export type FollowActionType = {
    type: typeof FOLLOW,
    userId: string,
};
export type UnfollowActionType = {
    type: typeof UNFOLLOW,
    userId: string,
};
export type SetUsersActionType = {
    type: typeof SET_USERS,
    users: Array<FriendType>,
};
export type SetTotalUsersCountActionType = {
    type: typeof SET_TOTAL_USERS_COUNT,
    totalUsersCount: number,
};
export type SetCurrentPageActionType = {
    type: typeof SET_CURRENT_PAGE,
    currentPage: number,
};

export type FriendsActionsType = FollowActionType
    | UnfollowActionType
    | SetUsersActionType
    | SetTotalUsersCountActionType
    | SetCurrentPageActionType

const initialState:FriendsPageType = {
    friendsData: [],
    currentPage: 1,
    pageSize: 5,
    totalUsersCount: 0,
};

export function friendsReducer(state:FriendsPageType = initialState, action:FriendsActionsType):FriendsPageType {

    switch (action.type) {
        case FOLLOW:
            return {...state, friendsData: state.friendsData.map(el => el.id === action.userId ? {...el, followed: true} : el)}
        case UNFOLLOW:
            return {...state, friendsData: state.friendsData.map(el => el.id === action.userId ? {...el, followed: false} : el)}
        case SET_USERS:
            return {...state, friendsData: action.users}
        case SET_TOTAL_USERS_COUNT:
            return {...state, totalUsersCount: action.totalUsersCount}
        case SET_CURRENT_PAGE:
            return {...state, currentPage: action.currentPage}
        default:
            return state
    }
}
export function followAC(userId: string):FollowActionType {
    return {type: FOLLOW, userId}
}
export function unfollowAC(userId: string):UnfollowActionType {
    return {type: UNFOLLOW, userId}
}
export function setUsersAC(users: Array<FriendType>):SetUsersActionType {
    return {type: SET_USERS, users}
}
export function setTotalUsersCountAC(totalUsersCount: number):SetTotalUsersCountActionType {
    return {type: SET_TOTAL_USERS_COUNT, totalUsersCount}
}
export function setCurrentPageAC(currentPage: number):SetCurrentPageActionType {
    return {type: SET_CURRENT_PAGE, currentPage}
}