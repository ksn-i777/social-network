export type OnlineFriendType = {
    id:number,
    name:string,
    ava:string,
};
export type NavbarType = {
    onlineFriendsData:Array<OnlineFriendType>,
};

const initialState:NavbarType = {
    onlineFriendsData: [
        {id: 1, name: 'Serg Sergeev', ava: 'https://klike.net/uploads/posts/2019-03/medium/1551514041_16.jpg'},
        {id: 2, name: 'Eva Ivanova', ava: 'https://klike.net/uploads/posts/2019-03/medium/1551514041_16.jpg'},
        {id: 3, name: 'Leon Leonov', ava: 'https://klike.net/uploads/posts/2019-03/medium/1551514041_16.jpg'},
    ],
};

export function navbarReducer(navbar = initialState, action:any):NavbarType {
    return navbar;
}