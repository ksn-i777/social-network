import {v1} from 'uuid';
import {actionAddNewMessage, actionNewMessageText, MessagesPageType, messagesReducer} from './messages-reducer';

test('correct add text of message', () => {

    const startState:MessagesPageType = {
        usersData: [
            {id: v1(), name: 'Serg Sergeev', ava: 'https://fydi.ru/wp-content/uploads/2021/06/na-avy-parni-60.jpg'},
            {id: v1(), name: 'Eva Ivanova', ava: 'https://fydi.ru/wp-content/uploads/2021/06/na-avy-parni-60.jpg'},
            {id: v1(), name: 'Leon Leonov', ava: 'https://fydi.ru/wp-content/uploads/2021/06/na-avy-parni-60.jpg'},
            {id: v1(), name: 'Kira Kirova', ava: 'https://fydi.ru/wp-content/uploads/2021/06/na-avy-parni-60.jpg'},
            {id: v1(), name: 'Lera Lerova', ava: 'https://fydi.ru/wp-content/uploads/2021/06/na-avy-parni-60.jpg'},
        ],
        textsData: [
            {id: v1(), message: '111'},
            {id: v1(), message: '222'},
            {id: v1(), message: '333'},
            {id: v1(), message: '444'},
            {id: v1(), message: '555'},
        ],
        newMessageText: ''
    }

    const action = actionNewMessageText('aaaaa')

    const endState = messagesReducer(startState, action)

    expect(endState.newMessageText).toBe('aaaaa')
})

test('correct add message', () => {

    const startState:MessagesPageType = {
        usersData: [
            {id: v1(), name: 'Serg Sergeev', ava: 'https://fydi.ru/wp-content/uploads/2021/06/na-avy-parni-60.jpg'},
            {id: v1(), name: 'Eva Ivanova', ava: 'https://fydi.ru/wp-content/uploads/2021/06/na-avy-parni-60.jpg'},
            {id: v1(), name: 'Leon Leonov', ava: 'https://fydi.ru/wp-content/uploads/2021/06/na-avy-parni-60.jpg'},
            {id: v1(), name: 'Kira Kirova', ava: 'https://fydi.ru/wp-content/uploads/2021/06/na-avy-parni-60.jpg'},
            {id: v1(), name: 'Lera Lerova', ava: 'https://fydi.ru/wp-content/uploads/2021/06/na-avy-parni-60.jpg'},
        ],
        textsData: [
            {id: v1(), message: '111'},
            {id: v1(), message: '222'},
            {id: v1(), message: '333'},
            {id: v1(), message: '444'},
            {id: v1(), message: '555'},
        ],
        newMessageText: 'bbb'
    }

    const action = actionAddNewMessage()

    const endState = messagesReducer(startState, action)

    expect(endState.textsData.length).toBe(6)
    expect(endState.textsData[0].message).toBe('bbb')
})