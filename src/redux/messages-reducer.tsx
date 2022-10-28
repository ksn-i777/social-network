const NEW_MESSAGE_TEXT = 'NEW-MESSAGE-TEXT';
const NEW_MESSAGE = 'NEW-MESSAGE';

export type MessagesPageType = {
    usersData: Array<UserType>,
    textsData: Array<TextType>,
    newMessageText: string,
};
export type UserType = {
    id: number,
    name: string,
    ava: string,
};
export type TextType = {
    id: number,
    message: string,
};

let initialState:MessagesPageType = {
    usersData: [
        {id: 1, name: 'Serg Sergeev', ava: 'https://cpad.ask.fm/952/205/196/-69996983-1sqedpc-htihnh1g7el9hf0/original/avatar.jpg'},
        {id: 2, name: 'Eva Ivanova', ava: 'https://otvet.imgsmail.ru/download/1574387_76738d630770e903cbe0a47a813d08b5_800.jpg'},
        {id: 3, name: 'Leon Leonov', ava: 'https://cpad.ask.fm/952/205/196/-69996983-1sqedpc-htihnh1g7el9hf0/original/avatar.jpg'},
        {id: 4, name: 'Kira Kirova', ava: 'https://otvet.imgsmail.ru/download/1574387_76738d630770e903cbe0a47a813d08b5_800.jpg'},
        {id: 5, name: 'Lera Lerova', ava: 'https://cpad.ask.fm/952/205/196/-69996983-1sqedpc-htihnh1g7el9hf0/original/avatar.jpg'},
    ],
    textsData: [
        {id: 1, message: '111'},
        {id: 2, message: '222'},
        {id: 3, message: '333'},
        {id: 4, message: '444'},
        {id: 5, message: '555'},
    ],
    newMessageText: '',
}

export function messagesReducer (state = initialState, action: any) {
    // вместо метода, отслеживающего изменение текста сообщения в инпуте messagesPage
    if (action.type === NEW_MESSAGE_TEXT) {
        state.newMessageText = action.newText;
        // вместо метода addMessage
    } else if (action.type === NEW_MESSAGE) {
        let newMessage = {
            id: 6,
            message: state.newMessageText,
        }
        state.textsData.push(newMessage);
        state.newMessageText = '';
    }
    return state;
}
// колл-бэк, запускающий метод отслеживающий изменение текста сообщения в инпуте messagesPage
export const actionNewMessageText = (text: string | undefined) => {
    return {
        type: NEW_MESSAGE_TEXT,
        newText: text,
    }
}
// колл-бэк, запускающий метод добавления сообщения
export const actionAddNewMessage = () => {
    return {
        type: NEW_MESSAGE,
    }
}