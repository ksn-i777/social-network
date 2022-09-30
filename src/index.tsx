import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

let postsData = [
    {id: 1, message: 'Yaaahhhooo', likes: 77},
    {id: 2, message: 'Happy birthday to me!', likes: 100},
    {id: 3, message: 'Have a good day!', likes: 60},
    {id: 4, message: 'How are you?', likes: 30},
    {id: 5, message: 'Hi. It is my first post', likes: 15},
];
let usersData = [
    {id: 1, name: 'Serg'},
    {id: 2, name: 'Eva'},
    {id: 3, name: 'Leon'},
    {id: 4, name: 'Kira'},
    {id: 5, name: 'Tihon'},
    {id: 6, name: 'Sveta'},
    {id: 7, name: 'Petr'},
    {id: 8, name: 'Leonid'},
    {id: 9, name: 'Kate'},
];
let textsData = [
    {id: 1, message: '111'},
    {id: 2, message: '222'},
    {id: 3, message: '333'},
    {id: 4, message: '444'},
    {id: 5, message: '555'},
    {id: 6, message: '666'},
    {id: 7, message: '777'},
    {id: 8, message: '888'},
    {id: 9, message: '999'},
];

ReactDOM.render(
    <App postsData={postsData} usersData={usersData} textsData={textsData}/>,
  document.getElementById('root')
);