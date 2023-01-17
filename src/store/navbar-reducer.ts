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
        {id: 1, name: 'Serg Sergeev', ava: 'https://mixmag.io/wp-content/uploads/2021/05/discord-avatar-1024x576.jpg'},
        {id: 2, name: 'Eva Ivanova', ava: 'https://mixmag.io/wp-content/uploads/2021/05/discord-avatar-1024x576.jpg'},
        {id: 3, name: 'Leon Leonov', ava: 'https://mixmag.io/wp-content/uploads/2021/05/discord-avatar-1024x576.jpg'},
    ]
}

export function navbarReducer(navbar:NavbarType = initialState, action:any):NavbarType {
    return navbar;
}