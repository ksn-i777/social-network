import React from "react";
import s from './About.module.css';
import {Photo} from "./Photo/Photo";
import {Description} from "./Description/Description";

export function About() {
    return(
        <div className={s.about}>
            <Photo />
            <Description />
        </div>
    )
};
