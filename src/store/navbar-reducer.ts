export type OnlineFriendType = {
    id:number
    name:string
    ava:string
}
export type NavbarType = {
    onlineFriendsData:Array<OnlineFriendType>,
}

const initialState:NavbarType = {
    onlineFriendsData: [
        {id: 1, name: 'Serg Sergeev', ava: ''},
        {id: 2, name: 'Eva Ivanova', ava: ''},
        {id: 3, name: 'Leon Leonov', ava: ''},
    ]
}

export function navbarReducer(navbar:NavbarType = initialState, action:any):NavbarType {
    return navbar;
}