import React from 'react';
import './App.css';

function App() {
  return (
    <div className="app-wrapper">
        <div className="header">
            <img src="https://active-vision.ru/wa-data/public/blog/data/mainpic/post-21-original.jpg" alt="logo"/>
        </div>
        <div className="nav">
            <div><a href="#">Profile</a></div>
            <div><a href="#">Messages</a></div>
            <div><a href="#">News</a></div>
            <div><a href="#">Music</a></div>
            <div><a href="#">Settings</a></div>
        </div>
        <div className="content">
            <div><img src="https://bipbap.ru/wp-content/uploads/2017/04/0_7c779_5df17311_orig.jpg" alt="picture"/></div>
            <div>ava</div>
            <div>posts
                <div>new post</div>
                <div>posts</div>
            </div>
        </div>
    </div>
  );
}

export default App;
