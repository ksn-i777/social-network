import React from "react";
import s from "./Header.module.css"

function Header() {
    return(
        <header className={s.header}>
            <img src="https://active-vision.ru/wa-data/public/blog/data/mainpic/post-21-original.jpg" alt="logo"/>
        </header>
    )
}

export default Header;