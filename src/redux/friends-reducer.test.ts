import {followAC, FriendsPageType, friendsReducer, unfollowAC} from './friends-reducer';

test('correct following', () => {
    const startstate:FriendsPageType = {
        friendsData: [
            {id: '1', name: 'Alex', followed: true, status: 'blablabla1', location: {country: 'Belarus', city: 'Minsk'}, photo: 'https://avatarko.ru/img/kartinka/25/zhivotnye_kot_prikol_text_24177.jpg'},
            {id: '2', name: 'Serg', followed: false, status: 'blablabla2', location: {country: 'Italy', city: 'Rome'}, photo: 'https://avatarko.ru/img/kartinka/25/zhivotnye_kot_prikol_text_24177.jpg'},
            {id: '3', name: 'Petr', followed: true, status: 'blablabla3', location: {country: 'Kazahstan', city: 'Astana'}, photo: 'https://avatarko.ru/img/kartinka/25/zhivotnye_kot_prikol_text_24177.jpg'},
            {id: '4', name: 'Ivan', followed: false, status: 'blablabla4', location: {country: 'Uzbekistan', city: 'Taskent'}, photo: 'https://avatarko.ru/img/kartinka/25/zhivotnye_kot_prikol_text_24177.jpg'},
            {id: '5', name: 'Gleb', followed: true, status: 'blablabla5', location: {country: 'USA', city: 'Washington'}, photo: 'https://avatarko.ru/img/kartinka/25/zhivotnye_kot_prikol_text_24177.jpg'},
        ]
    }

    const action1 = followAC('2')
    const action2 = followAC('4')

    const endState1 = friendsReducer(startstate, action1)
    const endState2 = friendsReducer(startstate, action2)

    expect(endState1.friendsData[1].followed).toBe(true)
    expect(endState2.friendsData[3].followed).toBe(true)
})

test('correct unfollowing', () => {
    const startstate:FriendsPageType = {
        friendsData: [
            {id: '1', name: 'Alex', followed: true, status: 'blablabla1', location: {country: 'Belarus', city: 'Minsk'}, photo: 'https://avatarko.ru/img/kartinka/25/zhivotnye_kot_prikol_text_24177.jpg'},
            {id: '2', name: 'Serg', followed: false, status: 'blablabla2', location: {country: 'Italy', city: 'Rome'}, photo: 'https://avatarko.ru/img/kartinka/25/zhivotnye_kot_prikol_text_24177.jpg'},
            {id: '3', name: 'Petr', followed: true, status: 'blablabla3', location: {country: 'Kazahstan', city: 'Astana'}, photo: 'https://avatarko.ru/img/kartinka/25/zhivotnye_kot_prikol_text_24177.jpg'},
            {id: '4', name: 'Ivan', followed: false, status: 'blablabla4', location: {country: 'Uzbekistan', city: 'Taskent'}, photo: 'https://avatarko.ru/img/kartinka/25/zhivotnye_kot_prikol_text_24177.jpg'},
            {id: '5', name: 'Gleb', followed: true, status: 'blablabla5', location: {country: 'USA', city: 'Washington'}, photo: 'https://avatarko.ru/img/kartinka/25/zhivotnye_kot_prikol_text_24177.jpg'},
        ]
    }

    const action1 = unfollowAC('1')
    const action2 = unfollowAC('3')
    const action3 = unfollowAC('5')

    const endState1 = friendsReducer(startstate, action1)
    const endState2 = friendsReducer(startstate, action2)
    const endState3 = friendsReducer(startstate, action3)

    expect(endState1.friendsData[0].followed).toBe(false)
    expect(endState2.friendsData[2].followed).toBe(false)
    expect(endState3.friendsData[4].followed).toBe(false)
})