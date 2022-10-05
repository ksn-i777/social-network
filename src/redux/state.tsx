let rerenderApp = (state: any) => {

}

let state = {
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
            {id: 1, name: 'Serg Sergeev', ava: 'https://sun9-49.userapi.com/impf/cUB52CTR3gVxO2ELF6mDtWvOqQqVp5uPyyuH4g/WNNDIhckWcY.jpg?size=536x559&quality=96&sign=770bd9ea6958e0bb4533c1ff4f59d46b&type=album'},
            {id: 2, name: 'Eva Ivanova', ava: 'https://cpad.ask.fm/952/205/196/-69996983-1sqedpc-htihnh1g7el9hf0/original/avatar.jpg'},
            {id: 3, name: 'Leon Leonov', ava: 'https://otvet.imgsmail.ru/download/1574387_76738d630770e903cbe0a47a813d08b5_800.jpg'},
            {id: 4, name: 'Kira Kirova', ava: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDIhcGJZS9Bvz0kA1R08qPcujoX9M2FOSOjcmafklux3GrjMot-pMQcKo1UV7ubn8ABE0&usqp=CAU'},
            {id: 5, name: 'Tihon Tihonov', ava: 'https://klike.net/uploads/posts/2019-03/1551511825_37.jpg'},
            {id: 6, name: 'Sveta Svetina', ava: 'http://pristor.ru/wp-content/uploads/2017/05/%D0%9A%D1%80%D0%B0%D1%81%D0%B8%D0%B2%D1%8B%D0%B5-%D0%BA%D0%B0%D1%80%D1%82%D0%B8%D0%BD%D0%BA%D0%B8-%D0%B0%D0%B2%D0%BA%D0%B8-%D0%B4%D0%BB%D1%8F-%D0%B4%D0%B5%D0%B2%D1%83%D1%88%D0%B5%D0%BA-%D1%81%D0%BA%D0%B0%D1%87%D0%B0%D1%82%D1%8C-%D1%81%D0%BC%D0%BE%D1%82%D1%80%D0%B5%D1%82%D1%8C-%D0%B1%D0%B5%D1%81%D0%BF%D0%BB%D0%B0%D1%82%D0%BD%D0%BE-5.jpg'},
            {id: 7, name: 'Petr Petrov', ava: 'https://cpad.ask.fm/14e/63550/45ae/4910/98b7/f810f7cff901/original/35330.jpg'},
            {id: 8, name: 'Leonid Leonidov', ava: 'https://omoro.ru/wp-content/uploads/2018/05/prikilnie-kartinki-na-avatarky-dlia-devyshek-48.jpg'},
            {id: 9, name: 'Kate Semenova', ava: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQe5pEY1rZnd-QwkZY4Xb73i-SdM3FMPArByA&usqp=CAU'},
        ],
        textsData: [
            {id: 1, message: '111'},
            {id: 2, message: '222'},
            {id: 3, message: '333'},
            {id: 4, message: '444'},
            {id: 5, message: '555'},
            {id: 6, message: '666'},
            {id: 7, message: '777'},
            {id: 8, message: '888'},
            {id: 9, message: '999'},
        ],
    },
    sidebar: {
        friendsData: [
            {id: 1, name: 'Serg Sergeev', ava: 'https://sun9-49.userapi.com/impf/cUB52CTR3gVxO2ELF6mDtWvOqQqVp5uPyyuH4g/WNNDIhckWcY.jpg?size=536x559&quality=96&sign=770bd9ea6958e0bb4533c1ff4f59d46b&type=album'},
            {id: 2, name: 'Eva Ivanova', ava: 'https://cpad.ask.fm/952/205/196/-69996983-1sqedpc-htihnh1g7el9hf0/original/avatar.jpg'},
            {id: 3, name: 'Leon Leonov', ava: 'https://otvet.imgsmail.ru/download/1574387_76738d630770e903cbe0a47a813d08b5_800.jpg'},
        ],
    },
};

export const addPost = () => {
    let newPost = {
        id: 6,
        message: state.profilePage.newPostText,
        likes: 0,
    }
    state.profilePage.postsData.push(newPost);
    state.profilePage.newPostText = '';
    rerenderApp(state);
}

export const changeWord = (changeText: any) => {
    state.profilePage.newPostText = changeText;
    rerenderApp(state);
}

export const subscribe = (observer: any) => {
    rerenderApp = observer;
}

export default state;